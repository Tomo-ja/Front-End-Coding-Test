import { useContentDetailStore } from "stateManagement/store";

const useNewContent = () => {
  const setContentDetail = useContentDetailStore(
    (state) => state.setContentDetail
  );

  setContentDetail({
    id: -1,
    title: "",
    body: "",
    createdAt: "",
    updatedAt: "",
  });
};

export default useNewContent;
