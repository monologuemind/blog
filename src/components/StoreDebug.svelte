<script lang="ts">
	import { Toy } from '@leveluptuts/svelte-toy';
	import page_state from '$stores/page.state';
	import global_data from '$stores/data';
	import compatability from '$stores/compatability';
	import { page, navigating } from '$app/stores';
</script>

{#if import.meta.env.DEV}
	<Toy register={{ page, page_state, navigating, compatability, global_data }} nub="🔧" />
{/if}
