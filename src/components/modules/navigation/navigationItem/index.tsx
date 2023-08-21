import React from 'react'
import { NavigationItemStyled } from './styled'
import { NavigationItemProps } from './types'
import { DeleteButton } from 'components/elements/buttons/buttonWithOnlyIcon/DeleteButton'
import useNavigationItem from './controller'

export const NavigationItem = ({ title, id, isEditingNav, handleDeleteContent }: NavigationItemProps) => {
	const { isContentShown, handleClick } = useNavigationItem(id)
	return (
		<NavigationItemStyled $isContentShown = {isContentShown} onClick={() => handleClick()}>
			{title}
			{isEditingNav && <DeleteButton onClick={() => handleDeleteContent(id)}/>}
		</NavigationItemStyled>
	)
}

export default NavigationItem