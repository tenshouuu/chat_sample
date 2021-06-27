import React from 'react';
import { ChatsPage } from 'features';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps } from 'next';

export default function Chats(): React.ReactElement {
	return <ChatsPage />;
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(locale ? await serverSideTranslations(locale) : {}),
		// Will be passed to the page component as props
	},
});
