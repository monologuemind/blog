<script lang="ts">
	import Markdown from '$components/Markdown.svelte';
	import CodeMirror from 'svelte-codemirror-editor';

	export let source: string = '';
	export let editable: boolean = false;
</script>

<div
	style:justify-content="center"
	style:width="100%"
	style:height="100%"
	class="flex w-full lg:flex-row"
>
	<div style:width="100%" class="card card-compact w-96 bg-base-100 shadow-xl">
		<div class="card-body">
			<h2 style:display="block" class="card-title">Editor</h2>
			<CodeMirror bind:value={source} />
			{#if editable}
				<div class="card-actions justify-end">
					<button class="btn btn-primary">Save</button>
				</div>
			{/if}
		</div>
	</div>
	<div class="divider divider-horizontal" />
	<div style:width="100%" class="card card-compact w-96 bg-base-100 shadow-xl">
		<div class="card-body">
			<h2 style:display="block" class="card-title">Viewer</h2>
			<Markdown {source} />
		</div>
	</div>
</div>
