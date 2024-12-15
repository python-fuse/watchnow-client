import axios from "@/lib/AxiosService";
import { Video } from "./definitions";

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

  static async createVideo(userId: string, url: string  ) {
    try {
      const response = await axios.post(
        `/api/videos/withUrl//user/${userId}`,
        { url },
        {
          withCredentials: true,
        }
      );
      const data = await response.data;
      return data;
    } catch (e) {
      throw e;
    }
  }

  static async addVideo(userId: string, video: Video) {
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

  static async updateVideo(videoId: string, videoData: Partial<Video>) {
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
