const { extendDefaultPlugins } = require('svgo');

module.exports = (api) => {
	api.cache(true);

	return {
		presets: ['next/babel'],
		plugins: [
			[
				'babel-plugin-styled-components',
				{
					displayName: true,
					ssr: true,
				},
			],
			[
				'inline-react-svg',
				{
					svgo: {
						plugins: extendDefaultPlugins([
							{
								name: 'cleanupIDs',
								params: {
									prefix: {
										toString() {
											return `${Math.random().toString(36).substr(2, 9)}`;
										}
									}
								},
							},
						])
					}
				}
			]
		],
	};
};
