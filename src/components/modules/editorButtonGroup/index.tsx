import React from 'react'
import EditButton from 'components/elements/buttons/buttonWithText/EditButton'
import CancelButton from 'components/elements/buttons/buttonWithText/CancelButton'
import SaveButton from 'components/elements/buttons/buttonWithText/SaveButton'
import { EditorButtonGroupStyled } from './styled'
import { EditorButtonGroupProps } from './types'
import useEditorButtonGroup from './controller'

export const EditorButtonGroup = ({ editTarget }: EditorButtonGroupProps) => {
	const { isEditing, handleEditButtonClicked, handleCancelButtonClicked, handleSaveButtonClicked, makeEditButtonDisabled } = useEditorButtonGroup({ editTarget })

	if (!isEditing) {
		return (
			<EditorButtonGroupStyled>
				<EditButton 
					size='regular' 
					type='primary' 
					handleOnClick={() => handleEditButtonClicked()}
					makeInactive={makeEditButtonDisabled}
				/>
			</EditorButtonGroupStyled>
		)
	}

	return (
		<EditorButtonGroupStyled>
			<CancelButton size='half' type='normal' handleOnClick={() => handleCancelButtonClicked()}/>
			<SaveButton size='half' type='primary' handleOnClick={() => handleSaveButtonClicked()}/>
		</EditorButtonGroupStyled>
	)
}

export default EditorButtonGroup