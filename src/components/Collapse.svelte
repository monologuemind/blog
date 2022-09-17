<script lang="ts">
	import { v4 } from 'uuid';

	const id = v4();

	function scrollIntoView() {
		const el = document.querySelector(`#content-${id}`);
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
	}
</script>

<div class="collapse">
	<input on:click={scrollIntoView} type="checkbox" class="peer" />
	<div
		class="collapse-title bg-base-100 text-primary-content peer-checked:bg-base-200 peer-checked:text-secondary-content"
	>
		<slot name="title" />
	</div>
	<div
		class="collapse-content bg-base-100 text-primary-content peer-checked:bg-base-200 peer-checked:text-secondary-content"
		id={`content-${id}`}
	>
		<slot name="content" />
	</div>
</div>
