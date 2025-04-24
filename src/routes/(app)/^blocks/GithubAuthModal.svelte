<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	
	export let openIt: boolean = true;
	import Github from 'lucide-svelte/icons/github';
	
	// Check if user is logged in
	$: user = $page.data.user;
	$: session = $page.data.session;
	$: isLoggedIn = !!user || !!session?.user;
	
	// Don't show modal if user is logged in
	$: if (isLoggedIn) openIt = false;
	
	// If user closes the modal go back to the home screen.
	async function handleClose(state: boolean) {
	  if (!state && !isLoggedIn) {
		goto('/');
	  }
	}
  
	function redirectToLogin() {
	  goto('/login');
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
	  <div class="flex flex-col gap-3">
		<Button
		  type="button"
		  size="lg"
		  class="text-md mx-auto w-[70%] gap-1.5 bg-muted text-white hover:bg-muted/80"
		  on:click={redirectToLogin}
		>
		  Continue with Email
		</Button>
		<Button
		  type="button"
		  size="lg"
		  class="text-md mx-auto w-[70%] gap-1.5 bg-slate-700 text-white hover:bg-slate-600"
		  on:click={() => signIn('github')}
		>
		  <Github class="mr-2 h-5 w-5" />
		  Continue with GitHub
		</Button>
	  </div>
	</Dialog.Content>
  </Dialog.Root>