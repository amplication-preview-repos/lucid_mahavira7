import { SortOrder } from "../../util/SortOrder";

export type TimetableOrderByInput = {
  classField?: SortOrder;
  createdAt?: SortOrder;
  day?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  startTime?: SortOrder;
  updatedAt?: SortOrder;
};
