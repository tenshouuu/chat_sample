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

export type PaletteType = Record<Color, string>;

export const colors: PaletteType = {
	primary: '#2A8BF2',
	red: '#FF3366',
	blue: '#0D1C2E',
	dark: '0D1C2E',
	gray: '#707C97',
	lightGray: '#E6ECFE',
	semiLight: '#F3F3FB',
	light: '#FAFBFF',
	white: '#FFFFFF',
};
