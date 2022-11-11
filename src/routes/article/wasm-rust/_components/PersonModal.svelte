<script lang="ts">
	import Modal from '$components/Modal.svelte';
</script>

<Modal
	modal_confirm_handler={() => console.log('Confirm')}
	modal_cancel_handler={() => console.log('Cancel')}
	modal_cancel_text="Cancel"
	modal_confirm_text="Confirm"
	modal_open_text="Create Person"
	modal_title="Create Person"
>
	<h1 class="text-5xl font-bold">This is an h1</h1>
</Modal>
