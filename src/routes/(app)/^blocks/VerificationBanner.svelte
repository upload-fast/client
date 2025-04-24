<script lang="ts">
	import { Button } from '$lib/components/ui/button';
  import {X,AlertCircle} from 'lucide-svelte'
	import Mail from 'lucide-svelte/icons/mail';
	import * as Card from '$lib/components/ui/card';
	
	export let userEmail: string;
	
	let dismissed = false;
</script>

{#if !dismissed}
	<div class="mb-6">
		<Card.Root class="border-amber-500/30 bg-amber-900/20">
			<Card.Content class="p-4">
				<div class="flex items-start justify-between">
					<div class="flex flex-1 items-start gap-4">
						<div class="mt-1 rounded-full bg-amber-500/20 p-2 text-amber-300">
							<AlertCircle class="h-5 w-5" />
						</div>
						<div class="flex-1">
							<h3 class="mb-1 text-lg font-medium text-amber-200">Email Verification Required</h3>
							<p class="text-sm text-amber-100/80">
								Your account is pending verification. Please check <strong>{userEmail}</strong> for a verification link.
							</p>
							<p class="mt-2 text-sm text-amber-100/80">
								You must verify your email to upload files and use all features of UploadFast.
							</p>
							<div class="mt-3 flex flex-wrap items-center gap-3">
								<Button 
									variant="outline" 
									size="sm" 
									class="border-amber-400/30 hover:bg-amber-500/20 hover:text-amber-100"
									on:click={() => window.open('https://mail.google.com', '_blank')}
								>
									<Mail class="mr-2 h-4 w-4" />
									Open Email
								</Button>
								<span class="text-sm text-amber-200/70">
									Can't find the email? Check your spam folder.
								</span>
							</div>
						</div>
					</div>
					<button on:click={() => (dismissed = true)} class="ml-4 text-amber-300 hover:text-amber-100">
						<X class="h-5 w-5" />
					</button>
				</div>
			</Card.Content>
		</Card.Root>
	</div>
{/if}