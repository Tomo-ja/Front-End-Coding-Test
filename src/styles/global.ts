import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	html {
		font-size: 100%;
	}

	body {
		margin: 0;
		padding: 0;
		overflow-x: hidden;
		min-height: 100vh;
		text-rendering: optimizeSpeed;
		font-family: 'Noto Sans JP', sans-serif;
		font-size: ${({ theme }) => theme.font.size.body};
		font-weight: ${({ theme }) => theme.font.weight.normal};
		color: ${({ theme }) => theme.palette.text.regular};
		background-color: ${({ theme }) => theme.palette.background.white};
		line-height: 1;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	ul,
	figure,
	blockquote,
	dl,
	dd {
		padding: 0;
		margin: 0;
	}

	button {
		border: none;
		background-color: transparent;
		font-family: inherit;
		padding: 0;
		cursor: pointer;
	}

	ul[role="list"],
	ol[role="list"] {
		list-style: none;
	}

	li {
		list-style-type: none;
	}

	html:focus-within {
		scroll-behavior: smooth;
	}

	a:not([class]) {
		text-decoration-skip-ink: auto;
	}

	img,
	picture {
		max-width: 100%;
		display: block;
	}

	input,
	button,
	textarea,
	select {
		font: inherit;
	}
`;
