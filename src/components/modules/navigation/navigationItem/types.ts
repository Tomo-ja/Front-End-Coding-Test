import { Article } from "types/Article";

export type NavigationItemProps = Pick<Article, "id" | "title"> & {
  handleDeleteContent: (id: number) => void;
  isEditingNav: boolean;
};

export type NavigationItemStyledProps = {
  $isContentShown: boolean;
};
