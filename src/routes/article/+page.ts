import { base } from '$app/paths';
import { type Load, redirect } from '@sveltejs/kit';

export const ssr = false;

export const load: Load = async () => {
	throw redirect(308, `${base}/article-list`);
};
