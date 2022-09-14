import { type Load, error } from '@sveltejs/kit';
import global_data from '$stores/data';
import { base } from '$app/paths';

export const prerender = true;

export const load: Load = async ({ fetch, url }) => {

	base
	let available_files;
	try {
		const available_files_response = await fetch(`${base}/data.json`);

		available_files = await available_files_response.json();
	} catch (e) {
		throw error(500, `${e}`);
	}

	global_data.set(available_files);
};
