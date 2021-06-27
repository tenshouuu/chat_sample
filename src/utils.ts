
export function uuid(): string {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
		// eslint-disable-next-line no-bitwise,eqeqeq
		const r = Math.random() * 16 | 0; const v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
}
