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
			link: '/chat',
			Icon: Chat,
			text: t('Chat'),
		},
		{
			link: '/contact',
			Icon: Person,
			text: t('Contact'),
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
