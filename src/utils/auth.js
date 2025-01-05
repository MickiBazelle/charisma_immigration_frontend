import { useUserStore } from "../store/auth2";
import axios from "./axios_client";
import jwt_decode from "jwt-decode";
import Cookie from "js-cookie";
import { toast } from "react-toastify";
import axiosInstance from "../axios";

export const loginUser = async (email, password) => {
  try {
    const { data, status } = await axios.post("/clients/login/", {
      email,
      password,
    });
    if (status === 200 || status === 201) {
      const userData = data.data;
      const user = {
        fullName: userData.full_name,
        email: userData.user.email,
        isActive: userData.user.is_active,
        isClient: userData.user.is_client,
        id: userData.id,
      };
      const { setUser } = useUserStore.getState();
      setUser(user);

      setAuthToken(data.token, data.refresh_token);
    }
    return { data, error: null };
  } catch (error) {
    const responseMessage = error.response.data.message;
    // const errorMessage = responseMessage.non_field_errors[0];
    return {
      data: null,
      error: responseMessage,
    };
  }
};

export const register = async (first_name, last_name, email, password) => {
  try {
    const { data } = await axios.post("/clients/register", {
      first_name,
      last_name,
      email,
      password,
    });
    await loginUser(email, password);
    return { data, error: null };
  } catch (error) {
    return {
      data: null,
      error: error.response.data.message ?? "Something went wrong",
    };
  }
};

export const logout = async () => {
  try {
    const token = Cookie.get("token");
    const refresh_token = Cookie.get("refresh_token");
    const { data, status } = await axios.post(
      "/accounts/logout/",
      {
        refresh_token: refresh_token,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (status === 200) {
      Cookie.remove("token");
      Cookie.remove("refresh_token");
      useUserStore.getState().setUser(null);
      return { data, error: null };
    }
  } catch (error) {
    return {
      data: null,
      error: "Could not logout. Try again later",
    };
  }
};

// export const setUser = async () => {
//   const token = Cookie.get("token");
//   const refresh_token = Cookie.get("refresh_token");

//   if (!token || !refresh_token) {
//
//     return;
//   }
//   if (isAccessTokenExpired(token)) {
//     const response = getRefreshToken(refresh_token);
//     setAuthToken(response.token, response.refresh_token);
//   } else {
//     setAuthToken(token, refresh_token);
//   }
// };

export const setAuthToken = (token, refresh_token) => {
  Cookie.set("token", token, {
    expires: 1,
    secure: true,
  });
  Cookie.set("refresh_token", refresh_token, {
    expires: 7,
    secure: true,
  });
  // const user = useUserStore.getState().user;
  // const user = useAuthStore.getState().allUserData; //jwt_decode(token) ?? null;
  // if (user) {
  //   useAuthStore.getState().setUser(user);
  // } else {
  //   setAuthToken.getState().setLoading(false);
  // }
};

export const getRefreshToken = async () => {
  const refresh_token = Cookie.get("refresh_token");
  const response = await axios.post("/token/refresh", {
    refresh: refresh_token,
  });
  return response.data;
};

export const isAccessTokenExpired = (token) => {
  try {
    const decodedToken = jwt_decode(token);
    return decodedToken.exp < Date.now() / 1000;
  } catch (error) {
    return true;
  }
};

export const inValidateUser = () => {
  Cookie.remove("token");
  Cookie.remove("refresh_token");
  useUserStore.getState().setUser(null);
};
