<script lang="ts">
	//@ts-ignore
	import Hello from '$lib/components/intro.svx';
	import OpenGraph from '$lib/components/OpenGraph.svelte';
	import Twitter from '$lib/components/Twitter.svelte';
</script>

<svelte:head>
	<title>Uploadfast | Documentation</title>
	<OpenGraph
		siteTitle="UploadFast"
		pageTitle="UploadFast | Documentation"
		metadescription="The site to help you succeed with Uploadfast."
		url="https://www.uploadfast.dev/docs"
		image="/uploadfast-poster-123.png"
		squareImage="/uploadfast-poster-123.png"
	/>
	<Twitter image={{ url: '/uploadfast-poster-123.png' }} />
</svelte:head>

<section class="max-w-6xl">
	<article
		class="prose px-6 text-base prose-headings:text-gray-100 prose-h1:-mb-1 prose-a:!text-primary-foreground prose-strong:text-white/90 sm:px-3"
	>
		<h1>Welcome to the UploadFast Docs!</h1>
		<Hello />
	</article>
</section>
