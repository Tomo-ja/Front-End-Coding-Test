import { useNavigate } from "react-router-dom";
import { NavigationFooterProps } from "./types";

const useNavigationFooter = ({
  toggleEditingNav,
}: Pick<NavigationFooterProps, "toggleEditingNav">) => {
  const navigate = useNavigate();

  const handleAddButtonClicked = () => {
    toggleEditingNav(false);
    navigate("/");
  };

  return {
    handleAddButtonClicked,
  };
};

export default useNavigationFooter;
