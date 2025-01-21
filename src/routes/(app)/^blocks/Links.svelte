<script lang="ts">
	import Home from 'lucide-svelte/icons/home';
	import Folders from 'lucide-svelte/icons/folders';
	import Settings from 'lucide-svelte/icons/settings';
	import Key from 'lucide-svelte/icons/key-round';
	import Link from './Link.svelte';
	import { page } from '$app/stores';
	import { BookOpen, MessageCircleQuestion } from 'lucide-svelte';
	const appendRoute = (route: string) =>
		route === '/' ? route.replace('/', '/dashboard') : route.replace('/', '/dashboard/');

	$: isActive = (route: string) => appendRoute(route) === $page.url.pathname;

	const links = [
		{ to: '/', Icon: Home, title: 'Dashboard' },
		{ to: '/files', Icon: Folders, title: 'Files' },
		{ to: '/keys', Icon: Key, title: 'Keys' },
		{ to: '/settings', Icon: Settings, title: 'Settings' },
		{ to: '/docs', Icon: BookOpen, title: 'Docs' },
		{ to: 'mailto://iyimi@proton.me', Icon: MessageCircleQuestion, title: 'Feedback' }
	];
</script>

{#each links as link}
	<Link
		title={link.title}
		to={link.to.includes('docs') || link.to.includes('mailto')
			? `${link.to}`
			: appendRoute(link.to)}
		Icon={link.Icon}
		isActive={isActive(link.to)}
		className="w-full"
	/>
{/each}
