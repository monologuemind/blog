<script lang="ts">
	export let text: string = '';

	$: {
		if (text) {
			try {
				const fun = new Function(`return ${text}`);

				fun();
			} catch (error) {
				console.debug(error);
			}
		}
	}
</script>

<p style:flex-grow="unset">{`(() => {${text}})()`}</p>
