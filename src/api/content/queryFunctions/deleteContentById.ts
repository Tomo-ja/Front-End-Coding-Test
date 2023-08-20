import { axiosClient } from "lib/axios-client";
import { ArticleDeleteByIdResponse } from "api/content/types";

export const deleteContentById = async (id: number) => {
  const { data } = await axiosClient.delete<ArticleDeleteByIdResponse>(
    `/content/${id}`
  );
  return data;
};
