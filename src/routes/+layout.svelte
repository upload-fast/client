<script>
	import '@fontsource-variable/instrument-sans';
	import '../app.pcss';
	import { ProgressBar } from '@prgm/sveltekit-progress-bar';
	import OpenGraph from '$lib/components/OpenGraph.svelte';
	import Twitter from '$lib/components/Twitter.svelte';
</script>

<main class="mx-auto">
	<ProgressBar class="text-green-500" />
	<slot />
</main>
