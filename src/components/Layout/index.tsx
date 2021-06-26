import React from 'react';
import styled from 'styled-components';
import { Menu } from './menu';
import { Content } from './content';

export const LayoutRoot = styled.div`
	display: flex;
	height: 100%;
	min-height: 100vh;
`;

export function Layout(): React.ReactNode {

    return (
	    <LayoutRoot>
		    <Menu />
		    <Content />
	    </LayoutRoot>
    )
};

