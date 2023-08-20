import React from 'react'
import { ButtonWithTextComponentProps } from './ButtonWithText.type'
import { ButtonWithTextStyled } from './ButtonWithText.styled'
import EditIcon from 'asset/icons/edit.svg'

const EditButton = ({ size, type, handleOnClick }: ButtonWithTextComponentProps) => {
  return (
    <ButtonWithTextStyled $size={size} $type={type} onClick={handleOnClick}>
      <img src={EditIcon} alt="edit" />
      Edit
    </ButtonWithTextStyled>
  )
}

export default EditButton