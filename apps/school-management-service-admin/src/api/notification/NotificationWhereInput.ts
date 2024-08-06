import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type NotificationWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  isRead?: BooleanNullableFilter;
  recipient?: StringNullableFilter;
  title?: StringNullableFilter;
};
