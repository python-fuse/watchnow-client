"use client";

import VideoService from "@/lib/VideoService";

const page = () => {
  const userId = JSON.parse(localStorage.getItem("user")!).id;
  const videos = VideoService.getVideos(userId);
  return (
    <div className="flex flex-col gap-y-4">
      <h2 className="text-2xl font-semibold">Saved videos</h2>
    </div>
  );
};
export default page;
