export type Message = {
  content: string | null;
  createdAt: Date;
  id: string;
  recipient: string | null;
  sender: string | null;
  updatedAt: Date;
};
