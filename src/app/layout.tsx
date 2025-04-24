'use client'
import { ThemeProvider } from 'styled-components'
import { LanguageProvider } from '../context/LanguageContext';
import StyledComponentsRegistry from '../lib/registry'
import Header from './components/header'

import { GlobalStyles } from '../styles/globalStyles'
import { darkTheme, lightTheme } from '../styles/theme'



function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang='en'>
			<head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&family=Quicksand:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
				<LanguageProvider>
        	<StyledComponentsRegistry>
        	  <ThemeProvider theme={lightTheme}>
        	    <GlobalStyles />
        	    <Header />
        	    <main>{children}</main>
        	    <footer>
        	    </footer>
        	  </ThemeProvider>
        	</StyledComponentsRegistry>
				</LanguageProvider>
      </body>
    </html>
  )
}

export default RootLayout;