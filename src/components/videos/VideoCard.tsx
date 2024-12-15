import { Video } from "@/lib/definitions";
import Button from "../global/Button";
import VideoService from "@/lib/VideoService";
import Modal from "../global/Modal";
import { useModal } from "@/contexts/modalContext";
import EditVideoModal from "./EditVideoModal";
import { useState } from "react";

interface VideoCardProps {
  video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const [loading, setLoading] = useState(false);
  const { openModal, closeModal } = useModal();

  const handleWatch = async (status: Video["status"]) => {
    setLoading(true);
    await VideoService.updateVideo(video.id, {
      status: status,
    });
    if (status === "Watching") {
      window.open(video.url, "_blank");
    }
    setLoading(false);
    window.location.reload();
  };

  return (
    <>
      <EditVideoModal video={video} closeModal={closeModal} />
      <div className="relative rounded-md bg-white flex overflow-hidden h-40 gap-x-5">
        <div
          className={
            "absolute top-0 right-0 p-2 rounded-bl-md " +
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

        <div className="thumbnail w-1/5 ">
          <img
            src={video.thumbnail || "https://via.placeholder.com/200"}
            className="w-full h-full object-cover"
            alt="thumbnail"
          />
        </div>

        <div className="flex flex-col py-2 pr-5 flex-1">
          <h2 className="text-2xl font-bold">{video.title}</h2>
          <p className="truncate">{video.description}</p>

          <div className="flex gap-x-2 mt-auto w-full ">
            <Button
              text="Watch"
              className="px-7 text-sm bg-green-600"
              onClick={() => handleWatch("Watching")}
              loading={loading}
            />

            <Button
              text="Delete"
              className="px-7 text-sm bg-red-600"
              onClick={async () => {
                await VideoService.deleteVideo(video.id);
              }}
            />

            {video.status !== "Finished" && (
              <Button
                text="Mark as Finished"
                className="ml-auto  text-xs "
                onClick={() => handleWatch("Finished")}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default VideoCard;
