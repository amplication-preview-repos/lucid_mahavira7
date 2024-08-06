import { Course } from "../course/Course";
import { Grade } from "../grade/Grade";

export type ClassModel = {
  course?: Course | null;
  createdAt: Date;
  grades?: Array<Grade>;
  id: string;
  name: string | null;
  updatedAt: Date;
};
