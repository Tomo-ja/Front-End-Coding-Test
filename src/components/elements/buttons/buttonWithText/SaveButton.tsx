import React from 'react'
import { ButtonWithTextComponentProps } from './ButtonWithText.type'
import { ButtonWithTextStyled } from './ButtonWithText.styled'
import SaveIcon from 'asset/icons/save.svg'


const SaveButton = ({ size, type, handleOnClick }: ButtonWithTextComponentProps) => {
	return (
		<ButtonWithTextStyled $size={size} $type={type} onClick={handleOnClick}>
			<img src={SaveIcon} alt="save" />
			Save
		</ButtonWithTextStyled>
	)
}

export default SaveButton