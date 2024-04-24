<script lang="ts">
	import Header from './^blocks/Header.svelte';
	import Sidebar from './^blocks/Sidebar.svelte';
	import type { PageData } from './dashboard/$types';
	export let data: PageData;
</script>

<main class="flex min-h-screen w-full flex-col bg-muted/40 p-0">
	<Sidebar />
	<section class="ml-28 py-6">
		<Header
			imageUrl={data.session?.user?.image ?? undefined}
			username={data.session?.user?.name ?? ''}
		/>
		<slot />
	</section>
</main>
