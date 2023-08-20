import { axiosClient } from "lib/axios-client";
import { ArticleGetAllResponse } from "api/content/types";

export const fetchAllContents = async () => {
  const { data } = await axiosClient.get<ArticleGetAllResponse>("/content");
  return data;
};
