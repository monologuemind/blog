<script lang="ts">
	import H2 from '$components/H2.svelte';

	interface Person {
		name: String;
		age: number;
		_meta: String;
	}

	export let people: Person[] = [];
	export let title = '';
</script>

<div class="overflow-x-auto">
	<H2>{title}</H2>
	<table class="table w-full">
		<thead>
			<tr>
				<th>Name</th>
				<th>Age</th>
			</tr>
		</thead>
		<tbody>
			{#each people as individual}
				<tr>
					<td>{individual.name}</td>
					<td>{individual.age}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
