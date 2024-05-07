<script lang="ts">
	import CopyCodeInjector from '$lib/components/CopyCodeInjector.svelte';

	export let data;
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.description} />
</svelte:head>

<article
	class="prose px-6 text-lg prose-headings:text-gray-200 prose-h1:-mb-1 prose-strong:text-white/90 sm:px-3"
>
	<CopyCodeInjector>
		<svelte:component this={data.content} />
	</CopyCodeInjector>
</article>
