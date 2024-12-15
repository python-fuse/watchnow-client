"use client";

import Button from "@/components/global/Button";
import Spinner from "@/components/global/Spinner";
import VideoCard from "@/components/videos/VideoCard";
import useAuth from "@/hooks/useAuth";
import { User, Video } from "@/lib/definitions";
import VideoService from "@/lib/VideoService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";

const page = () => {
  const { user, loading } = useAuth();
  const [userVideos, setUserVideos] = useState<Video[]>([]);
  const router = useRouter();

  useEffect(() => {
    const getUserVideos = async () => {
      console.log(user);
      const res = await VideoService.getVideos(user?.id!);
      console.log(res);
      setUserVideos([...res]);
    };

    if (!loading && user) {
      getUserVideos();
    }
  }, [loading, user]);

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold">Saved videos</h2>

        <Button
          text="Add Video"
          onClick={() => router.push("/dashboard/videos/add")}
        >
          <FaPlus />
          Add Video
        </Button>
      </div>
      {loading && !user ? (
        <div className="flex w-full h-40  justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="flex flex-col gap-y-2 text-black">
          {userVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      )}
    </div>
  );
};
export default page;
