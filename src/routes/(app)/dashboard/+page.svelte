<script lang="ts">
	import { toast, Toaster } from 'svelte-sonner';
	import CreateProject from '../^blocks/CreateProject.svelte';
	import GithubAuthModal from '../^blocks/GithubAuthModal.svelte';
	import HomeView from '../^blocks/HomeView.svelte';
	import type { ActionData, PageData } from './$types';

	export let data: PageData;

	export let form: ActionData;

	$: {
		form?.error === true ? toast.error(form.payload) : null;
	}
</script>

<svelte:head>
	<title>UploadFast Dashboard - Ship image uploads in half the time, with half the effort.</title>
	<meta name="description" content="Manage file uploads from your javascript app" />
</svelte:head>

<GithubAuthModal openIt={!Boolean(data.session)} />

{#if false}
	<p>Welcome back {data.user.name}</p>
	<HomeView plan={data?.user?.plan || null} count={data.fileCount} apiKeys={data.apiKeys} />
{:else}
	<CreateProject />
{/if}

<Toaster richColors position="bottom-right" />
