import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type EventWhereInput = {
  name?: StringNullableFilter;
  id?: StringFilter;
};
