import React from 'react';
import styled from 'styled-components';
import { Layout } from 'components';

export const MainRoot = styled.div``;

export default function Main(): React.ReactNode {
    return (
      <MainRoot>
	      <Layout />
      </MainRoot>
    )
};

