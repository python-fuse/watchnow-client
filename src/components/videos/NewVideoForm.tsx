"use client";

import Button from "../global/Button";
import FormInput from "../global/FormInput";
import { useState } from "react";
import VideoService from "@/lib/VideoService";
import useAuth from "@/hooks/useAuth";

const NewVideoForm = () => {
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useAuth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user === null) return;
    if (!videoUrl) return;
    try {
      setLoading(true);
      VideoService.createVideo(user?.id, videoUrl);
      setLoading(false);
    } catch (e) {
      console.error(e);
    } finally {
      setVideoUrl("");
    }
  };

  return (
    <form className="flex flex-col gap-y-8" onSubmit={handleSubmit}>
      <FormInput
        label="Video URL"
        type="text"
        placeholder="Enter video URL"
        id="video-url"
        value={videoUrl}
        onChange={setVideoUrl}
      />

      <Button text="Add Video" type="submit" loading={loading}>
        Add Video
      </Button>
    </form>
  );
};
export default NewVideoForm;
