import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
		width: 100%;
		height: 100vh;
  	margin: 0;
  	padding: 0;
  	overflow-x: hidden;
  	font-family: 'Quicksand', sans-serif;

  }

  a {
    text-decoration: none;
    color: inherit;
  }

	h1, h2, h3, a, span {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
	}

	p {
  font-family: 'Nunito', sans-serif;
  font-weight: 400;
	}
`
