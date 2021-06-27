export type Color =
	| 'primary'
	| 'red'
	| 'dark'
	| 'gray'
	| 'semiLight'
	| 'lightGray'
	| 'light'
	| 'white'
	| 'blue';

export type Palette = Record<Color, string>;

export interface FontStyle {
	family: string;
	size: string;
	lineHeight: string;
}

export interface Typography {
	header1: FontStyle;
	paragraph1: FontStyle;
	paragraph2: FontStyle;
	paragraph3: FontStyle;
}

export interface Theme {
	colors: Palette;
	typography: Typography;
}

export const colors: Palette = {
	primary: '#2A8BF2',
	red: '#FF3366',
	blue: '#0D1C2E',
	dark: '#0D1C2E',
	gray: '#707C97',
	lightGray: '#E6ECFE',
	semiLight: '#F3F3FB',
	light: '#FAFBFF',
	white: '#FFFFFF',
};

const primaryFamily = 'TTNorms'

export const typography: Typography = {
	header1: {
		family: primaryFamily,
		size: '2.25rem',
		lineHeight: '1.625rem',
	},
	paragraph1: {
		family: primaryFamily,
		size: '1.25rem',
		lineHeight: '1.625rem',
	},
	paragraph2: {
		family: primaryFamily,
		size: '1.125rem',
		lineHeight: '1.625rem',
	},
	paragraph3: {
		family: primaryFamily,
		size: '1rem',
		lineHeight: '1.625rem',
	}
}
