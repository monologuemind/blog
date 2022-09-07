<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import { marked } from 'marked';
	import { what } from '$common/marked.extended';

	type CustomMarkedSetup = [MarkedExtension[], Record<string, any>];

	const [extensions, renderers] = Object.keys(what).reduce(
		(acc: CustomMarkedSetup, key) => {
			const { tokenizer, renderer } = what[key];

			acc[0].push(tokenizer);
			acc[1] = {
				...acc[1],
				[key]: renderer
			};

			return acc;
		},
		[[], {}]
	);

	export let source: string;

	marked.use({
		extensions
	});
	const options = marked.defaults;
</script>

{#key source}
	<SvelteMarkdown {source} {renderers} {options} />
{/key}
