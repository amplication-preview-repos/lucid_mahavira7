import { ClassModelListRelationFilter } from "../classModel/ClassModelListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CourseWhereInput = {
  classes?: ClassModelListRelationFilter;
  creditHours?: IntNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
