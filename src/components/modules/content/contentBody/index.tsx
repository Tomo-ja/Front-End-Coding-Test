import React from 'react'
import EditorButtonGroup from 'components/modules/editorButtonGroup'
import Input from 'components/elements/inputs'
import { ContentBodyStyled } from './styled'

export const ContentBody = () => {
	return (
		<ContentBodyStyled>
			<Input useFor='body' />
			<EditorButtonGroup editTarget='body' />
		</ContentBodyStyled>
	)
}

export default ContentBody