import React from 'react'
import { ButtonWithOnlyIconProps } from './ButtonWithOnlyIcon.types'
import { ButtonWithOnlyIconStyled } from './ButtonWithOnlyIcon.styled'
import DeleteIcon from 'asset/icons/delete.svg'

export const DeleteButton = ({ onClick }: ButtonWithOnlyIconProps) => {

	const handleDeleteButtonClick = (event: React.MouseEvent) => {
		event.stopPropagation()
		onClick()
	}

	return (
		<ButtonWithOnlyIconStyled onClick={handleDeleteButtonClick}>
			<img src={DeleteIcon} alt="delete" />
		</ButtonWithOnlyIconStyled>
	)
}
