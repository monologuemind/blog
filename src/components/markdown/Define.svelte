<script lang="ts">
	import page_state from '$stores/page.state';
	import { page } from '$app/stores';
	import { onDestroy } from 'svelte';

	export let text: string = '';
	let true_value: any = '';

	$: [name, type, value] = text && text?.trim() ? text?.split('::') : [];

	$: {
		if (name && value && type && true_value !== $page_state?.[$page.url.pathname]?.[name]?.value) {
			try {
				switch (type) {
					case 'function':
						true_value = new Function(`return ${value}`);
						break;
					case 'object':
						true_value = JSON.parse(value);
						break;
					case 'number':
						true_value = Number(value);
						break;
					case 'bigint':
						true_value = BigInt(value);
						break;
					case 'boolean':
						true_value = value === 'true';
						break;
					default:
						true_value = eval(value);
						break;
				}
			} catch (error) {
				console.debug(`${error}`);
			}
			if (true_value !== $page_state?.[$page.url.pathname]?.[name]?.value) {
				$page_state = {
					...$page_state,
					[$page.url.pathname]: {
						...$page_state[$page.url.pathname],
						[name]: {
							type,
							value: true_value
						}
					}
				};
			}
		}
	}

	onDestroy(() => {
		$page_state = Object.keys($page_state).reduce((acc, key) => {
			if (key !== $page.url.pathname) {
				return {
					...acc,
					[key]: $page_state[key]
				};
			}

			const updated_page_state = Object.keys($page_state[key]).reduce((acc_two, key_two) => {
				if (key_two !== name) {
					return {
						...acc_two,
						[key_two]: $page_state[key][key_two]
					};
				}

				return acc_two;
			}, {});

			return {
				...acc,
				[key]: updated_page_state
			};
		}, {});
	});
</script>

{#if name && value && type}
	{#if ['number', 'bigint'].includes(type)}
		<p style:flex-grow="unset">let {name}: {type} = {value}</p>
	{:else if type === 'string'}
		<p style:flex-grow="unset">let {name}: {type} = "{value}"</p>
	{:else if type === 'object'}
		<p style:flex-grow="unset">let {name}: {type} = {value}</p>
	{:else if type === 'function'}
		<p style:flex-grow="unset">let {name}: Function = {`() => {return ${value}}`}</p>
	{:else if type === 'boolean'}
		<p style:flex-grow="unset">let {name}: {type} = {value}</p>
	{:else if type === 'undefined'}
		<p style:flex-grow="unset">let {name}: {type} = {value}</p>
	{/if}
{/if}
