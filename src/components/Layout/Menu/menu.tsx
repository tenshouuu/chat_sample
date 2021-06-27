import React from 'react';
import { AnimateSharedLayout } from 'framer-motion';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { MenuItem } from './menu-item';
import { useRoutes } from './use-routes';

export const MenuRoot = styled.div`
	min-width: 290px;
	display: flex;
	align-items: center;
`;

export const RouteWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export function Menu(): React.ReactElement {
	const routes = useRoutes();
	const { pathname } = useRouter();

	return (
		<MenuRoot>
			<AnimateSharedLayout>
				<RouteWrapper>
					{routes.map(({ link, text, Icon }) => (
						<MenuItem key={link} link={link} text={text} Icon={Icon} isActive={pathname === link} />
					))}
				</RouteWrapper>
			</AnimateSharedLayout>
		</MenuRoot>
	);
}
