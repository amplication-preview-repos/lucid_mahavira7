import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { GradeCreateNestedManyWithoutClassModelsInput } from "./GradeCreateNestedManyWithoutClassModelsInput";

export type ClassModelCreateInput = {
  course?: CourseWhereUniqueInput | null;
  grades?: GradeCreateNestedManyWithoutClassModelsInput;
  name?: string | null;
};
