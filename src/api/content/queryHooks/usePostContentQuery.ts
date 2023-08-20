import { useQuery } from "@tanstack/react-query";
import { ArticlePostProps } from "api/content/types";
import { postContent } from "api/content/queryFunctions/postContent";
import { queryKeys } from "../queryKeys";

export const usePostContentQuery = (newPost: ArticlePostProps) => {
  return useQuery(queryKeys.post, () => postContent(newPost));
};
