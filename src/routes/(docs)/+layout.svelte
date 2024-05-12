<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import '$lib/prism-shades-of-purple.css';
	import type { PageData } from './docs/$types';

	export let data: PageData;

	const uploadRoutes = data.content.filter((item) => item.prefix === 'upload');
	const deleteRoutes = data.content.filter((item) => item.prefix === 'delete');
	const getStartedRoutes = data.content.filter((item) => !item.prefix);
</script>

<!-- Header, SearchBar, -->
<section>
	<div class="fixed top-0 z-10 h-fit w-full border-b-2 backdrop-blur-sm">
		<div class="flex flex-row items-center justify-between px-8 py-4">
			<a class="flex flex-row items-center" href="/">
				<img src="/uploadfast.png" alt="logo" class="h-8 w-8 object-scale-down" />
				<p class="text-xl font-bold">
					upload <span
						class="-ml-0.5 mr-1 inline-block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"
						>fast</span
					>
					<span class="mb-4 text-sm font-thin">docs</span>
				</p>
			</a>

			<Button class="hidden rounded-sm bg-teal-800 text-white sm:block" size="sm">
				<a href="/dashboard">Go to dashboard</a>
			</Button>
		</div>
	</div>
	<aside
		class="inset-y-0 left-0 z-10 mt-[4.4rem] hidden w-[13rem] flex-col border-r bg-stone-800/40 sm:flex lg:fixed"
	>
		<ul class="space-y-2 px-6 pb-6 pt-12">
			<p class="text-xs font-bold uppercase text-primary-foreground">Get started</p>
			{#each data.formatted['Get started'] as item}
				<li>
					<a href={item.url}>
						{item.name}
					</a>
				</li>
			{/each}
		</ul>

		<ul class="space-y-2 px-6 py-12">
			<p class="text-xs font-bold uppercase text-primary-foreground">Guides</p>
			{#each data.formatted.guide as item}
				<li>
					<a href={item.url}>
						{item.name}
					</a>
				</li>
			{/each}
		</ul>

		<ul class="space-y-2 px-6 py-6">
			<p class="text-xs font-bold uppercase text-primary-foreground">reference</p>
			{#each data.formatted.SDK as item}
				<li>
					<a href={item.url}>
						{item.name}
					</a>
				</li>
			{/each}
		</ul>
	</aside>

	<div class="pb-12 pt-24 sm:px-12 lg:ml-[14rem]">
		<slot />
	</div>
</section>
