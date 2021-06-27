import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps } from 'next';

export default function Chat(): React.ReactElement {
	return <>chat</>;
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(locale ? await serverSideTranslations(locale) : {}),
		// Will be passed to the page component as props
	},
});
