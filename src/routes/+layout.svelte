<script lang="ts">
	import '../app.postcss';
	import global_data from '$stores/data';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';

	const get_random_markdown = () => {
		if (!$global_data?.articles) {
			return `${base}/`;
		}

		return `${base}/article?file_path=${
			$global_data?.articles[Math.floor(Math.random() * $global_data?.articles?.length)]?.path
		}`;
	};
</script>

<div class="navbar bg-secondary text-primary-content">
	<div class="flex-1">
		<a href={`${base}/`} class="btn btn-ghost normal-case text-xl">Home</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal p-0">
			<li tabindex="0">
				<a href={`${base}/article-list`}> Articles </a>
			</li>
			<li tabindex="0">
				<a href={`${base}/selectors`}> Selectors </a>
			</li>
			<li><button on:click={() => goto(get_random_markdown())}>Random Article</button></li>
		</ul>
	</div>
</div>

<div style:text-align="center" style:width="100%" style:height="100%">
	<slot />
</div>
