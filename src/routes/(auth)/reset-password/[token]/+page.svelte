<script lang="ts">
	import { enhance } from '$app/forms';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import * as Card from '$lib/components/ui/card';
	import { Toaster, toast } from 'svelte-sonner';
	import { goto } from '$app/navigation';
	import type { ActionData } from './$types';
	import { page } from '$app/stores';
	
	export let form: ActionData;
	
	let loading = false;
	let resetComplete = false;
	
	const token = $page.params.token;
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
			<Card.Title class="text-center text-2xl">Create New Password</Card.Title>
			<Card.Description class="text-center">
				Enter your new password below
			</Card.Description>
		</Card.Header>
		<Card.Content>
			{#if resetComplete}
				<div class="rounded-md bg-emerald-800/20 p-4 text-center">
					<p class="text-sm text-emerald-200">
						Your password has been successfully reset. You can now login with your new password.
					</p>
					<Button class="mt-4 w-full" on:click={() => goto('/login')}>
						Go to Login
					</Button>
				</div>
			{:else}
				<form method="POST" use:enhance={() => {
					loading = true;
					return async ({ result }) => {
						loading = false;
						if (result.type === 'failure') {
							toast.error(result.data?.message || 'Failed to reset password');
						} else if (result.type === 'success') {
							resetComplete = true;
						}
					};
				}} class="space-y-4">
					<input type="hidden" name="token" value={token} />
					<div class="space-y-2">
						<Label for="password">New Password</Label>
						<Input id="password" name="password" type="password" minlength="8" required />
						<p class="text-xs text-muted-foreground">Password must be at least 8 characters long</p>
					</div>
					<div class="space-y-2">
						<Label for="confirm-password">Confirm Password</Label>
						<Input id="confirm-password" name="confirmPassword" type="password" required />
					</div>
					<Button type="submit" class="w-full" disabled={loading}>
						{loading ? 'Resetting...' : 'Reset Password'}
					</Button>
				</form>
			{/if}
		</Card.Content>
	</Card.Root>
</div>

<Toaster richColors />