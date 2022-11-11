<script lang="ts">
	import { v4 } from 'uuid';
	export let modal_open_text: String;
	export let modal_cancel_text: String;
	export let modal_confirm_text: String;
	export let modal_title: String;
	export let modal_cancel_handler: () => any;
	export let modal_confirm_handler: () => any;
	export let modal_cancel_color = 'neutral';
	export let modal_confirm_color = 'secondary';
	const modal_id = v4();
</script>

<label for={`modal-${modal_id}`} class="btn modal-button">{modal_open_text}</label>

<input type="checkbox" id={`modal-${modal_id}`} class="modal-toggle" />
<div class="modal">
	<div class="modal-box">
		<h3 class="font-bold text-lg">{modal_title}</h3>
		<slot />
		<div class="modal-action">
			<label
				on:click={modal_cancel_handler}
				for={`modal-${modal_id}`}
				class={`btn btn-${modal_cancel_color}`}>{modal_cancel_text}</label
			>
			<label
				on:click={modal_confirm_handler}
				for={`modal-${modal_id}`}
				class={`btn btn-${modal_confirm_color}`}>{modal_confirm_text}</label
			>
		</div>
	</div>
</div>
