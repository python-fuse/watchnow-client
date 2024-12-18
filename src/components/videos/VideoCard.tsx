import { TVideo } from "@/lib/definitions";
import Button from "../global/Button";
import VideoService from "@/lib/VideoService";
import { useModal } from "@/contexts/modalContext";
import { useState } from "react";
import Image from "next/image";
import { useToast } from "@/contexts/toastContext";

interface VideoCardProps {
  video: TVideo;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  const handleWatch = async (status: TVideo["status"]) => {
    setLoading(true);
    await VideoService.updateVideo(video.id, {
      status: status,
    });
    addToast({
      status: "success",
      content: "Status updated!",
    });
    if (status === "Watching") {
      window.open(video.url, "_blank");
    }
    setLoading(false);
  };

  return (
    <>
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
          <h2
            className="text-lg md:text-xl font-bold truncate md:w-4/5"
            onClick={() => {
              addToast({
                content: video.title,
                status: "warning",
              });
            }}
          >
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
                try {
                  await VideoService.deleteVideo(video.id);
                  addToast({
                    status: "success",
                    content: "Video deleted!",
                  });
                } catch (e) {
                  addToast({
                    status: "error",
                    content: "Video deletion failed!",
                  });
                }
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
