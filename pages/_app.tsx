import React from 'react';
import styled from 'styled-components';
import '../styles/globals.css'
import type { AppProps } from 'next/app'

export const AppRoot = styled.div`
  background-color: lightblue
`;

function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
  return <AppRoot>
    <Component {...pageProps} />
  </AppRoot>
}

export default MyApp
