<script lang="ts">
	import { base } from '$app/paths';
	import { custom_marked_config } from '$common/marked.extended';
	import Markdown from '$components/Markdown.svelte';

	const selectors = Object.keys(custom_marked_config).map((key) => `%${key}`);
</script>

<h1>Custom Selectors</h1>
{#each selectors as selector}
	<div style:display="inline-block" class="card w-96 bg-base-100 shadow-xl">
		<div style:text-align="center" style:display="inherit" class="card-body">
			<h2 style:margin-bottom="1rem" class="card-title">Selector: {selector}</h2>
			<p>Sample Markdown: {custom_marked_config[selector.replace('%', '')]?.sample_text}</p>
			<Markdown source={custom_marked_config[selector.replace('%', '')]?.sample_text} />
			<a
				class="link link-hover link-secondary"
				href={`${base}/playground?sample_text=${custom_marked_config[
					selector.replace('%', '')
				]?.sample_text.replace('%', '%25')}`}>Try in playground</a
			>
		</div>
	</div>
{/each}
