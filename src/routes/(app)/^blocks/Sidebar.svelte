<script>
	import Links from './Links.svelte';
	import { Button } from '$lib/components/ui/button';
</script>

<aside
	class="fixed inset-y-0 left-0 z-10 hidden w-64 flex-col border-r border-gray-800/50 bg-gray-950/90 backdrop-blur-sm sm:flex"
>
	<div class="flex h-16 items-center border-b border-gray-800/50 px-6">
		<a href="/dashboard" class="flex items-center gap-2 text-gray-100">
			<img src="/uploadfast.png" alt="UploadFast Logo" class="h-6 w-auto" />
			<span class="text-lg font-semibold">UploadFast</span>
		</a>
	</div>

	<div class="flex flex-1 flex-col justify-between py-6">
		<nav class="flex flex-col gap-2 px-3">
			<div class="mb-2 px-3 text-xs font-medium uppercase text-gray-400">Navigation</div>
			<Links />
		</nav>

		<div class="px-4">
			<div class="rounded-lg border border-gray-800/50 bg-gray-900/50 p-4">
				<h3 class="text-sm font-medium text-gray-200">Need help?</h3>
				<p class="mt-1 text-xs text-gray-400">Check our documentation or contact support.</p>
				<Button
					variant="outline"
					class="mt-3 w-full border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-gray-100"
					href="https://docs.uploadfast.dev"
					target="_blank"
				>
					View Docs
				</Button>
			</div>
		</div>
	</div>
</aside>
