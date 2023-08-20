import React from 'react'
import styled from "styled-components";

const AppFooterStyled = styled.footer`
	width: 100%;
	height: 60px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: 22px;
	padding-bottom: 21px;
	padding-inline: 40px;
	font-size: ${(props) => props.theme.font.size.caption};

`

export const AppFooter = () => {
	return (
		<AppFooterStyled>
			<p>Copyright &copy; 2021 Sample</p>
			<p>運営会社</p>
		</AppFooterStyled>
	)
}

export default AppFooter