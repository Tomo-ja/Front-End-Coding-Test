import React from 'react'
import Input from 'components/elements/inputs'
import EditorButtonGroup from 'components/modules/editorButtonGroup'
import { ContentTitleStyled } from './styled'


export const ContentTitle = () => {
	return (
		<ContentTitleStyled>
			<Input useFor='title'/>
			<EditorButtonGroup editTarget='title' />
		</ContentTitleStyled>
	)
}

export default ContentTitle