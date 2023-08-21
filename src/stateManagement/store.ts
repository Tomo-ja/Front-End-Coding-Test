import { create } from "zustand";
import { ContentDetailStore, ContentEditTarget } from "./types";
import { Article } from "types/Article";

export const useContentDetailStore = create<ContentDetailStore>((set, get) => ({
  id: undefined,
  title: "",
  body: "",
  originalContent: undefined,
  isTitleEditing: false,
  isBodyEditing: false,

  setContentDetail: (content: Article) => {
    set({
      id: content.id,
      title: content.title,
      body: content.body,
      isTitleEditing: false,
      isBodyEditing: false,
    });
  },

  getTargetEditingState: (target: ContentEditTarget) => {
    switch (target) {
      case "title":
        return get().isTitleEditing;
      case "body":
        return get().isBodyEditing;
    }
  },

  getNewContent: () => ({
    id: get().id || -1,
    title: get().title,
    body: get().body,
  }),

  onCancelContentEdit: (target) => {
    set((state) => {
      switch (target) {
        case "title":
          return {
            isTitleEditing: false,
            title: state.originalContent || "",
          };
        case "body":
          return {
            isBodyEditing: false,
            body: state.originalContent || "",
          };
      }
    });
  },

  onChangeContentDetail: (target: ContentEditTarget, value: string) => {
    set({
      [target]: value,
    });
  },

  startToEdit: (target: ContentEditTarget) => {
    set((state) => {
      switch (target) {
        case "title":
          return {
            isTitleEditing: true,
            originalContent: state.title,
          };
        case "body":
          return {
            isBodyEditing: true,
            originalContent: state.body,
          };
      }
    });
  },
}));
