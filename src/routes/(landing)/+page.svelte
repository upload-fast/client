<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import Pricing from './pricing.svelte';
	import { buttonVariants } from '$lib/components/ui/button';
	import OpenGraph from '$lib/components/OpenGraph.svelte';
	import Twitter from '$lib/components/Twitter.svelte';
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

<div class="relative min-h-screen">
	<div class="absolute inset-0 -z-10">
		<div
			class="fixed inset-0 animate-pulse bg-gradient-to-br from-pink-500/40 via-transparent to-orange-500/40 opacity-60 mix-blend-overlay"
		></div>
		<div
			class="fixed inset-0 h-full w-full bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)] bg-[size:24px_24px]"
		></div>

		<div
			class="fixed inset-0 bg-[linear-gradient(to_bottom,rgb(0,0,0)_0%,rgba(0,0,0,0)_35%,rgba(0,0,0,0)_65%,rgb(0,0,0)_100%)]"
		></div>
		<div
			class="fixed inset-0 bg-[linear-gradient(to_right,rgb(0,0,0)_0%,rgba(0,0,0,0)_35%,rgba(0,0,0,0)_65%,rgb(0,0,0)_100%)]"
		></div>

		<div
			class="fixed inset-0 animate-pulse bg-gradient-to-tr from-pink-500/30 via-transparent to-orange-500/30 opacity-40 mix-blend-overlay blur-xl"
		></div>
	</div>

	<div class="flex flex-row items-center justify-between px-4 md:px-8 md:py-8">
		<div class="flex flex-row items-center py-6 sm:p-0">
			<img src="/uploadfast.webp" alt="logo" class="h-12 w-12 object-scale-down sm:h-16 sm:w-16" />
			<p class="text-base font-bold md:text-2xl">
				Upload<span
					class="inline-block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"
					>Fast</span
				> <small class="-mt-1 text-xs md:text-sm">beta</small>
			</p>
		</div>

		<a href="/dashboard" class={buttonVariants({ variant: 'secondary', class: 'hidden md:flex' })}>
			Go to Dashboard
		</a>
	</div>

	<div
		class="mx-auto mb-8 mt-8 flex flex-col items-center px-4 sm:mt-14 sm:px-8 md:mt-24 md:max-w-3xl"
	>
		<h1
			class="text-balance text-center text-4xl font-extrabold !leading-[1.2] tracking-tight sm:text-5xl md:text-7xl"
		>
			The file upload API developers <span
				class="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 bg-clip-text text-transparent"
				>love</span
			>
		</h1>
		<p
			class="text-balance mx-auto mt-6 max-w-xl text-center text-base text-gray-300/90 sm:mt-8 sm:text-lg md:text-xl"
		>
			<strong>Just upload files and get a URL, No S3 needed.</strong>
		</p>
	</div>

	<div
		class="mt-8 flex flex-col items-center gap-4 px-4 sm:mt-12 sm:flex-row sm:justify-center sm:gap-6"
	>
		<Button
			class="w-44 border-2 border-pink-400/30 text-base font-medium text-white/90 transition-all hover:border-pink-400/50 hover:bg-pink-500/10 hover:shadow-[0_0_15px_rgba(236,72,153,0.15)] sm:w-auto sm:text-lg"
			size="lg"
			variant="outline"
			target="_blank"
			href="https://docs.uploadfast.dev">Read the docs</Button
		>
		<Button
			class="w-44 bg-gradient-to-r from-pink-500 to-pink-600 text-base font-medium text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-pink-500/25 sm:w-auto sm:text-lg"
			size="lg"
			href="/dashboard">Dive straight in 🚀</Button
		>
	</div>

	<div class="mt-8 flex justify-center sm:mt-12">
		<a
			href="https://www.producthunt.com/posts/uploadfast-early-beta?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-uploadfast&#0045;early&#0045;beta"
			target="_blank"
			class="px-4 sm:px-0"
		>
			<img
				src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=800498&theme=light&t=1737545250573"
				alt="UploadFast&#0032;&#0040;Early&#0032;Beta&#0041; - The&#0032;file&#0032;upload&#0032;API&#0032;you&#0039;ll&#0032;actually&#0032;enjoy&#0032;using | Product Hunt"
				style="width: 250px; height: 54px;"
				width="250"
				height="54"
			/>
		</a>
	</div>

	<div class="relative mt-24 px-4 sm:mt-32 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-balance text-3xl font-bold tracking-tight sm:text-4xl sm:text-5xl">
				<span class="inline-flex flex-col items-center gap-2">
					<span
						class="bg-gradient-to-r from-white via-white/95 to-orange-100/90 bg-clip-text text-transparent"
					>
						Why should you use this?
					</span>
					<span
						class="h-1 w-24 rounded-full bg-gradient-to-r from-orange-300/40 from-white/40 via-white/30 to-orange-100/20 sm:w-32"
					></span>
				</span>
			</h2>
			<p class="mt-6 px-4 text-base text-gray-300 sm:px-0 sm:text-lg">
				Everything you need to handle file uploads, nothing you don't.
			</p>
		</div>

		<div class="mx-auto mt-6 max-w-7xl sm:mt-12">
			<dl
				class="grid grid-cols-1 gap-4 px-2 sm:grid-cols-2 sm:gap-6 sm:px-0 lg:grid-cols-3 lg:gap-8"
			>
				<div
					class="group relative overflow-hidden rounded-2xl border border-white/5 bg-black/20 p-6 backdrop-blur-sm transition-all hover:border-white/10 hover:bg-black/30 hover:shadow-[0_0_1rem_0_rgba(255,255,255,0.1)] sm:rounded-3xl sm:p-8"
				>
					<dt class="flex items-center gap-3 sm:gap-4">
						<div
							class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500/90 to-pink-600/90 shadow-xl shadow-pink-500/20 transition-all group-hover:shadow-pink-500/30 sm:h-14 sm:w-14 sm:rounded-2xl"
						>
							<svg
								class="h-5 w-5 text-white sm:h-6 sm:w-6"
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
						<span class="text-lg font-semibold text-white/90 sm:text-xl">5x cheaper than S3</span>
					</dt>
					<dd class="mt-4 text-sm text-gray-400 sm:mt-6 sm:text-base">
						Object storage got (a lot) cheaper, your service provider didn't.
					</dd>
				</div>

				<div
					class="group relative overflow-hidden rounded-2xl border border-white/5 bg-black/20 p-6 backdrop-blur-sm transition-all hover:border-white/10 hover:bg-black/30 hover:shadow-[0_0_1rem_0_rgba(255,255,255,0.1)] sm:rounded-3xl sm:p-8"
				>
					<dt class="flex items-center gap-3 sm:gap-4">
						<div
							class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500/90 to-pink-600/90 shadow-xl shadow-pink-500/20 transition-all group-hover:shadow-pink-500/30 sm:h-14 sm:w-14 sm:rounded-2xl"
						>
							<svg
								class="h-5 w-5 text-white sm:h-6 sm:w-6"
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
						<span class="text-lg font-semibold text-white/90 sm:text-xl">7-Minute Setup</span>
					</dt>
					<dd class="mt-4 text-sm text-gray-400 sm:mt-6 sm:text-base">
						Get up and running in minutes, not hours. Simple API, clear documentation.
					</dd>
				</div>

				<div
					class="group relative overflow-hidden rounded-2xl border border-white/5 bg-black/20 p-6 backdrop-blur-sm transition-all hover:border-white/10 hover:bg-black/30 hover:shadow-[0_0_1rem_0_rgba(255,255,255,0.1)] sm:rounded-3xl sm:p-8"
				>
					<dt class="flex items-center gap-3 sm:gap-4">
						<div
							class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500/90 to-pink-600/90 shadow-xl shadow-pink-500/20 transition-all group-hover:shadow-pink-500/30 sm:h-14 sm:w-14 sm:rounded-2xl"
						>
							<svg
								class="h-5 w-5 text-white sm:h-6 sm:w-6"
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
						<span class="text-lg font-semibold text-white/90 sm:text-xl">Global CDN</span>
					</dt>
					<dd class="mt-4 text-sm text-gray-400 sm:mt-6 sm:text-base">
						Powered by Cloudflare's global CDN for lightning-fast image delivery worldwide.
					</dd>
				</div>
			</dl>
		</div>
	</div>

	<Pricing />

	<footer class="mt-8 border-t border-white/10 py-6 text-center text-sm text-gray-400">
		© {new Date().getFullYear()} UploadFast. All rights reserved.
	</footer>
</div>
