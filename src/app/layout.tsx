// app/layout.tsx
'use client';

import { ThemeProvider } from 'styled-components';
import { LanguageProvider } from './lib/context/LanguageContext';
import StyledComponentsRegistry from './lib/registry';
import Header from './components/header';
import { GlobalStyles } from '../styles/globalStyles';
import { lightTheme } from '../styles/theme';
import Head from 'next/head';
import Footer from './components/footer';


export default function RootLayout({ children }: { children: React.ReactNode }) {

	return (
		<html lang='en  '>
			<Head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Amanda Hoffmann - DEV</title>
				<meta name="description" content="Amanda Hoffmann - Developer" />
				<link rel="icon" href="/utils/ahp-high-resolution-logo.png" />
				<link
					href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&family=Quicksand:wght@500;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<LanguageProvider>
					<StyledComponentsRegistry>
						<ThemeProvider theme={lightTheme}>
							<GlobalStyles />
							<Header />
							<main>{children}</main>
							<Footer></Footer>
						</ThemeProvider>
					</StyledComponentsRegistry>
				</LanguageProvider>
			</body>
		</html>
	);
}
