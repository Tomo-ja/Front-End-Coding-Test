import React from 'react'
import { ButtonWithOnlyIconStyled } from './ButtonWithOnlyIcon.styled'
import DeleteIcon from 'asset/icons/delete.svg'

export const DeleteButton = () => {
	return (
		<ButtonWithOnlyIconStyled>
			<img src={DeleteIcon} alt="delete" />
		</ButtonWithOnlyIconStyled>
	)
}
