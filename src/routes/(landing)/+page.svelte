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
	<title>Uploadfast | Build image uploads FAST.</title>
	<OpenGraph
		siteTitle="UploadFast"
		pageTitle="UploadFast"
		metadescription="The easiest way to add image uploads to your app."
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
		The simplest way to add image uploads to your apps.
	</p>
	<p class="mx-auto mt-8 max-w-sm px-2 text-center text-lg sm:px-0 md:text-xl">
		Get unstuck and ship even faster.
	</p>

	<div class="mt-12 flex flex-col gap-4 sm:flex-row">
		<Button
			class="mx-auto border border-pink-200/40 text-lg text-white/90"
			size="lg"
			variant="outline"
			href="/docs">Read the docs</Button
		>
		<Button
			class="mx-auto bg-pink-500 text-lg text-white/90 opacity-0 sm:opacity-100"
			size="lg"
			href="/dashboard">Dive straight in🚀</Button
		>
	</div>

	<a
		href="https://www.producthunt.com/posts/uploadfast-early-beta?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-uploadfast&#0045;early&#0045;beta"
		target="_blank"
		class="mt-12"
		><img
			src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=800498&theme=light&t=1737545250573"
			alt="UploadFast&#0032;&#0040;Early&#0032;Beta&#0041; - The&#0032;file&#0032;upload&#0032;API&#0032;you&#0039;ll&#0032;actually&#0032;enjoy&#0032;using | Product Hunt"
			style="width: 250px; height: 54px;"
			width="250"
			height="54"
		/></a
	>
</div>

<div class="mx-auto max-w-6xl px-6 py-20 sm:px-6 sm:py-24 lg:px-8">
	<div class="mx-auto max-w-2xl text-center">
		<h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
			Why should you use <span class="relative ml-1.5 text-emerald-300"
				>Upload-Fast<span class="absolute -bottom-2 left-2 h-[3px] w-full bg-pink-500"></span></span
			>?
		</h2>
	</div>

	<div class="ml-24 mt-10 max-w-6xl sm:mt-20 lg:mt-20">
		<dl
			class="grid max-w-2xl grid-cols-1 place-items-center gap-x-20 gap-y-16 lg:max-w-none lg:grid-cols-3"
		>
			<div class="flex flex-col">
				<dt class="text-base font-semibold leading-7">
					<div class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-pink-500">
						<svg
							class="h-6 w-6 text-white"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</div>
					5x cheaper than S3.
				</dt>
				<dd class="text-balance mt-1 flex flex-auto flex-col text-base leading-7">
					<p class="flex-auto">Object storage got (a lot) cheaper, your service provider didn't.</p>
				</dd>
			</div>
			<div class="flex flex-col">
				<dt class="text-base font-semibold leading-7">
					<div class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-pink-500">
						<svg
							class="h-6 w-6 text-white"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</div>
					7-Minute Setup
				</dt>
				<dd class="mt-1 flex flex-auto flex-col text-base leading-7">
					<p class="flex-auto">
						Get up and running in minutes, not hours. Simple API, clear documentation.
					</p>
				</dd>
			</div>
			<div class="flex flex-col">
				<dt class="text-base font-semibold leading-7">
					<div class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-pink-500">
						<svg
							class="h-6 w-6 text-white"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
							/>
						</svg>
					</div>
					Global CDN
				</dt>
				<dd class="mt-1 flex flex-auto flex-col text-base leading-7">
					<p class="flex-auto">
						Powered by Cloudflare's global CDN for lightning-fast image delivery worldwide.
					</p>
				</dd>
			</div>
		</dl>
	</div>
</div>

<Pricing />
