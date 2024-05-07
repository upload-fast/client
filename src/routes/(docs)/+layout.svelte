<script>
	import '$lib/prism-shades-of-purple.css';
</script>

<!-- Header, SearchBar, -->
<section class="">
	<aside
		class="fixed inset-y-0 left-0 z-10 hidden w-44 flex-col border-r bg-background sm:flex"
	></aside>

	<div class="ml-[14rem] p-12">
		<slot />
	</div>
</section>
