<script lang="ts">
	import { enhance } from '$app/forms';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import * as Card from '$lib/components/ui/card';
	import { signIn } from '@auth/sveltekit/client';
	import Github from 'lucide-svelte/icons/github';
	import { Toaster, toast } from 'svelte-sonner';
	import { goto } from '$app/navigation';
	import type { ActionData } from './$types';
	
	export let form: ActionData;
	
	let loading = false;
	
	function handleGithubSignIn() {
		signIn('github');
	}
</script>

<svelte:head>
	<title>UploadFast | Register</title>
</svelte:head>

<div class="flex min-h-screen w-full items-center justify-center bg-muted/40 p-4">
	<Card.Root class="w-full max-w-md">
		<Card.Header class="space-y-1">
			<div class="flex items-center justify-center pb-2">
				<img src="/uploadfast.webp" alt="logo" class="h-16 w-16 object-scale-down" />
			</div>
			<Card.Title class="text-center text-2xl">Create an account</Card.Title>
			<Card.Description class="text-center">
				Enter your details below to create your account
			</Card.Description>
		</Card.Header>
		<Card.Content>
			<form method="POST" use:enhance={() => {
				loading = true;
				return async ({ result }) => {
					loading = false;
					if (result.type === 'failure') {
						toast.error(result.data?.message || 'Registration failed');
					} else if (result.type === 'success') {
						toast.success('Registration successful! Please check your email to verify your account.');
						goto('/login');
					}
				};
			}} class="space-y-4">
				<div class="space-y-2">
					<Label for="name">Full Name</Label>
					<Input id="name" name="name" type="text" placeholder="John Doe" required />
				</div>
				<div class="space-y-2">
					<Label for="email">Email</Label>
					<Input id="email" name="email" type="email" placeholder="your@email.com" required />
				</div>
				<div class="space-y-2">
					<Label for="password">Password</Label>
					<Input id="password" name="password" type="password" minlength="8" required />
					<p class="text-xs text-muted-foreground">Password must be at least 8 characters long</p>
				</div>
				<Button type="submit" class="w-full" disabled={loading}>
					{loading ? 'Creating account...' : 'Create account'}
				</Button>
			</form>
			<div class="relative my-6">
				<div class="absolute inset-0 flex items-center">
					<div class="w-full border-t border-gray-600"></div>
				</div>
				<div class="relative flex justify-center text-xs uppercase">
					<span class="bg-background px-2 text-muted-foreground">Or continue with</span>
				</div>
			</div>
			<Button variant="outline" class="w-full" on:click={handleGithubSignIn}>
				<Github class="mr-2 h-4 w-4" />
				GitHub
			</Button>
		</Card.Content>
		<Card.Footer>
			<p class="text-center text-sm text-muted-foreground">
				Already have an account?
				<a href="/login" class="text-primary-foreground hover:underline">Login</a>
			</p>
		</Card.Footer>
	</Card.Root>
</div>

<Toaster richColors />