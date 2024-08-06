export type Payment = {
  amount: number | null;
  createdAt: Date;
  id: string;
  status?: "Option1" | null;
  student: string | null;
  updatedAt: Date;
};
