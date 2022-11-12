<script lang="ts">
	import Modal from '$components/Modal.svelte';

	export let handlers = [() => null, () => null];

	$: [h1, h2] = handlers;
</script>

<Modal
	modal_confirm_handler={h1}
	modal_cancel_handler={h2}
	modal_cancel_text="Cancel"
	modal_confirm_text="Confirm"
	modal_open_text="Create Person"
	modal_title="Create Person"
>
	<h1 class="text-5xl font-bold">This is an h1</h1>
	<slot />
</Modal>
