export const queryKeys = {
  getAll: ["getAllContents"],
  detail: (id: number) => [...queryKeys.getAll, id],
  delete: (id: number) => [...queryKeys.getAll, id],
  update: (id: number) => [...queryKeys.getAll, id],
  post: ["postContent"],
};
