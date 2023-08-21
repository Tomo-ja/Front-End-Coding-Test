import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "api/content/queryKeys";
import { useGetAllContentsQuery } from "api/content/queryHooks/useGetAllContentsQuery";
import { deleteContentById } from "api/content/queryFunctions/deleteContentById";

const useNavigation = () => {
  const { data } = useGetAllContentsQuery();
  const queryClient = useQueryClient();

  const [isEditingNav, setIsEditingNav] = useState(false);

  const toggleEditingNav = (newState: boolean) => {
    setIsEditingNav(newState);
  };

  const handleDeleteContent = async (id: number) => {
    try {
      await deleteContentById(id);
      queryClient.invalidateQueries(queryKeys.getAll);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    navItems: data || [],
    isEditingNav,
    toggleEditingNav,
    handleDeleteContent,
  };
};

export default useNavigation;
