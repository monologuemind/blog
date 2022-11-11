<script lang="ts">
	import WasmRust from './WasmRust.svx';
	import * as rust from '../../../wasm/rust/pkg/rust';
	import { onMount } from 'svelte';

	onMount(() => {
		rust.default();

		window.rust = rust;
	});
</script>

<WasmRust methods={{ ...rust }} />
