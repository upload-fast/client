<script lang="ts">
	import { goto } from '$app/navigation';
	import * as Dialog from '$lib/components/ui/dialog';
	export let openIt: boolean = true;
	import ModalClose from '$lib/modal-close.svelte';

	async function handleClose(state: boolean) {
		if (!state) {
			goto('/');
		}
	}
</script>

<Dialog.Root
	bind:open={openIt}
	closeOnEscape={false}
	closeOnOutsideClick={false}
	onOpenChange={handleClose}
>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title class="mb-0.5 text-2xl">Sign up</Dialog.Title>
			<Dialog.Description class="ml-0.5">
				It's time to ship file uploads like the sentient developer you are.
			</Dialog.Description>
		</Dialog.Header>
	</Dialog.Content>
</Dialog.Root>
