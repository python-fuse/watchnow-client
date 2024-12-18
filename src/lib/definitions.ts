export type TVideo = {
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

export type TUser = {
  id: string;
  email: string;
  name?: string;
  role: string;
  reminderFrequency: "DAILY" | "TWO_DAYS" | "THREE_DAYS" | "WEEKLY";
  createdAt: string;
  updatedAt: string;
};

export type TToastItem = {
  id: string;
  content: string;
  status: "error" | "warning" | "success" | "info";
  duration?: number;
};

export type TReminder = {
  id: string;
  videoId: string;
  userId: string;
  reminderTime: Date;
  status: "Pending" | "Sent" | "Cancelled";
  notificationType: "EMAIL" | "WEB_PUSH" | "BOTH";
  createdAt: Date;
  updatedAt: Date;
};
