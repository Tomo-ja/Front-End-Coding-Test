import { useQuery } from "@tanstack/react-query";
import { fetchAllContents } from "api/content/queryFunctions/fetchAllContents";
import { queryKeys } from "../queryKeys";

export const useGetAllContentsQuery = () => {
  return useQuery(queryKeys.getAll, fetchAllContents);
};
