<script lang="ts">
	import Home from 'lucide-svelte/icons/home';
	import FileStack from 'lucide-svelte/icons/file-stack';
	import Settings from 'lucide-svelte/icons/settings';
	import Link from './Link.svelte';
	import { page } from '$app/stores';
	import FolderArchive from 'lucide-svelte/icons/folder-archive';
	const appendRoute = (route: string) =>
		route === '/' ? route.replace('/', '/dashboard') : route.replace('/', '/dashboard/');

	$: isActive = (route: string) => appendRoute(route) === $page.url.pathname;

	const links = [
		{ to: '/', Icon: Home, title: 'Dashboard' },
		{ to: '/files', Icon: FolderArchive, title: 'Files' },
		{ to: '/settings', Icon: Settings, title: 'Settings' }
	];
</script>

{#each links as link}
	<Link
		title={link.title}
		to={appendRoute(link.to)}
		Icon={link.Icon}
		isActive={isActive(link.to)}
	/>
{/each}
