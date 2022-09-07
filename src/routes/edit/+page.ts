import { type Load, error } from '@sveltejs/kit';

export const ssr = false;

export const load: Load = async ({ fetch, url }) => {
	const file_path = url.searchParams.get('file_path');

	if (!file_path) {
		return { fetch };
	}

	try {
		const response = await fetch(file_path);

		const file_data = await response.text();

		return {
			fetch,
			file_data
		};
	} catch (e) {
		throw error(500, `${e}`);
	}
};
