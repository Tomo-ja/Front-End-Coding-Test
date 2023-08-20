import { axiosClient } from "lib/axios-client";
import { Article } from "types/Article";
import { ArticlePostProps } from "api/content/types";

export const postContent = async ({ title, body }: ArticlePostProps) => {
  const { data } = await axiosClient.post<Article>("/content", {
    title: title,
    body: body,
  });
  return data;
};
