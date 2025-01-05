import axios from "axios";
import config from "./config";

const nonAuthEndpoints = [
  "/accounts/login/",
  "/messages/",
  "/clients/login/",
  "/clients/register/",
  "testimonials/",
];

const axiosInstance = axios.create({
  baseURL: config.baseURLProd.startsWith("http")
    ? `${config.baseURLProd}`
    : `https://${config.baseURLProd}`,
  timeout: 15000,
  headers: {
    // Authorization: localStorage.getItem("token")
    //   ? "Bearer " + localStorage.getItem("token")
    //   : null,
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    console.log(`TOKEN=> ${token}`);
    if (!nonAuthEndpoints.includes(config.url)) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    if (typeof error.response === "undefined") {
      alert(
        "A server/network error occurred. " +
          "Looks like CORS might be the problem. " +
          "Sorry about this - we will get it fixed shortly."
      );
      return Promise.reject(error);
    }
    if (
      error.response.status === 403 &&
      error.response.data.code === "token_not_valid"
    ) {
      window.location = "/accounts/login"; // Redirect to /accounts/login
      return Promise.reject(error);
    }

    if (
      error.response.status === 401 &&
      originalRequest.url === config.baseURLProd + "token/refresh/"
    ) {
      window.location.href = "/login/";
      return Promise.reject(error);
    }

    if (
      error.response.data.code === "token_not_valid" &&
      error.response.status === 401 &&
      error.response.statusText === "Unauthorized"
    ) {
      const refreshToken = localStorage.getItem("refresh_token");

      if (refreshToken) {
        const tokenParts = JSON.parse(atob(refreshToken.split(".")[1]));

        // exp date in token is expressed in seconds, while now() returns milliseconds:
        const now = Math.ceil(Date.now() / 1000);

        if (tokenParts.exp > now) {
          return axiosInstance
            .post("/token/refresh/", { refresh: refreshToken })
            .then((response) => {
              localStorage.setItem("access_token", response.data.access);
              localStorage.setItem("refresh_token", response.data.refresh);

              axiosInstance.defaults.headers["Authorization"] =
                "JWT " + response.data.access;
              originalRequest.headers["Authorization"] =
                "JWT " + response.data.access;

              return axiosInstance(originalRequest);
            })
            .catch((err) => {});
        } else {
          window.location.href = "/login/";
        }
      } else {
        window.location.href = "/login/";
      }
    }

    // specific error handling done elsewhere
    return Promise.reject(error);
  }
);

export default axiosInstance;
