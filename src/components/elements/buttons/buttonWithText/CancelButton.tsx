import React from 'react'
import { ButtonWithTextComponentProps } from './ButtonWithText.type'
import { ButtonWithTextStyled } from './ButtonWithText.styled'
import CancelIcon from 'asset/icons/cancel.svg'

export const CancelButton = ({ size, type, handleOnClick }: ButtonWithTextComponentProps) => {
	return (
		<ButtonWithTextStyled $size={size} $type={type} onClick={handleOnClick} >
			<img src={CancelIcon} alt="cancel" />
			Cancel
		</ButtonWithTextStyled>
	)
}

export default CancelButton