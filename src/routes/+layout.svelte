<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { FILE_PATHS } from '$lib/constants';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/x-icon" href={FILE_PATHS.FAVICON_ICO} />
	<link rel="icon" type="image/svg+xml" href={favicon} />
	<link rel="apple-touch-icon" href={FILE_PATHS.FAVICON_PNG} />
</svelte:head>

{@render children?.()}
