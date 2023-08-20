import React from 'react'
import { ButtonWithTextComponentProps } from './ButtonWithText.type'
import { ButtonWithTextStyled } from './ButtonWithText.styled'
import SaveIcon from 'asset/icons/save.svg'


const ButtonWithSave = ({ size, type }: ButtonWithTextComponentProps) => {
	return (
		<ButtonWithTextStyled size={size} type={type}>
			<img src={SaveIcon} alt="save" />
			Save
		</ButtonWithTextStyled>
	)
}

export default ButtonWithSave