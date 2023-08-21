import React from 'react'
import { useParams } from "react-router-dom";
import Content from 'components/modules/content';

export const ContentWrapper = () => {
	const { id } = useParams();

	if (!id || isNaN(parseInt(id))) {
		return (
			<div>No data found</div>
		);
	}

	return (
		<Content id={parseInt(id)} />
	)
}

export default ContentWrapper