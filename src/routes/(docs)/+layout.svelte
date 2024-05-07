<script lang="ts">
	import '$lib/prism-shades-of-purple.css';
	import type { PageData } from './docs/$types';

	export let data: PageData;
</script>

<!-- Header, SearchBar, -->
<section>
	<aside
		class="fixed inset-y-0 left-0 z-10 hidden w-[13rem] flex-col border-r bg-stone-700/50 sm:flex"
	>
		<ul class="space-y-2 px-6 py-12">
			<p class="text-xs font-bold uppercase text-primary-foreground">Get started</p>
			{#each data.content as item}
				<li>
					<a href={item.url}>
						{item.name}
					</a>
				</li>
			{/each}
		</ul>
	</aside>

	<div class="ml-[14rem] p-12">
		<slot />
	</div>
</section>
