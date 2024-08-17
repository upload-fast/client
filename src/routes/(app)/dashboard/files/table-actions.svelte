<script lang="ts">
	import Ellipsis from 'lucide-svelte/icons/ellipsis';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Button } from '$lib/components/ui/button';
	import Clipboard from 'lucide-svelte/icons/clipboard-check';
	import { toast } from 'svelte-sonner';
	import Trash from 'lucide-svelte/icons/trash';
	import ExternalLink from 'lucide-svelte/icons/external-link';
	import Tooltipped from '$lib/components/Tooltipped.svelte';

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
	<DropdownMenu.Content class="bg-black/80 p-4 backdrop-blur-lg">
		<DropdownMenu.Group class="flex flex-row gap-6">
			<DropdownMenu.Item on:click={copyUrl} class="inline-flex">
				<Tooltipped content={'Copy file url to clipboard'}>
					<Clipboard size={16} />
				</Tooltipped>
			</DropdownMenu.Item>

			<a href={id} target="_blank" class="cursor-pointer text-sm">
				<Tooltipped content={'Open image in new tab'}>
					<DropdownMenu.Item class="inline-flex">
						<ExternalLink size={16} />
					</DropdownMenu.Item>
				</Tooltipped>
			</a>
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
