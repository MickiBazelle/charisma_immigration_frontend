import axios from "axios";
import Cookies from "js-cookie";
import { getRefreshToken, isAccessTokenExpired, setAuthUser } from "./auth";
import config from "../config";

const useAxios = () => {
  const token = Cookies.get("token");
  const refresh_token = Cookies.get("refresh_token");

  const axiosInstance = axios.create({
    baseURL: config.baseURLProd,
    headers: { Authorization: `Bearer ${token}` },
  });

  axiosInstance.interceptors.request.use(async (req) => {
    if (!isAccessTokenExpired) {
      return req;
    }
    const response = await getRefreshToken(refresh_token);
    setAuthUser(response.token, response.refresh_token);
    req.headers.Authorization = `Bearer ${response.data?.access}`;
    return req;
  });

  return axiosInstance;
};

export default useAxios;
