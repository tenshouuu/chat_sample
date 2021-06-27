import React from 'react';
import Link from 'next/link';
import type { RouteItem } from './use-routes';
import { StyledMotion, ImageWrapper, MenuItemRoot, Text } from './menu-item.styled';

interface Props extends RouteItem {
	isActive: boolean
}

export function MenuItem({ link, Icon, text, isActive }: Props): React.ReactElement {
	return (
		<Link passHref href={link} key={link}>
			<MenuItemRoot>
				{isActive && (
					<StyledMotion
						className="nav-link-underline"
						layoutId="nav-link-underline"
						initial={false}
					/>
				)}
				<ImageWrapper>
					<Icon />
				</ImageWrapper>
				<Text>{text}</Text>
			</MenuItemRoot>
		</Link>
	);
}
