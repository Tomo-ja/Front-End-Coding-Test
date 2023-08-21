import React from 'react'
import useContent from './controller'
import { ContentProps } from './types';
import { ContentStyled } from './styled';
import ContentTitle from './contentTitle';
import ContentBody from './contentBody';

export const Content = ({ id }: ContentProps ) => {
	const { content } = useContent(id)

	if (!content) {
		return (
			<div>No data found</div>
		)
	}

	return (
		<ContentStyled>
			<ContentTitle />
			<ContentBody />
		</ContentStyled>
	)
}

export default Content