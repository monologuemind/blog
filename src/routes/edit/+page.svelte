<script lang="ts">
	import Edit from '$components/Edit.svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import global_data from '$stores/data';
	import { base } from '$app/paths';

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
			goto(`${base}/edit?file_path=${path}`);
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

<Edit source={data?.file_data || ''} editable />
