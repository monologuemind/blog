<script lang="ts">
	import global_data from '$stores/data';
	const headers: {
		title: string;
		key: keyof Article;
	}[] = [
		{
			title: 'Name',
			key: 'name'
		},
		{
			title: 'Description',
			key: 'description'
		},
		{
			title: 'Topics',
			key: 'topics'
		}
	];
</script>

<div class="overflow-x-auto">
	<table class="table w-full">
		<thead>
			<tr>
				{#each headers as header}
					<th>{header.title}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#if $global_data?.articles?.length}
				{#each $global_data?.articles as file}
					<tr>
						{#each headers as header}
							<td>
								{#if header.key === 'name'}
									<a class="link link-secondary link-hover" href={`article?file_path=${file.path}`}
										>{file[header.key]}</a
									>
								{:else if header.key === 'topics'}
									{file[header.key].join(', ')}
								{:else}
									{file[header.key]}
								{/if}
							</td>
						{/each}
					</tr>
				{/each}
			{/if}
		</tbody>
	</table>
</div>
