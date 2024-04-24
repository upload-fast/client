<script lang="ts">
	export let imageUrl: string = '';
	export let username: string = '';
	import * as Avatar from '$lib/components/ui/avatar';
</script>

<div class="flex flex-row items-center justify-between pr-16">
	<p class="my-4 text-3xl font-bold">Uploadfast⚡</p>
	<Avatar.Root class="h-8 w-8 border-2 border-primary-foreground">
		<Avatar.Image src={imageUrl} alt={username} />
		<Avatar.Fallback>{username.slice(0, 2)}</Avatar.Fallback>
	</Avatar.Root>
</div>
