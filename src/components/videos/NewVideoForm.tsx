"use client";

import Button from "../global/Button";
import FormInput from "../global/FormInput";
import { useState } from "react";
import VideoService from "@/lib/VideoService";
import useAuth from "@/hooks/useAuth";
import { useToast } from "@/contexts/toastContext";

const NewVideoForm = ({ close }: { close: () => void }) => {
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user === null) return;
    if (!videoUrl) return;
    try {
      setLoading(true);
      await VideoService.createVideo(user?.id, videoUrl);
      setLoading(false);
      setVideoUrl("");
      addToast({
        status: "success",
        content: "Video added succesfully!",
      });
      close();
    } catch (e) {
      console.error(e);
      addToast({
        content: "An error occured!",
        status: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-col gap-y-8 " onSubmit={handleSubmit}>
      <FormInput
        label="Video URL"
        type="text"
        placeholder="Enter video URL"
        id="video-url"
        value={videoUrl}
        onChange={setVideoUrl}
        className="placeholder:text-black"
      />

      {user && (
        <Button text="Add Video" type="submit" loading={loading}>
          Add Video
        </Button>
      )}
    </form>
  );
};
export default NewVideoForm;
