import { useEffect } from "react";
import { useContentDetailStore } from "stateManagement/store";
import { useGetContentByIdQuery } from "api/content/queryHooks/useGetContentByIdQuery";

const useContentDetail = (id: number) => {
  const { data } = useGetContentByIdQuery(id);
  const setContentDetail = useContentDetailStore(
    (state) => state.setContentDetail
  );

  useEffect(() => {
    if (data) {
      setContentDetail(data);
    }
  }, [data, setContentDetail]);

  return {
    content: data,
  };
};

export default useContentDetail;
