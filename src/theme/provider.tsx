import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { colors, typography } from './consts';

export interface ThemeProviderProps {
	children: React.ReactElement;
}

export function ThemeProvider({ children }: ThemeProviderProps): React.ReactElement {
	return (
		<StyledThemeProvider theme={{ colors, typography }}>
			{children}
		</StyledThemeProvider>
	);
}
