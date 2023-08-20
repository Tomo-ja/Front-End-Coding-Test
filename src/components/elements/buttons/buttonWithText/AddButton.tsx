import React from 'react'
import { ButtonWithTextComponentProps } from './ButtonWithText.type'
import { ButtonWithTextStyled } from './ButtonWithText.styled'
import AddIcon from 'asset/icons/+.svg'


export const AddButton = ({ size, type, handleOnClick }: ButtonWithTextComponentProps) => {
	return (
		<ButtonWithTextStyled $size={size} $type={type} onClick={handleOnClick}>
			<img src={AddIcon} alt="add" />
			New page
		</ButtonWithTextStyled>
	)
}

export default AddButton