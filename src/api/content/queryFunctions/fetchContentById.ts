import { axiosClient } from "lib/axios-client";
import { Article } from "types/Article";

export const fetchContentById = async (id: number) => {
  const { data } = await axiosClient.get<Article>(`/content/${id}`);
  return data;
};
