import { Article } from "types/Article";

export type ContentEditTarget = "title" | "body";

export type ContentDetailStore = {
  id?: number;
  title: string;
  body: string;
  originalContent?: string;
  isTitleEditing: boolean;
  isBodyEditing: boolean;

  startToEdit: (target: ContentEditTarget) => void;
  setContentDetail: (content: Article) => void;
  onChangeContentDetail: (target: ContentEditTarget, value: string) => void;
  onCancelContentEdit: (target: ContentEditTarget) => void;
  getTargetEditingState: (target: ContentEditTarget) => boolean;
  getNewContent: () => Pick<Article, "id" | "title" | "body">;
};
