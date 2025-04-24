<script>
	import '../../app.pcss';
	import { ProgressBar } from '@prgm/sveltekit-progress-bar';
	import OpenGraph from '$lib/components/OpenGraph.svelte';
	import Twitter from '$lib/components/Twitter.svelte';
</script>

<svelte:head>
	<OpenGraph
		siteTitle="UploadFast"
		pageTitle="UploadFast | Authentication"
		metadescription="Sign in to UploadFast - The easiest way to add image uploads to your app."
		url="https://www.uploadfast.dev/login"
		image="/uploadfast-poster-123.png"
		squareImage="/uploadfast-poster-123.png"
	/>
	<Twitter image={{ url: '/uploadfast-poster-123.png' }} />
</svelte:head>

<main class="min-h-screen">
	<ProgressBar class="text-emerald-500" />
	<slot />
</main>