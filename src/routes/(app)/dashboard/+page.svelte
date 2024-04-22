<script lang="ts">
	//
	import GithubAuthModal from '../^blocks/GithubAuthModal.svelte';
	import type { PageData } from './$types';
	import { Button } from '$lib/components/ui/button';
	import { signOut } from '@auth/sveltekit/client';

	export let data: PageData;
</script>

<p class="text-2xl font-bold">Uploadfast⚡</p>
<p>{data.session?.user?.name}</p>
<Button on:click={() => signOut({})}>Sign out</Button>

<GithubAuthModal openIt={!Boolean(data.session)} />
