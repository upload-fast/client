<script lang="ts">
	import GithubAuthModal from '../^blocks/GithubAuthModal.svelte';
	import CreateProject from '../^blocks/CreateProject.svelte';
	import { toast, Toaster } from 'svelte-sonner';
	import type { PageData, ActionData } from './$types';
	import HomeView from '../^blocks/HomeView.svelte';

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

{#if Boolean(data?.user?.plan)}
	<p>Welcome back {data.user.name}</p>
	<HomeView plan={data?.user?.plan || null} count={data.fileCount} apiKeys={data.apiKeys} />
{:else}
	<CreateProject />
{/if}

<Toaster richColors position="top-right" />
