import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { GradeListRelationFilter } from "../grade/GradeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ClassModelWhereInput = {
  course?: CourseWhereUniqueInput;
  grades?: GradeListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
