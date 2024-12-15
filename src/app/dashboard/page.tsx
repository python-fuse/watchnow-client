"use client";

import Button from "@/components/global/Button";
import Spinner from "@/components/global/Spinner";
import VideoCard from "@/components/videos/VideoCard";
import { useModal } from "@/contexts/modalContext";
import useAuth from "@/hooks/useAuth";
import { Video } from "@/lib/definitions";
import VideoService from "@/lib/VideoService";
import { error } from "console";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import io, { Socket } from "socket.io-client";

const page = () => {
  const { user, loading } = useAuth();
  const [videos, setVideos] = useState<Video[]>([]);
  const [socket, setSocket] = useState<Socket | null>(null);

  const { openModal } = useModal();
  useEffect(() => {
    const getUserVideos = async () => {
      console.log(user);
      const res = await VideoService.getVideos(user?.id!);
      console.log(res);
      setVideos([...res]);
    };

    if (!loading && user) {
      getUserVideos();
    }
  }, [loading, user]);

  useEffect(() => {
    const newSocket = io("http://localhost:3031");
    newSocket.on("connect", () => {
      console.log("Connected");
    });

    newSocket.on("connect_error", (error) => {
      console.log("Socket connection error: ", error);
    });

    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, []);

  useEffect(() => {
    if (!socket || !user) return;

    const handleNewVideo = (newVideo: Video) => {
      console.log(newVideo);
      setVideos([...videos, newVideo]);
    };

    const handleUpdate = async (newVideo: Video) => {
      const res = await VideoService.getVideos(user?.id);
      setVideos([...res]);
    };

    // listen for new videos
    socket.on("video:added", handleNewVideo);
    socket.on("video:updated", handleUpdate);
    socket.on("video:deleted", handleUpdate);

    return () => {
      socket.off("video:added", handleNewVideo);
      socket.off("video:updated", handleUpdate);
      socket.off("video:deleted", handleUpdate);
    };
  }, [socket, user, videos]);

  return (
    <div className="flex flex-col gap-y-4 responsive-container ">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold">Saved videos</h2>

        <Button text="Add Video" onClick={() => openModal()}>
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
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      )}
    </div>
  );
};
export default page;
