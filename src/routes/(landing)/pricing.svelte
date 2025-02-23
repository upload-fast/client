<script lang="ts">
	import { browser } from '$app/environment';
	import { Button } from '$lib/components/ui/button';

	function savePreset(value: string) {
		if (browser) {
			localStorage.setItem('preset', value);
		}
	}
</script>

<div id="pricing">
	<div class="mx-auto mt-20 sm:mt-32 max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-balance text-3xl sm:text-4xl font-bold tracking-tight">
				<span class="inline-flex flex-col items-center gap-2">
					<span class="bg-gradient-to-r from-white via-white/95 to-orange-100/90 bg-clip-text text-transparent">
						Get started with a one-time payment
					</span>
					<span class="h-1 w-24 sm:w-32 rounded-full bg-gradient-to-r from-white/40 via-white/30 to-orange-100/20"></span>
				</span>
			</h2>
			<p class="mt-4 text-base sm:text-lg text-gray-300">Skip the <strong class="mx-1 text-white/90">BS</strong> and get value immediately.</p>
		</div>

		<div class="isolate mx-auto mt-8 sm:mt-16 grid max-w-md grid-cols-1 gap-4 sm:gap-6 lg:gap-8 lg:max-w-none lg:grid-cols-3">
			<!-- Quick Fix -->
			<div class="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/5 bg-black/20 p-6 sm:p-8 backdrop-blur-sm transition-all hover:border-white/10 hover:bg-black/30 hover:shadow-[0_0_1rem_0_rgba(255,255,255,0.1)]">
				<div class="flex items-center justify-between gap-x-4">
					<h2 id="product1" class="text-xl font-semibold text-white">Quick Fix</h2>
				</div>
				<p class="mt-4 text-sm sm:text-base text-gray-300">
					For prototyping new apps where users can upload images.
				</p>
				<p class="mt-6 flex items-baseline gap-x-1">
					<span class="text-4xl font-bold tracking-tight text-white">$4</span>
					<span class="text-sm font-semibold text-gray-300">- once</span>
				</p>

				<ul role="list" class="mt-8 space-y-3 text-sm sm:text-base text-gray-300">
					<li class="flex gap-x-3">
						<svg class="h-6 w-5 flex-none text-emerald-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
						1GB of storage
					</li>
					<li class="flex gap-x-3">
						<svg class="h-6 w-5 flex-none text-emerald-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>500 uploads a month
					</li>
					<li class="flex gap-x-3">
						<svg class="h-6 w-5 flex-none text-emerald-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
						Support - Limited support.
					</li>
					<li class="flex gap-x-3">
						<svg class="h-6 w-5 flex-none text-emerald-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
						Max File Upload Size - 500MB
					</li>
				</ul>

				<Button 
					class="mt-8 w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg transition-all hover:shadow-pink-500/25" 
					href="/dashboard" 
					on:click={() => savePreset('Quick Fix')}
				>
					Sign up
				</Button>
			</div>

			<!-- Tier 1 -->
			<div class="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/5 bg-black/20 p-6 sm:p-8 backdrop-blur-sm transition-all hover:border-white/10 hover:bg-black/30 hover:shadow-[0_0_1rem_0_rgba(255,255,255,0.1)]">
				<div class="flex items-center justify-between gap-x-4">
					<h2 id="product2" class="text-xl font-semibold text-white">Tier 1</h2>
				</div>
				<p class="mt-4 text-sm sm:text-base text-gray-300">
					For apps with moderately frequent image uploads needs in production
				</p>
				<p class="mt-6 flex items-baseline gap-x-1">
					<span class="text-4xl font-bold tracking-tight text-white">$7</span>
					<span class="text-sm font-semibold text-gray-300">/mo</span>
				</p>

				<ul role="list" class="mt-8 space-y-3 text-sm sm:text-base text-gray-300">
					<li class="flex gap-x-3">
						<svg class="h-6 w-5 flex-none text-emerald-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
						15GB of storage
					</li>
					<li class="flex gap-x-3">
						<svg class="h-6 w-5 flex-none text-emerald-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
						5,000 uploads a month
					</li>
					<li class="flex gap-x-3">
						<svg class="h-6 w-5 flex-none text-emerald-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
						Support - Enthusiastic support via email.
					</li>
					<li class="flex gap-x-3">
						<svg class="h-6 w-5 flex-none text-emerald-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
						Max File Upload Size - 1GB
					</li>
				</ul>

				<Button 
					class="mt-8 w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg transition-all hover:shadow-pink-500/25" 
					href="/dashboard" 
					on:click={() => savePreset('Tier 1')}
				>
					Sign up
				</Button>
			</div>

			<!-- Tier 2 -->
			<div class="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/5 bg-black/20 p-6 sm:p-8 backdrop-blur-sm transition-all hover:border-white/10 hover:bg-black/30 hover:shadow-[0_0_1rem_0_rgba(255,255,255,0.1)]">
				<div class="flex items-center justify-between gap-x-4">
					<h2 id="product3" class="text-xl font-semibold text-white">Tier 2</h2>
				</div>
				<p class="mt-4 text-sm sm:text-base text-gray-300">
					For production apps with frequent image upload and storage needs.
				</p>
				<p class="mt-6 flex items-baseline gap-x-1">
					<span class="text-4xl font-bold tracking-tight text-white">$19</span>
					<span class="text-sm font-semibold text-gray-300">/mo</span>
				</p>

				<ul role="list" class="mt-8 space-y-3 text-sm sm:text-base text-gray-300">
					<li class="flex gap-x-3">
						<svg class="h-6 w-5 flex-none text-emerald-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
						150GB (extendable) of storage
					</li>
					<li class="flex gap-x-3">
						<svg class="h-6 w-5 flex-none text-emerald-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
						Unlimited uploads a month
					</li>
					<li class="flex gap-x-3">
						<svg class="h-6 w-5 flex-none text-emerald-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
						Support - Team is on hand to help you fix your issues.
					</li>
				</ul>

				<Button 
					class="mt-8 w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg transition-all hover:shadow-pink-500/25" 
					href="/dashboard" 
					on:click={() => savePreset('Tier 2')}
				>
					Sign up
				</Button>
			</div>
		</div>
	</div>
</div>
