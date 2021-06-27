import { rgba } from 'polished';
import type { Typography, Color, Theme } from 'theme/consts';
import type { ThemedStyledProps } from 'styled-components';

export function getColor(
	colorName: Color,
	opacity = 1,
): (props: ThemedStyledProps<unknown, Theme>) => string {
	return (props) => {
		const { theme } = props;
		return colorName ? rgba(theme.colors[colorName], opacity) : rgba(theme.colors.white, opacity);
	};
}

export function getTypographyStyle(
	typographyName: keyof Typography,
): (props: ThemedStyledProps<unknown, Theme>) => string {
	return (props) => {
		const typography = props?.theme?.typography?.[typographyName];

		if (!typography) {
			return '';
		}

		const { family, size, lineHeight } = typography;
		return `
      font-family: ${family};
      font-size: ${size};
      line-height: ${lineHeight};
    `;
	};
}
