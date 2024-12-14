import axios from "@/lib/AxiosService";

class VideoService {
  static async getVideos(userId: string) {
    try {
      const response = await axios.get(`/api/videos/user/${userId}`, {
        withCredentials: true,
      });
      const data = await response.data;
      console.log(data);
      return data;
    } catch (e) {
      throw e;
    }
  }
}

export default VideoService;
