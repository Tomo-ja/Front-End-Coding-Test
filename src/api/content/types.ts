import { Article } from "types/Article";

export type ArticleGetAllResponse = Pick<Article, "id" | "title">[];

export type ArticleDeleteByIdResponse = { message: string };

export type ArticlePostProps = Pick<Article, "title" | "body">;

export type ArticleUpdateByIdProps = Pick<Article, "id" | "title" | "body">;
