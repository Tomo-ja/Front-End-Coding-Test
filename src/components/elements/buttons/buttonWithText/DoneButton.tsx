import React from 'react'
import { ButtonWithTextComponentProps } from './ButtonWithText.type'
import { ButtonWithTextStyled } from './ButtonWithText.styled'
import DoneIcon from 'asset/icons/done.svg'

const DoneButton = ({ size, type, handleOnClick }: ButtonWithTextComponentProps) => {
	return (
		<ButtonWithTextStyled $size={size} $type={type} onClick={handleOnClick} >
			<img src={DoneIcon} alt="done" />
			Done
		</ButtonWithTextStyled>
	)
}

export default DoneButton