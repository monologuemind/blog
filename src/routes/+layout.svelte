<script lang="ts">
	import '../app.postcss';
	import global_data from '$stores/data';
	import compatability from '$stores/compatability';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import StoreDebug from '$components/StoreDebug.svelte';
	import { onMount } from 'svelte';

	let inner_width = window.innerWidth;
	let selected_theme = localStorage.getItem('mm-theme') || 'dark';

	const get_random_markdown = () => {
		if (!$global_data?.articles) {
			return `${base}/`;
		}

		return `${base}/article/${
			$global_data?.articles[Math.floor(Math.random() * $global_data?.articles?.length)]?.pathname
		}`;
	};

	const themes = [
		'light',
		'dark',
		'cupcake',
		'bumblebee',
		'emerald',
		'corporate',
		'synthwave',
		'retro',
		'cyberpunk',
		'valentine',
		'halloween',
		'garden',
		'forest',
		'aqua',
		'lofi',
		'pastel',
		'fantasy',
		'wireframe',
		'black',
		'luxury',
		'dracula',
		'cmyk',
		'autumn',
		'business',
		'acid',
		'lemonade',
		'night',
		'coffee',
		'winter'
	];

	const mobile_target = navigator?.userAgent || navigator?.vendor || window?.opera;

	const change_theme = () => {
		localStorage.setItem('mm-theme', selected_theme);
		if (document?.body?.parentElement) {
			document.body.parentElement.setAttribute(
				'data-theme',
				localStorage.getItem('mm-theme') || 'dark'
			);
		}
	};

	$: {
		$compatability.is_mobile =
			/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
				mobile_target
			) ||
			/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
				mobile_target.substr(0, 4)
			) ||
			innerWidth < 500;
	}

	onMount(() => {
		if (document?.body?.parentElement) {
			document.body.parentElement.setAttribute(
				'data-theme',
				localStorage.getItem('mm-theme') || 'dark'
			);
			if (!localStorage.getItem('mm-theme')) {
				localStorage.setItem('mm-theme', 'dark');
			}
		}
	});
</script>

<svelte:window bind:innerWidth={inner_width} />

<StoreDebug />

<div class="navbar bg-secondary text-primary-content">
	<div class="flex-1">
		<a href={`${base}/`} class="btn btn-ghost normal-case text-xl">Home</a>
		<select
			bind:value={selected_theme}
			on:change={change_theme}
			style:opacity="0"
			class="select select-info w-full max-w-xs"
		>
			<option disabled selected>Select theme</option>
			{#each themes as theme}
				<option>{theme}</option>
			{/each}
		</select>
	</div>
	{#if $compatability.is_mobile}
		<div class="dropdown dropdown-end">
			<p tabindex="0" class="btn btn-ghost btn-circle">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h7"
					/></svg
				>
			</p>
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li tabindex="0">
					<a class="normal-case text-xl" href={`${base}/topics`}> Topics </a>
				</li>
				<li tabindex="0">
					<a class="normal-case text-xl" href={`${base}/article-list`}> Articles </a>
				</li>
				<!-- <li tabindex="0">
					<a class="normal-case text-xl" href={`${base}/selectors`}> Selectors </a>
				</li>
				<li tabindex="0">
					<a class="normal-case text-xl" href={`${base}/playground`}> Playground </a>
				</li> -->
				<li tabindex="0">
					<button class="normal-case text-xl" on:click={() => goto(get_random_markdown())}
						>Random Article</button
					>
				</li>
			</ul>
		</div>
	{:else}
		<div class="flex-none">
			<ul class="menu menu-horizontal p-0">
				<li tabindex="0">
					<a class="normal-case text-xl" href={`${base}/topics`}> Topics </a>
				</li>
				<li tabindex="0">
					<a class="normal-case text-xl" href={`${base}/article-list`}> Articles </a>
				</li>
				<!-- <li tabindex="0">
					<a class="normal-case text-xl" href={`${base}/selectors`}> Selectors </a>
				</li>
				<li tabindex="0">
					<a class="normal-case text-xl" href={`${base}/playground`}> Playground </a>
				</li> -->
				<li tabindex="0">
					<button class="normal-case text-xl" on:click={() => goto(get_random_markdown())}
						>Random Article</button
					>
				</li>
			</ul>
		</div>
	{/if}
</div>

<div style:text-align="center" style:width="100%">
	<slot />
</div>
