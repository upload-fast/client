<script>
	import Sidebar from './blocks/Sidebar.svelte';
</script>

<main class="flex min-h-screen w-full flex-col bg-muted/40 p-0">
	<Sidebar />

	<section class="ml-28 py-6">
		<slot />
	</section>
</main>
