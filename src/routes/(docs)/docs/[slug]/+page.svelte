<script lang="ts">
	export let data;
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article
	class="prose prose-headings:text-primary-foreground prose-h1:-mb-1 prose-strong:text-white/90 px-6 text-lg sm:px-3"
>
	<svelte:component this={data.content} />
</article>
