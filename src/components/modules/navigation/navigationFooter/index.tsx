import React from 'react'
import AddButton from 'components/elements/buttons/buttonWithText/AddButton'
import DoneButton from 'components/elements/buttons/buttonWithText/DoneButton'
import EditButton from 'components/elements/buttons/buttonWithText/EditButton'
import { NavigationFooterProps } from './types'
import { NavigationFooterStyled } from './styled'
import useNavigationFooter from './controller';

export const NavigationFooter = ({ isEditingNav, toggleEditingNav }: NavigationFooterProps) => {

	const { handleAddButtonClicked } = useNavigationFooter({ toggleEditingNav })

	if (!isEditingNav) {
		return (
			<NavigationFooterStyled>
				<div />
				<EditButton 
					size='regular' 
					type='primary' 
					handleOnClick={() => toggleEditingNav(true)} 
				/>
			</NavigationFooterStyled>
		)
	}
	return (
		<NavigationFooterStyled>
			{/* TODO: need to change function */}
			<AddButton 
				size='regular' 
				type='secondary' 
				handleOnClick={() => handleAddButtonClicked()} 
			/>
			<DoneButton 
				size='regular' 
				type='primary' 
				handleOnClick={() => toggleEditingNav(false)} 
			/>
		</NavigationFooterStyled>
	)
}

export default NavigationFooter