import AxiosService from "./AxiosService";
import { TUser } from "./definitions";

class ReminderService {
  static user: TUser | null = null;
  static loadUser() {
    const userData = localStorage.getItem("user");
    if (userData) {
      this.user = JSON.parse(userData) as TUser;
    } else {
      throw new Error("User not found in localStorage");
    }
  }
  static async createReminder(userId: string) {
    try {
      await AxiosService.post("/api/reminders/create", {
        userId,
        frequency: this.user?.reminderFrequency || "DAILY",
      });
    } catch (e) {
      throw e;
    }
  }
}

export default ReminderService;
