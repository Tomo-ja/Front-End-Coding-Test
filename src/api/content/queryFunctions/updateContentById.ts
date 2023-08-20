import { axiosClient } from "lib/axios-client";
import { ArticleUpdateByIdProps } from "api/content/types";
import { Article } from "types/Article";

export const updateContentById = async ({
  id,
  title,
  body,
}: ArticleUpdateByIdProps) => {
  const { data } = await axiosClient.put<Article>(`/content/${id}`, {
    title: title,
    body: body,
  });
  return data;
};
