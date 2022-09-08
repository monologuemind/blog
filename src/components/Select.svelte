<script lang="ts">
	export let text = '';

	$: [default_value, rest] = text.split('->');

	$: options = rest.split(',');
</script>

<select class="select w-full max-w-xs">
	<option disabled selected>{default_value}</option>
	{#each options as option}
		<option>{option}</option>
	{/each}
</select>
