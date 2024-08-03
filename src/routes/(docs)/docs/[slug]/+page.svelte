<script lang="ts">
	import CopyCodeInjector from '$lib/components/CopyCodeInjector.svelte';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	$: next = data.content.find((item) => item.order === data.meta.order + 1) || null;
</script>

<!-- SEO -->
<svelte:head>
	<title>Docs | {data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.description} />
</svelte:head>

<article
	class="prose px-6 text-lg prose-headings:text-gray-200 prose-h1:-mb-1 prose-h4:mt-4 prose-a:text-primary-foreground prose-strong:text-white/90 sm:px-4"
>
	<!-- Remount CopyCodeInjector every on each render-->
	{#key next}
		<CopyCodeInjector>
			<svelte:component this={data.pageContent} />
		</CopyCodeInjector>
	{/key}
</article>

{#if next}
	<div class="mt-10 flex max-w-3xl justify-end border-t-2 px-3 pt-4">
		<a href={next.url} class="text-[#ebdbb2]">Up Next - {next.name}</a>
	</div>
{/if}
