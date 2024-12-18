import axios from "@/lib/AxiosService";
import { TVideo } from "./definitions";
import ReminderService from "./ReminderService";

class VideoService {
  static async getVideos(userId: string) {
    try {
      const response = await axios.get(`/api/videos/user/${userId}`, {
        withCredentials: true,
      });
      const data = await response.data;
      return data;
    } catch (e) {
      throw e;
    }
  }

  static async createVideo(userId: string, url: string) {
    try {
      const videoRes = await axios.post(
        `/api/videos/withUrl/user/${userId}`,
        { url },
        {
          withCredentials: true,
        }
      );

      const now = new Date();
      now.setMinutes(now.getMinutes());

      const reminerRes = await ReminderService.createReminder(
        videoRes.data.userId
      );
      const data = await videoRes.data;
      return data;
    } catch (e) {
      throw e;
    }
  }

  static async addVideo(userId: string, video: TVideo) {
    try {
      const response = await axios.post(`/api/videos/user/${userId}`, video, {
        withCredentials: true,
      });
      const data = await response.data;
      return data;
    } catch (e) {
      throw e;
    }
  }

  static async updateVideo(videoId: string, videoData: Partial<TVideo>) {
    try {
      const response = await axios.patch(`/api/videos/${videoId}`, videoData, {
        withCredentials: true,
      });
      const data = await response.data;
      return data;
    } catch (e) {
      throw e;
    }
  }

  static async deleteVideo(videoId: string) {
    try {
      const response = await axios.delete(`/api/videos/${videoId}`, {
        withCredentials: true,
      });
      const data = await response.data;
      return data;
    } catch (e) {
      throw e;
    }
  }
}

export default VideoService;
