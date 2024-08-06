import { ClassModelWhereUniqueInput } from "../classModel/ClassModelWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type GradeWhereInput = {
  classField?: ClassModelWhereUniqueInput;
  grade?: IntNullableFilter;
  id?: StringFilter;
  student?: StringNullableFilter;
};
