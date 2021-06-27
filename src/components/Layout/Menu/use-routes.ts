import { useTranslation } from 'next-i18next';
import React, { useMemo } from 'react';
import { Bell, Calendar, Chat, Grid, Person } from 'components';

export interface RouteItem {
	link: string;
	text: string;
	Icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;
}

export function useRoutes(): RouteItem[] {
	const { t } = useTranslation();

	return useMemo(() => ([
		{
			link: '/home',
			Icon: Grid,
			text: t('Home'),
		},
		{
			link: '/chats',
			Icon: Chat,
			text: t('Chats'),
		},
		{
			link: '/contacts',
			Icon: Person,
			text: t('Contacts'),
		},
		{
			link: '/notifications',
			Icon: Bell,
			text: t('Notifications'),
		},
		{
			link: '/calendar',
			Icon: Calendar,
			text: t('Calendar'),
		},
	]), [t])
}
