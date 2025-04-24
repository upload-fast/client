<script lang="ts">
	import Mail from 'lucide-svelte/icons/mail';
	import { Button } from '$lib/components/ui/button';
	import Shield from 'lucide-svelte/icons/shield-alert';
	
	export let action: string = 'perform this action';
</script>

<div class="flex h-full min-h-[300px] w-full flex-col items-center justify-center rounded-lg border border-amber-500/30 bg-amber-950/20 p-6">
	<div class="flex h-12 w-12 items-center justify-center rounded-full bg-amber-900/50 text-amber-300">
		<Shield class="h-6 w-6" />
	</div>
	<h3 class="mt-4 text-xl font-medium text-amber-200">Verification Required</h3>
	<p class="mt-2 max-w-md text-center text-amber-100/80">
		You need to verify your email address to {action}.
	</p>
	<p class="mt-1 max-w-md text-center text-sm text-amber-100/60">
		Please check your inbox for the verification email and click the link to verify your account.
	</p>
	<Button 
		variant="outline" 
		size="sm" 
		class="mt-4 border-amber-400/30 hover:bg-amber-500/20 hover:text-amber-100"
		on:click={() => window.open('https://mail.google.com', '_blank')}
	>
		<Mail class="mr-2 h-4 w-4" />
		Open Email
	</Button>
</div>