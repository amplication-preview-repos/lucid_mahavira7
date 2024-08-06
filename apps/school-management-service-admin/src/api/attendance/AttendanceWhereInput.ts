import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AttendanceWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  status?: BooleanNullableFilter;
  student?: StringNullableFilter;
};
