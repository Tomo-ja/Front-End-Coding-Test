import { useContentDetailStore } from "stateManagement/store";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "api/content/queryKeys";
import { postContent } from "api/content/queryFunctions/postContent";
import { updateContentById } from "api/content/queryFunctions/updateContentById";
import { EditorButtonGroupProps } from "./types";
import { useNavigate } from "react-router-dom";

const useEditorButtonGroup = ({ editTarget }: EditorButtonGroupProps) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const isEditing = useContentDetailStore((state) =>
    state.getTargetEditingState(editTarget)
  );

  const isTitleEditing = useContentDetailStore((state) => state.isTitleEditing);
  const isBodyEditing = useContentDetailStore((state) => state.isBodyEditing);

  const startToEdit = useContentDetailStore((state) => state.startToEdit);

  const onCancelContentEdit = useContentDetailStore(
    (state) => state.onCancelContentEdit
  );

  const getNewContent = useContentDetailStore((state) => state.getNewContent);

  const handleEditButtonClicked = () => {
    startToEdit(editTarget);
  };

  const handleCancelButtonClicked = () => {
    onCancelContentEdit(editTarget);
  };

  const handleSaveButtonClicked = async () => {
    const newContent = getNewContent();
    if (newContent.id === -1) {
      const response = await postContent(newContent);
      navigate(`/article/${response.id}`);
      queryClient.invalidateQueries(queryKeys.getAll);
    } else {
      await updateContentById(newContent);
      queryClient.invalidateQueries(queryKeys.detail(newContent.id));
    }
  };

  return {
    isEditing,
    makeEditButtonDisabled: isTitleEditing || isBodyEditing,
    handleEditButtonClicked,
    handleCancelButtonClicked,
    handleSaveButtonClicked,
  };
};

export default useEditorButtonGroup;
