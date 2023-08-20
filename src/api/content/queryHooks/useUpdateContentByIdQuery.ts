import { useQuery } from "@tanstack/react-query";
import { updateContentById } from "api/content/queryFunctions/updateContentById";
import { ArticleUpdateByIdProps } from "api/content/types";
import { queryKeys } from "../queryKeys";

export const useUpdateContentByIdQuery = (
  updatedPost: ArticleUpdateByIdProps
) => {
  return useQuery(queryKeys.update(updatedPost.id), () =>
    updateContentById(updatedPost)
  );
};
