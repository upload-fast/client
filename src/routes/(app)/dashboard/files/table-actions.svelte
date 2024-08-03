<script lang="ts">
	import Ellipsis from 'lucide-svelte/icons/ellipsis';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Button } from '$lib/components/ui/button';
	import Clipboard from 'lucide-svelte/icons/clipboard-check';
	import { toast } from 'svelte-sonner';
	import { ExternalLink, Trash } from 'lucide-svelte';

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
	<DropdownMenu.Content class="bg-black/40 p-4 backdrop-blur-md">
		<DropdownMenu.Group class="flex flex-row flex-nowrap gap-4">
			<DropdownMenu.Item on:click={copyUrl} class="inline-flex gap-2 p-2">
				<Clipboard size={16} />
			</DropdownMenu.Item>
			<DropdownMenu.Item class="inline-flex p-2">
				<a href={id} target="_blank" class="text-sm">
					<ExternalLink size={16} />
				</a>
			</DropdownMenu.Item>

			<DropdownMenu.Item class="inline-flex p-2">
				<Trash size={16} class="text-red-400" />
			</DropdownMenu.Item>
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
