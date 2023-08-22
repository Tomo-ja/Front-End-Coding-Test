import React from 'react'
import { useContentDetailStore } from 'stateManagement/store'
import { OneLineInputStyled } from './OneLineInput.styled'
import { MultipleLineInput } from './MultipleLineInput.styled'
import { InputProps } from './types'


export const Input = ({ useFor }: InputProps) => {
	const isEditing = useContentDetailStore((state) => state.getTargetEditingState(useFor));
	const title = useContentDetailStore((state) => state.title);
	const body = useContentDetailStore((state) => state.body);
	const onChangeContentDetail = useContentDetailStore(
		(state) => state.onChangeContentDetail
	)


	if (useFor === 'title') {
		return (
			<OneLineInputStyled
				placeholder='タイトル'
				disabled={!isEditing}
				value={title}
				onChange={(e) => {
					onChangeContentDetail('title', e.target.value)
				}}
			/>
		)
	}
	return (
		<MultipleLineInput
			placeholder='本文'
			disabled={!isEditing}
			value={body}
			onChange={(e) => {
				onChangeContentDetail('body', e.target.value)
			}}
		/>
	)
}

export default Input