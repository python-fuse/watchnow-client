import axiosInstance from "./AxiosService";

class AuthService {
  async login(email: string, password: string) {
    try {
      const response = await axiosInstance.post(`/api/auth/login`, {
        email,
        password,
      });
      localStorage.setItem("user", JSON.stringify(response.data.user));
      return response.data;
    } catch (e) {
      throw e;
    }
  }

  async register(email: string, password: string, name: string | undefined) {
    try {
      const response = await axiosInstance.post(
        "/api/auth/register",
        {
          email,
          password,
          name,
        },
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (e) {
      throw e;
    }
  }
  async checkAuth() {
    try {
      const response = await axiosInstance.get("/api/auth/check-auth", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Origin:
            process.env.NODE_ENV === "development"
              ? "http://localhost:3000"
              : "https://tubebuddy.vercel.app",
        },
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      console.error("Auth check failed:", error);
      throw error;
    }
  }

  async logout() {
    try {
      await axiosInstance.post("/api/auth/logout");
      localStorage.removeItem("user");
    } catch (e) {
      throw e;
    }
  }
}

export default new AuthService();
