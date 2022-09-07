<script lang="ts">
	import Markdown from '$components/Markdown.svelte';
	import CodeMirror from 'svelte-codemirror-editor';

	let source = '';
</script>

<button on:click={() => (source = '')}>Reset</button>

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
