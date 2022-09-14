<script lang="ts">
	import Edit from '$components/Edit.svelte';
	import { page } from '$app/stores';
	import page_state from '$stores/page.state';
	import { onMount } from 'svelte';

	let source = $page.url.searchParams.get('sample_text') || '';

	onMount(() => {
		window.page_state = page_state;
	});
</script>

<button on:click={() => (source = '')}>Reset</button>

<Edit {source} />
