<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import type { PageData } from './$types';
	import Pricing from './pricing.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>UploadFast - Ship file uploads in 15 minutes.</title>
	<meta name="description" content="Start uploading files from your javascript app for free" />
</svelte:head>

<div class="flex flex-row items-center justify-between px-8 py-2">
	<div class="flex flex-row items-center">
		<img src="/uploadfast.png" alt="logo" class="h-20 w-20 object-scale-down" />
		<p class="text-4xl font-bold">
			upload <span
				class="inline-block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"
				>fast</span
			>⚡
		</p>
	</div>

	<Button class="hidden rounded-sm bg-teal-800 text-white sm:block">
		<a href="/dashboard">Go to dashboard</a>
	</Button>
</div>

<div class="mx-auto my-16 flex flex-col items-center px-2 sm:px-0 md:max-w-xl">
	<h1
		class="text-wrap-balance text-center text-4xl font-bold !leading-relaxed sm:text-5xl md:text-6xl lg:text-7xl"
	>
		Ship file uploads in <span
			class="relative ml-2.5 inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:rounded-md before:bg-pink-500"
		>
			<span class="relative mx-4 text-white">minutes</span>
		</span>
	</h1>
	<p class="text-balance mx-auto mt-12 max-w-sm px-4 text-center text-lg sm:px-0 md:text-xl">
		Build user content upload into your app in <span class="bg-pink-500 px-1 font-semibold"
			>15 minutes</span
		>, not 15 sprints😔
	</p>

	<div class="mt-10 flex flex-col gap-4 sm:flex-row">
		<Button class="mx-auto text-lg text-white/90" size="lg" variant="outline" href="/docs/intro"
			>Read the docs</Button
		>
		<Button class="mx-auto bg-pink-500 text-lg text-white/90" size="lg" href="/dashboard"
			>Dive straight in🚀</Button
		>
	</div>
</div>

<Pricing data={data.pricingData} />
