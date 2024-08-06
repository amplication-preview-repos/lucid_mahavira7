export type Notification = {
  content: string | null;
  createdAt: Date;
  id: string;
  isRead: boolean | null;
  recipient: string | null;
  title: string | null;
  updatedAt: Date;
};
