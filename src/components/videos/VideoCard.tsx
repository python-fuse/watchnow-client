import { Video } from "@/lib/definitions";
import Button from "../global/Button";
import VideoService from "@/lib/VideoService";
import Modal from "../global/Modal";
import { useModal } from "@/contexts/modalContext";
import EditVideoModal from "./NewVideoModal";
import { useState } from "react";
import Image from "next/image";
import NewVideoModal from "./NewVideoModal";

interface VideoCardProps {
  video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const [loading, setLoading] = useState(false);
  const { closeModal } = useModal();

  const handleWatch = async (status: Video["status"]) => {
    setLoading(true);
    await VideoService.updateVideo(video.id, {
      status: status,
    });
    if (status === "Watching") {
      window.open(video.url, "_blank");
    }
    setLoading(false);
    // window.location.reload();
  };

  return (
    <>
      <NewVideoModal video={video} closeModal={closeModal} />
      <div className="relative rounded-md bg-white flex overflow-hidden h-40 gap-x-5">
        <div
          className={
            "absolute top-0 left-0 p-2 rounded-br-md " +
            `${
              video.status === "Not Started"
                ? "bg-red-500"
                : video.status === "Watching"
                ? "bg-yellow-500"
                : "bg-green-500"
            }`
          }
        >
          <span className="text-white text-sm font-semibold">
            {video.status}
          </span>
        </div>

        <div className="thumbnail w-2/5 md:w-[250px] ">
          <Image
            src={video.thumbnail || "https://via.placeholder.com/200"}
            className="w-full h-full object-cover"
            width={200}
            height={200}
            alt={video.title}
          />
        </div>

        <div className="flex flex-col py-2 pr-5 w-3/5 md:flex-1">
          <h2 className="text-lg md:text-xl font-bold truncate md:w-4/5">
            {video.title}
          </h2>
          <div className="w-4/5 h-10 text-gray-400 text-xs text-wrap">
            <p>{video.description.slice(0, 100)}...</p>
          </div>

          <div className="flex gap-x-2 mt-auto h-7 md:h-auto  w-full ">
            <Button
              text="Watch"
              className="text-xs md:px-7 md:text-sm bg-green-600 p-2"
              onClick={() => handleWatch("Watching")}
              loading={loading}
            />

            <Button
              text="Delete"
              className="text-xs md:px-7 md:text-sm bg-red-600 p-2"
              onClick={async () => {
                await VideoService.deleteVideo(video.id);
              }}
            />

            {video.status !== "Finished" && (
              <Button
                text="Done"
                className="text-xs md:px-7 md:text-sm bg-green-600 p-2 ml-auto"
                onClick={() => handleWatch("Finished")}
                loading={loading}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default VideoCard;
