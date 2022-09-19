<script lang="ts">
	import { v4 } from 'uuid';
	import MaterialIcon from './MaterialIcon.svelte';

	export let open = false;

	const id = v4();

	function scrollIntoView() {
		open = !open;
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
		<MaterialIcon icon={!open ? 'chevron_right' : 'expand_more'} />
		<div style:display="contents">
			<slot name="title" />
		</div>
	</div>
	<div
		class="collapse-content bg-base-100 text-primary-content peer-checked:bg-base-200 peer-checked:text-secondary-content"
		id={`content-${id}`}
	>
		<slot name="content" />
	</div>
</div>
