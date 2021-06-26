import React from 'react';
import { ThemeProvider } from 'theme';
import styled from 'styled-components';
import Head from 'next/head';

import 'styles/globals.css';

import type { AppProps } from 'next/app';

export const AppRoot = styled.div`
	min-height: 100vh;
`;

function App({ Component, pageProps }: AppProps): React.ReactNode {
	return (
		<>
			<Head>
				<title>Chat Sample</title>
				<meta name="description" content="Application for chatting" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ThemeProvider>
				<AppRoot>
					<Component {...pageProps} />
				</AppRoot>
			</ThemeProvider>
		</>
	);
}

export default App;
