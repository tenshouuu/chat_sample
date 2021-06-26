import React from 'react';
import styled from 'styled-components';

export const ContentRoot = styled.div`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.semiLight};
`;

export function Content(): React.ReactNode {

    return (
      <ContentRoot />
    )
};

