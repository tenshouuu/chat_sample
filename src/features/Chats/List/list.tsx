import React from 'react';
import styled from 'styled-components';
import { Button, Plus } from 'components';
import { getColor, getTypographyStyle } from 'theme';
import { useTranslation } from 'next-i18next';

export const ListRoot = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 24px;
	width: 100%;
	max-width: 582px;
`;

export const Info = styled.div``;

export const Title = styled.h1`
	color: ${getColor('dark')};
  ${getTypographyStyle('header1')};
  letter-spacing: 0.01em;
  text-transform: capitalize;
`;

export const ButtonText = styled.div`
	margin-left: 6px;
`;

export function List(): React.ReactElement {
	const { t } = useTranslation()
	return (
		<ListRoot>
			<Info>
				<Title>{t('Chats')}</Title>
			</Info>
			<Button>
				<Plus />
				<ButtonText>{t('Create new Chat')}</ButtonText>
			</Button>
		</ListRoot>
	)
};

