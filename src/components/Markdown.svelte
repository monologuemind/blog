<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import { marked } from 'marked';
	import { custom_marked_config } from '$common/marked.extended';
	import hljf from 'highlight.js';

	type CustomMarkedSetup = [MarkedExtension[], Record<string, any>];

	const [extensions, renderers] = Object.keys(custom_marked_config).reduce(
		(acc: CustomMarkedSetup, key) => {
			const { tokenizer, renderer } = custom_marked_config[key];

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
	const opts = marked.setOptions({
		...options,
		highlight: function (code) {
			const x = hljf.highlightAuto(code).value;

			console.log('data: ', code, x);
			return x;
		}
	});
</script>

{#key source}
	<SvelteMarkdown {source} {renderers} options={opts} />
{/key}
