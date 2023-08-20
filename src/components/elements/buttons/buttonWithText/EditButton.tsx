import React from 'react'
import { ButtonWithTextComponentProps } from './ButtonWithText.type'
import { ButtonWithTextStyled } from './ButtonWithText.styled'
import EditIcon from 'asset/icons/edit.svg'

const EditButton = ({ size, type }: ButtonWithTextComponentProps) => {
  return (
    <ButtonWithTextStyled size={size} type={type}>
      <img src={EditIcon} alt="edit" />
      Edit
    </ButtonWithTextStyled>
  )
}

export default EditButton