import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
		width: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
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
