<script lang="ts">
	import Header from './^blocks/Header.svelte';
	import Sidebar from './^blocks/Sidebar.svelte';
	import type { PageData } from './dashboard/$types';
	export let data: PageData;
</script>

<main class="hidden min-h-screen w-full flex-col bg-muted/40 p-0 md:flex">
	<Sidebar />
	<section class="ml-28 py-6">
		<Header
			imageUrl={data.session?.user?.image ?? undefined}
			username={data.session?.user?.name ?? ''}
		/>
		<slot />
	</section>
</main>

<section class="flex min-h-screen flex-row items-center justify-center p-6 text-center md:hidden">
	<p class="text-balance w-[88%] text-xl font-semibold">
		Access this page on a larger screen to manage your files.
	</p>
</section>
