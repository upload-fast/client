<script>
	import Links from './Links.svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Avatar from '$lib/components/ui/avatar';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { signOut } from '@auth/sveltekit/client';

	export let imageUrl = '';
	export let username = '';
</script>

<aside
	class="fixed inset-y-0 left-0 z-10 hidden w-64 flex-col border-r border-gray-800/50 bg-gray-950/90 backdrop-blur-sm sm:flex"
>
	<div class="flex h-16 items-center justify-between border-b border-gray-800/50 px-6">
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

		<div class="space-y-4 px-4">
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

			<div
				class="flex items-center justify-between rounded-lg border border-gray-800/50 bg-gray-900/50 p-4"
			>
				<div class="flex items-center gap-3">
					<Avatar.Root class="h-8 w-8 border-2 border-gray-700">
						<Avatar.Image src={imageUrl} alt={username} />
						<Avatar.Fallback>{username.slice(0, 2).toUpperCase()}</Avatar.Fallback>
					</Avatar.Root>
					<div class="flex flex-col">
						<span class="text-sm font-medium text-gray-200">{username}</span>
						<span class="text-xs text-gray-400">Account</span>
					</div>
				</div>

				<DropdownMenu.Root>
					<DropdownMenu.Trigger class="rounded-full p-1 hover:bg-gray-800">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="text-gray-400"
							><circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle
								cx="12"
								cy="19"
								r="1"
							/></svg
						>
					</DropdownMenu.Trigger>
					<DropdownMenu.Content align="end" class="w-44">
						<DropdownMenu.Label>My Account</DropdownMenu.Label>
						<DropdownMenu.Separator />
						<DropdownMenu.Item>My Plan</DropdownMenu.Item>
						<DropdownMenu.Item>Feedback</DropdownMenu.Item>
						<DropdownMenu.Separator />
						<DropdownMenu.Item class="my-1.5" on:click={() => signOut()}>Logout</DropdownMenu.Item>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</div>
		</div>
	</div>
</aside>
