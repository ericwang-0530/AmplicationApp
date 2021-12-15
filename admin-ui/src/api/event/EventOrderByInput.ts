import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  createdAt?: SortOrder;
  name?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
