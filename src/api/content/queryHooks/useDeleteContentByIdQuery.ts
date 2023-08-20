import { useQuery } from "@tanstack/react-query";
import { deleteContentById } from "api/content/queryFunctions/deleteContentById";
import { queryKeys } from "../queryKeys";

export const useDeleteContentByIdQuery = (id: number) => {
  return useQuery(queryKeys.delete(id), () => deleteContentById(id));
};
