<script lang="ts">
	export let imageUrl: string = '';
	export let username: string = '';
	import * as Avatar from '$lib/components/ui/avatar';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { goto } from '$app/navigation';
	import { AUTH_ENDPOINTS } from '$lib/config/api';
	
	async function handleLogout() {
		try {
			const response = await fetch(AUTH_ENDPOINTS.LOGOUT, {
				method: 'POST',

			});
			
			if (response.ok) {
				// Clear any local state if needed
				goto('/login');
			}
		} catch (error) {
			console.error('Logout failed:', error);
		}
	}
</script>

<div class="flex flex-row items-center justify-between pr-16">
	<p class="my-4 text-3xl font-bold">Uploadfast⚡</p>

	<DropdownMenu.Root>
		<DropdownMenu.Trigger>
			<Avatar.Root class="h-8 w-8 cursor-pointer border-2 border-primary-foreground">
				<Avatar.Image src={imageUrl} alt={username} />
				<Avatar.Fallback>{username.slice(0, 2).toUpperCase()}</Avatar.Fallback>
			</Avatar.Root>
		</DropdownMenu.Trigger>

		<DropdownMenu.Content align="end" class="w-44">
			<DropdownMenu.Label>My Account</DropdownMenu.Label>
			<DropdownMenu.Separator />
			<DropdownMenu.Item>My Plan</DropdownMenu.Item>
			<DropdownMenu.Item>Feedback</DropdownMenu.Item>
			<DropdownMenu.Separator />
			<DropdownMenu.Item class="my-1.5" on:click={handleLogout}>Logout</DropdownMenu.Item>
		</DropdownMenu.Content>
	</DropdownMenu.Root>
</div>