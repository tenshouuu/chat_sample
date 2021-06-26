import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { colors } from './consts';

export interface ThemeProviderProps {
	children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps): React.ReactNode {
	return (
		<StyledThemeProvider theme={{ colors }}>
			{children}
		</StyledThemeProvider>
	);
}
