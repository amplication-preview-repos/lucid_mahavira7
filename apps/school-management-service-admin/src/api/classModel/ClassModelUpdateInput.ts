import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { GradeUpdateManyWithoutClassModelsInput } from "./GradeUpdateManyWithoutClassModelsInput";

export type ClassModelUpdateInput = {
  course?: CourseWhereUniqueInput | null;
  grades?: GradeUpdateManyWithoutClassModelsInput;
  name?: string | null;
};
