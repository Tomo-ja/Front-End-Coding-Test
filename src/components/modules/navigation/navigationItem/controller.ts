import { useNavigate } from "react-router-dom";
import { useContentDetailStore } from "stateManagement/store";

const useNavigationItem = (id: number) => {
  // FIXME: this is not working
  const paramsId = useContentDetailStore((state) => state.id);

  const navigate = useNavigate();

  const handleNavItemClick = () => {
    navigate(`/article/${id}`);
  };

  return {
    isContentShown: paramsId ? paramsId === id : false,
    handleClick: handleNavItemClick,
  };
};

export default useNavigationItem;
