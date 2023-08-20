import React from 'react'
import styled from "styled-components";
import Logo from 'asset/icons/logo.svg'

const AppNameStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: left;
	height: 32px;
	
	img {
		margin-right: 4px;
	}
`

export const AppName = () => {
	return (
		<AppNameStyled>
			<img src={Logo} alt="logo" />
			<h1>Service Name</h1>
		</AppNameStyled>
	)
}

export default AppName