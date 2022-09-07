<script lang="ts">
	import Markdown from '$components/Markdown.svelte';

	export let data: {
		fetch?: Fetch;
		file_data?: string;
	};
</script>

<div
	style:justify-content="center"
	style:width="100%"
	style:height="100%"
	class="flex w-full lg:flex-row"
>
	<div style:width="100%" class="card card-compact w-96 bg-base-100 shadow-xl">
		<div class="card-body">
			<h2 style:display="block" class="card-title">Viewer</h2>
			<Markdown source={data?.file_data || ''} />
		</div>
	</div>
</div>
