import axios from "./AxiosService";

class AuthService {
  async login(email: string, password: string) {
    try {
      const response = await axios.post(`/api/auth/login`, {
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
      const response = await axios.post(
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
      const response = await axios.get("/api/auth/check-auth", {
        withCredentials: true,
      });
      return response.data;
    } catch (e) {
      throw e;
    }
  }

  async logout() {
    try {
      await axios.post("/api/auth/logout");
      localStorage.removeItem("user");
    } catch (e) {
      throw e;
    }
  }
}

export default new AuthService();
