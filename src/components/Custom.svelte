<script lang="ts">
	export let text: string;

	let count = 0;
</script>

<h1>
	<button class="btn btn-secondary" on:click={() => (count += 1)}>#{count}: {text}</button>
</h1>
