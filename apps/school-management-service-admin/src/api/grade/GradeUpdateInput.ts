import { ClassModelWhereUniqueInput } from "../classModel/ClassModelWhereUniqueInput";

export type GradeUpdateInput = {
  classField?: ClassModelWhereUniqueInput | null;
  grade?: number | null;
  student?: string | null;
};
