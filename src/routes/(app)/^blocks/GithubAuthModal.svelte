<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';
	export let openIt: boolean = true;
	import Github from 'lucide-svelte/icons/github';
	let url: any = '/login/github';

	// If user closes the modal go back to the home screen.
	async function handleClose(state: boolean) {
		if (!state) {
			goto('/');
		}
	}

	import { signIn } from '@auth/sveltekit/client';
</script>

<Dialog.Root
	bind:open={openIt}
	closeOnEscape={false}
	closeOnOutsideClick={false}
	onOpenChange={handleClose}
>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title class="mb-0.5 text-2xl">Jump right in</Dialog.Title>
			<Dialog.Description class="ml-0.5">
				It's time to ship file uploads like the sentient developer you are.
			</Dialog.Description>
		</Dialog.Header>
		<Button
			type="button"
			size="lg"
			class="text-md mx-auto mt-4 w-[70%] gap-1.5 bg-muted text-white hover:bg-muted/80"
			on:click={() => signIn()}
		>
			Proceed
		</Button>
	</Dialog.Content>
</Dialog.Root>
