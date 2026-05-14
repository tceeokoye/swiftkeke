import Axios from "axios";

const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  maxBodyLength: Infinity,
  headers: {
    Accept: "application/json",
  },
});

// Attach token from localStorage on every request
axios.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers = config.headers ?? {};
      config.headers["Authorization"] = `Bearer ${token}`;
    }
  }

  if (config.data instanceof FormData) {
    // Let the browser set multipart boundary
    delete config.headers?.["Content-Type"];
  }

  return config;
});

export default axios;
