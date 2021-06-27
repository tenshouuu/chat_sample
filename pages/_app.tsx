import React from 'react';
import { ThemeProvider } from 'theme';
import styled from 'styled-components';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import { Layout } from 'components';
import type { AppProps } from 'next/app';

import 'styles/globals.css';

export const AppRoot = styled.div`
	min-height: 100vh;
`;

function App({ Component, pageProps }: AppProps): React.ReactElement {
	return (
		<>
			<Head>
				<title>Chat Sample</title>
				<meta name="description" content="Application for chatting" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ThemeProvider>
				<AppRoot>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</AppRoot>
			</ThemeProvider>
		</>
	);
}

export default appWithTranslation(App);
