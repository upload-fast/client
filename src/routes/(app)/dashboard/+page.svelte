<script lang="ts">
	//
	import GithubAuthModal from '../^blocks/GithubAuthModal.svelte';
	import type { ActionData, PageData } from './$types';
	import { Button } from '$lib/components/ui/button';
	import { signOut } from '@auth/sveltekit/client';
	import CreateProject from '../^blocks/CreateProject.svelte';
	import { Toaster, toast } from 'svelte-sonner';
	import CreateApiKey from '../^blocks/CreateAPIKey.svelte';

	export let data: PageData;

	export let form: ActionData;

	$: form?.error === true ? toast.error(form.payload.slice(0, 80) ?? 'An error occured') : null;

	$: form?.data.success ? toast(form.data.payload) : null;
</script>

{#if Boolean(data?.user?.plan)}
	<p>Welcome back {data.user?.name}</p>
	<CreateApiKey />
{:else}
	<CreateProject />
{/if}

<GithubAuthModal openIt={!Boolean(data.session)} />
<Toaster richColors />
