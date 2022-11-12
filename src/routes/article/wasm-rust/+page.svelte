<script lang="ts">
	import WasmRust from './WasmRust.svx';
	import * as rust from '../../../wasm/rust/pkg/rust';
	import { onMount } from 'svelte';

	let display = false;

	onMount(async () => {
		await rust.default();

		window.rust = rust;

		display = true;
	});
</script>

{#if display}
	<WasmRust methods={{ ...rust }} />
{/if}
