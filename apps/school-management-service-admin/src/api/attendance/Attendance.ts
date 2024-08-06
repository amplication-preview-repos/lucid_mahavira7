export type Attendance = {
  createdAt: Date;
  date: Date | null;
  id: string;
  status: boolean | null;
  student: string | null;
  updatedAt: Date;
};
