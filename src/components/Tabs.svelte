<script lang="ts">
	export let tabs: { name: string; active: boolean }[];

	$: active_tab = tabs.find((tab) => tab.active);

	const update_tab = (name: string) => {
		tabs = tabs.map((tab) => ({
			...tab,
			active: tab.name === name
		}));
	};
</script>

<div class="tabs">
	{#each tabs as tab}
		<button
			on:click={() => update_tab(tab.name)}
			class={`tab tab-md tab-lifted ${tab.active ? 'tab-active' : ''}`}>{tab.name}</button
		>
	{/each}
</div>
{#if active_tab && active_tab.active}
	<slot {active_tab} />
{/if}
