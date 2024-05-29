<script lang="ts">
	//
	import GithubAuthModal from '../^blocks/GithubAuthModal.svelte';
	import CreateProject from '../^blocks/CreateProject.svelte';
	import { Toaster, toast } from 'svelte-sonner';
	import type { PageData, ActionData } from './$types';
	import HomeView from '../^blocks/HomeView.svelte';
	import { page } from '$app/stores';
	import { replaceCharacters } from '$lib/utils';

	export let data: PageData;

	export let form: ActionData;

	$: {
		form?.error === true ? toast.error(form.payload) : null;
	}
</script>

<svelte:head>
	<title>UploadFast Dashboard - Ship file uploads like a megachad.</title>
	<meta name="description" content="Manage file uploads from your javascript app" />
</svelte:head>

<GithubAuthModal openIt={!Boolean(data.session)} />

{#if Boolean(data?.user?.plan)}
	<p>Welcome back {data.user?.name}</p>
	<HomeView plan={data?.user?.plan || null} count={data.fileCount} apiKeys={data.apiKeys} />
{:else}
	<CreateProject />
{/if}

<Toaster richColors />
