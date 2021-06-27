import React from 'react';
import styled from 'styled-components';
import { Menu } from './Menu';

interface Props {
	children: React.ReactElement;
}

export const LayoutRoot = styled.div`
	display: flex;
	height: 100%;
	min-height: 100vh;
`;

export const Content = styled.div`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.semiLight};
	padding: 110px 60px;
`;

export function Layout({ children }: Props): React.ReactElement {
	return (
		<LayoutRoot>
			<Menu />
			<Content>
				{children}
			</Content>
		</LayoutRoot>
	)
};

