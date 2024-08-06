import { ClassModel } from "../classModel/ClassModel";

export type Grade = {
  classField?: ClassModel | null;
  createdAt: Date;
  grade: number | null;
  id: string;
  student: string | null;
  updatedAt: Date;
};
