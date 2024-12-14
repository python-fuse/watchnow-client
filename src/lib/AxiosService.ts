import axios from "axios";

class AxiosService {
  axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    withCredentials: true,
  });
}

export default new AxiosService().axiosInstance;
