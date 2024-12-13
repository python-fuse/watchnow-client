import axios from "axios";

class AuthService {
  static async login(email: string, password: string) {
    try {
      const response = await axios.post(
        "http://localhost:3031/api/auth/login",
        {
          email,
          password,
        }
      );
      return response.data;
    } catch (e) {
      throw e;
    }
  }

  static async register(
    email: string,
    password: string,
    name: string | undefined
  ) {
    try {
      const response = await axios.post(
        "http://localhost:3031/api/auth/register",
        {
          email,
          password,
          name,
        }
      );
      return response.data;
    } catch (e) {
      throw e;
    }
  }
}

export default AuthService;
