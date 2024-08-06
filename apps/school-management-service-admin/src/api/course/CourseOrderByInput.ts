import { SortOrder } from "../../util/SortOrder";

export type CourseOrderByInput = {
  createdAt?: SortOrder;
  creditHours?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
