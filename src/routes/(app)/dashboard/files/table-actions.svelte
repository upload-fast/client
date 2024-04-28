<script lang="ts">
	import Ellipsis from 'lucide-svelte/icons/ellipsis';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Button } from '$lib/components/ui/button';
	import Clipboard from 'lucide-svelte/icons/clipboard-check';
	import { toast } from 'svelte-sonner';
	import { DoorOpen } from 'lucide-svelte';

	export let id: string;

	function copyUrl() {
		navigator.clipboard.writeText(id);
		toast.success('Url copied!');
	}
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button variant="ghost" builders={[builder]} size="icon" class="relative h-8 w-8 p-0">
			<span class="sr-only">Open menu</span>
			<Ellipsis class="h-4 w-4" />
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="bg-primary/30 py-2.5 backdrop-blur-md">
		<DropdownMenu.Group class="flex flex-col gap-1">
			<DropdownMenu.Item on:click={copyUrl} class="inline-flex gap-2 px-4">
				Copy Image Url
				<Clipboard size={12} />
			</DropdownMenu.Item>
			<DropdownMenu.Separator class="my-1" />
			<DropdownMenu.Item class="inline-flex gap-2 px-4">
				<a href={id} target="_blank" class="text-sm"> Open in browser </a>
				<DoorOpen size={12} />
			</DropdownMenu.Item>
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
