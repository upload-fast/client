<script lang="ts">
	import Header from './^blocks/Header.svelte';
	import Sidebar from './^blocks/Sidebar.svelte';
	import type { PageData } from './dashboard/$types';
	export let data: PageData;
	import OpenGraph from '$lib/components/OpenGraph.svelte';
	import Twitter from '$lib/components/Twitter.svelte';
	import { Toaster } from 'svelte-sonner';
</script>

<svelte:head>
	<title>Uploadfast | Dashboard</title>
	<OpenGraph
		siteTitle="UploadFast"
		pageTitle="UploadFast | Dashboard"
		metadescription="Control panel for your files"
		url="https://www.uploadfast.dev/dashboard"
		image="/uploadfast-poster-123.png"
		squareImage="/uploadfast-poster-123.png"
	/>
	<Twitter image={{ url: '/uploadfast-poster-123.png' }} />
</svelte:head>

<main class="hidden min-h-screen w-full flex-col bg-muted/40 p-0 md:flex">
	<Sidebar />
	<section class="ml-64 py-6">
		<div class="mx-auto max-w-7xl px-6">
			<Header
				imageUrl={data.session?.user?.image ?? undefined}
				username={data.session?.user?.name ?? ''}
			/>
			<slot />
		</div>
	</section>
</main>

<section class="flex min-h-screen flex-row items-center justify-center p-6 text-center md:hidden">
	<p class="text-balance w-[88%] text-xl font-semibold">
		Access this page on a larger screen to manage your files.
	</p>
</section>

<Toaster />
