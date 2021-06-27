import React, { AnchorHTMLAttributes } from 'react';
import styled from 'styled-components';
import { getColor, getTypographyStyle } from 'theme';

export interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	children: React.ReactNode;
}

export const ButtonRoot = styled.a`
	padding: 0 24px;
	text-align: center;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: max-content;
	transition: opacity 0.3s;
  background: linear-gradient(92.68deg, ${getColor('lightBlue')} 0%, ${getColor('primary')} 100%);
  box-shadow: 6px 6px 25px rgba(42, 139, 242, 0.15), 4px 4px 25px rgba(42, 139, 242, 0.05), 10px 6px 25px rgba(42, 139, 242, 0.15);
	border-radius: 6px;
  ${getTypographyStyle('paragraph1')};

	&,
  &:hover,
	&:active,
	&:visited {
    color: ${getColor('white')};
	}

	&:hover {
		opacity: 0.8;
	}
`;

export function Button({ children, ...props }: ButtonProps): React.ReactElement {
	return (
		<ButtonRoot href="#" {...props}>
			{children}
		</ButtonRoot>
	);
}
