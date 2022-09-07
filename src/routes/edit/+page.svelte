<script lang="ts">
	import Markdown from '$components/Markdown.svelte';
	import CodeMirror from 'svelte-codemirror-editor';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import global_data from '$stores/data';

	export let data: {
		fetch?: Fetch;
		file_data?: string;
	};

	let value: any = $global_data?.articles?.find(
		(file) => file.path === $page.url.searchParams.get('file_path')
	)?.name;

	const change_file = () => {
		const path = $global_data?.articles?.find((file) => file.name === value)?.path;
		if (path) {
			goto(`/edit?file_path=${path}`);
		}
	};
</script>

<select
	disabled={!$global_data?.articles?.length}
	bind:value
	on:change={change_file}
	class="select w-full max-w-xs"
>
	{#if !data?.file_data}
		<option disabled selected>Select a file to edit</option>
	{/if}
	{#if $global_data?.articles?.length}
		{#each $global_data?.articles as file}
			<option>{file.name}</option>
		{/each}
	{/if}
</select>

<div
	style:justify-content="center"
	style:width="100%"
	style:height="100%"
	class="flex w-full lg:flex-row"
>
	<div style:width="100%" class="card card-compact w-96 bg-base-100 shadow-xl">
		<div class="card-body">
			<h2 style:display="block" class="card-title">Editor</h2>
			<CodeMirror bind:value={data.file_data} />
			<!-- <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div> -->
		</div>
	</div>
	<div class="divider divider-horizontal" />
	<div style:width="100%" class="card card-compact w-96 bg-base-100 shadow-xl">
		<div class="card-body">
			<h2 style:display="block" class="card-title">Viewer</h2>
			<Markdown source={data?.file_data || ''} />
		</div>
	</div>
</div>
