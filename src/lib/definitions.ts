export type Video = {
  id: string;
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  youtubeId: string;
  userId: string;
  status: "Not Started" | "Watching" | "Finished";
  createdAt: string;
  updatedAt: string;
};

export type User = {
  id: string;
  email: string;
  name?: string;
  role: string;
  createdAt: string;
  updatedAt: string;
};
