<script lang="ts">
	import Ellipsis from 'lucide-svelte/icons/ellipsis';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Button } from '$lib/components/ui/button';
	import Clipboard from 'lucide-svelte/icons/clipboard-check';
	import { toast } from 'svelte-sonner';

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
	<DropdownMenu.Content>
		<DropdownMenu.Group>
			<DropdownMenu.Item on:click={copyUrl} class="inline-flex gap-2 px-4">
				Copy Image Url
				<Clipboard size={12} />
			</DropdownMenu.Item>
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
