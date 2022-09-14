<div
	style:justify-content="center"
	style:text-align="initial"
	style:width="100%"
	style:height="100%"
	class="flex w-full lg:flex-row"
>
	<div style:width="75%" class="card card-compact w-96 bg-base-100 shadow-xl">
		<div class="card-body">
			<slot />
		</div>
	</div>
</div>

<style>
	.card-body {
		flex-grow: unset;
	}
</style>
