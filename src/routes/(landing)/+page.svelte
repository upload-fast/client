<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import type { PageData } from './$types';
	import Pricing from './pricing.svelte';
	import { buttonVariants } from '$lib/components/ui/button';
	import OpenGraph from '$lib/components/OpenGraph.svelte';
	import Twitter from '$lib/components/Twitter.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Uploadfast | Do images right.</title>
	<OpenGraph
		siteTitle="UploadFast"
		pageTitle="UploadFast"
		metadescription="Add image uploads to your app the right way."
		url="https://www.uploadfast.dev"
		image="/uploadfast-poster-123.png"
		squareImage="/uploadfast-poster-123.png"
	/>
	<Twitter image={{ url: '/uploadfast-poster-123.png' }} />
</svelte:head>

<div class="flex flex-row items-center justify-between px-4 py-2 md:px-8">
	<div class="flex flex-row items-center py-3 sm:p-0">
		<img src="/uploadfast.webp" alt="logo" class="h-16 w-16 object-scale-down sm:h-20 sm:w-20" />
		<p class="hidden font-bold md:block md:text-2xl">
			upload <span
				class="inline-block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"
				>fast</span
			>⚡
		</p>
	</div>

	<a href="/dashboard" class={buttonVariants({ variant: 'secondary', class: 'hidden md:block' })}>
		Go to Dashboard
	</a>
</div>

<div class="mx-auto my-8 flex flex-col items-center px-6 sm:px-0 md:my-16 md:max-w-xl">
	<h1
		class="text-wrap-balance text-center text-4xl font-bold !leading-relaxed sm:text-5xl md:text-6xl lg:text-6xl"
	>
		Ship image uploads in <span
			class="relative ml-2.5 mt-4 inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:rounded-md before:bg-pink-500 md:mt-0"
		>
			<span class="relative mx-4 text-white">minutes</span>
		</span>
	</h1>
	<p
		class="text-balance text-balance mx-auto mt-12 max-w-sm px-4 text-center text-lg sm:px-0 md:text-xl"
	>
		You needed a simpler way to build file uploads, so I delivered.
	</p>
	<p class="text-balance mx-auto mt-8 max-w-sm px-4 text-center text-lg sm:px-0 md:text-xl">
		Stop configuring and start shipping.
	</p>

	<div class="mt-12 flex flex-col gap-4 sm:flex-row">
		<Button class="mx-auto text-lg text-white/90" size="lg" variant="outline" href="/docs"
			>Read the docs</Button
		>
		<Button
			class="mx-auto bg-pink-500 text-lg text-white/90 opacity-0 sm:opacity-100"
			size="lg"
			href="/dashboard">Dive straight in🚀</Button
		>
	</div>
</div>

<Pricing data={data.pricingData} />
