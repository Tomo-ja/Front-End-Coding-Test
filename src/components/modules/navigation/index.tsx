import React from 'react'
import AppName from 'components/elements/AppName'
import { NavigationStyled } from './styled'
import useNavigation from './controller'
import NavigationItem from './navigationItem'
import NavigationFooter from './navigationFooter'

export const Navigation = () => {
	const { navItems, isEditingNav, toggleEditingNav, handleDeleteContent } = useNavigation()

	return (
		<NavigationStyled>
			<AppName />
			{navItems.map((item) => (
				<NavigationItem 
					key={item.id} 
					id={item.id} 
					title={item.title} 
					isEditingNav={isEditingNav} 
					handleDeleteContent={handleDeleteContent}
				/>
			))}
			<NavigationFooter isEditingNav={isEditingNav} toggleEditingNav={toggleEditingNav}/>
		</NavigationStyled>
	)
}

export default Navigation