import axios from "axios";
import config from "../config";
import Cookie from "js-cookie";

// const baseURL = "http://127.0.0.1:9999/api/v1/";
// const baseURL = "https://charismaimmigration.up.railway.app/api/v1/";

const nonAuthEndpoints = [
  "/accounts/login/",
  "/messages/",
  "/clients/login/",
  "/login/",
  "/clients/register/",
  "testimonials/",
];

const axiosClientInstance = axios.create({
  baseURL: config.baseURLProd,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

axiosClientInstance.interceptors.request.use(
  (config) => {
    const token = Cookie.get("token");

    if (!nonAuthEndpoints.includes(config.url)) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosClientInstance.interceptors.response.use(
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
      window.location = "/login/"; // Redirect to /login/
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
      const refreshToken = Cookie.get("refreshToken");

      if (refreshToken) {
        const tokenParts = JSON.parse(atob(refreshToken.split(".")[1]));

        // exp date in token is expressed in seconds, while now() returns milliseconds:
        const now = Math.ceil(Date.now() / 1000);

        if (tokenParts.exp > now) {
          return axiosClientInstance
            .post("/token/refresh/", { refresh: refreshToken })
            .then((response) => {
              setAuthToken(response.data.token, response.data.refresh_token);

              axiosClientInstance.defaults.headers["Authorization"] =
                "JWT " + response.data.access;
              originalRequest.headers["Authorization"] =
                "JWT " + response.data.access;

              return axiosClientInstance(originalRequest);
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

export default axiosClientInstance;
