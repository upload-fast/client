<script lang="ts">
	import { enhance } from '$app/forms';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import * as Card from '$lib/components/ui/card';
	import { Toaster, toast } from 'svelte-sonner';
	import type { ActionData } from './$types';
	
	export let form: ActionData;
	
	let loading = false;
	let requestSent = false;
</script>

<svelte:head>
	<title>UploadFast | Reset Password</title>
</svelte:head>

<div class="flex min-h-screen w-full items-center justify-center bg-muted/40 p-4">
	<Card.Root class="w-full max-w-md">
		<Card.Header class="space-y-1">
			<div class="flex items-center justify-center pb-2">
				<img src="/uploadfast.webp" alt="logo" class="h-16 w-16 object-scale-down" />
			</div>
			<Card.Title class="text-center text-2xl">Reset Your Password</Card.Title>
			<Card.Description class="text-center">
				Enter your email address and we'll send you a link to reset your password
			</Card.Description>
		</Card.Header>
		<Card.Content>
			{#if requestSent}
				<div class="rounded-md bg-emerald-800/20 p-4 text-center">
					<p class="text-sm text-emerald-200">
						If your email is registered, you will receive a password reset link shortly. 
						Please check your inbox.
					</p>
				</div>
			{:else}
				<form method="POST" use:enhance={() => {
					loading = true;
					return async ({ result }) => {
						loading = false;
						if (result.type === 'failure') {
							toast.error(result.data?.message || 'Failed to send reset link');
						} else {
							requestSent = true;
						}
					};
				}} class="space-y-4">
					<div class="space-y-2">
						<Label for="email">Email</Label>
						<Input id="email" name="email" type="email" placeholder="your@email.com" required />
					</div>
					<Button type="submit" class="w-full" disabled={loading}>
						{loading ? 'Sending link...' : 'Send Reset Link'}
					</Button>
				</form>
			{/if}
		</Card.Content>
		<Card.Footer>
			<p class="text-center text-sm text-muted-foreground">
				Remember your password?
				<a href="/login" class="text-primary-foreground hover:underline">Login</a>
			</p>
		</Card.Footer>
	</Card.Root>
</div>

<Toaster richColors />