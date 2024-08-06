import { ClassModelWhereUniqueInput } from "../classModel/ClassModelWhereUniqueInput";

export type GradeCreateInput = {
  classField?: ClassModelWhereUniqueInput | null;
  grade?: number | null;
  student?: string | null;
};
