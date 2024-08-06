import { ClassModel } from "../classModel/ClassModel";

export type Course = {
  classes?: Array<ClassModel>;
  createdAt: Date;
  creditHours: number | null;
  description: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
