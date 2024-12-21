import axios from "axios";

const config = {
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": "true",
  },
};

class AxiosService {
  axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export default new AxiosService().axiosInstance;
