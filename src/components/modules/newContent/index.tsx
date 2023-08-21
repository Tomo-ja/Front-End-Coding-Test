import React from 'react'
import { ContentStyled } from 'components/modules/content/styled';
import ContentTitle from 'components/modules/content/contentTitle';
import ContentBody from 'components/modules/content/contentBody';
import useNewContent from './controller';


const NewContent = () => {
	useNewContent()
	
	return (
		<ContentStyled>
			<ContentTitle />
			<ContentBody />
		</ContentStyled>
		)
}

export default NewContent