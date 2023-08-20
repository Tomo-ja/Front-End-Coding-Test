import { useQuery } from "@tanstack/react-query";
import { fetchContentById } from "api/content/queryFunctions/fetchContentById";
import { queryKeys } from "../queryKeys";

export const useGetContentByIdQuery = (id: number) => {
  return useQuery(queryKeys.detail(id), () => fetchContentById(id));
};
