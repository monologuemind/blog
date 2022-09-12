<script lang="ts">
	import page_state from '$stores/page.state';
	import { page } from '$app/stores';

	export let text: string = '';

	let final_display_text = '';
	let final_function = () => {};
	let w = window;

	$: [intial_display_text, function_argument] =
		text && text?.trim() ? text?.trim()?.split(' ') : [];

	$: {
		if (intial_display_text?.includes('%variable')) {
			const groups = intial_display_text.match(/"((?:\\.|[^"\\])*)"/g);
			if (groups) {
				const key = groups?.[0]?.replaceAll('"', '');
				final_display_text = $page_state?.[$page.url.pathname]?.[key]
					? $page_state?.[$page.url.pathname]?.[key]?.value
					: key;
			}
		}
		if (intial_display_text?.includes('%window')) {
			const groups = intial_display_text.match(/"((?:\\.|[^"\\])*)"/g);
			if (groups) {
				const key = <keyof Window>groups?.[0]?.replaceAll('"', '');
				final_display_text = w?.[key] ? w?.[key] : key;
			}
		}

		if (function_argument?.includes('%function')) {
			const groups = function_argument.match(/"((?:\\.|[^"\\])*)"/g);
			if (groups) {
				const key = groups?.[0]?.replaceAll('"', '');
				final_function =
					$page_state?.[$page.url.pathname]?.[key] &&
					$page_state?.[$page.url.pathname]?.[key]?.type === 'function'
						? $page_state?.[$page.url.pathname]?.[key]?.value
						: final_function;
			}
		}
		if (function_argument?.includes('%window')) {
			const groups = function_argument.match(/"((?:\\.|[^"\\])*)"/g);
			if (groups) {
				const key = <keyof Window>groups?.[0]?.replaceAll('"', '');
				final_function = w?.[key] && typeof w?.[key] === 'function' ? w?.[key] : final_function;
			}
		}
	}
</script>

<button class="btn btn-secondary" on:click={final_function}>{final_display_text}</button>
