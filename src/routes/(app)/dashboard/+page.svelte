<script lang="ts">
	import GithubAuthModal from '../^blocks/GithubAuthModal.svelte';
	import CreateProject from '../^blocks/CreateProject.svelte';
	import { Toaster, toast } from 'svelte-sonner';
	import type { PageData, ActionData } from './$types';
	import HomeView from '../^blocks/HomeView.svelte';
	import { setUserContext, userContext } from '$lib/context';

	export let data: PageData;

	const userData = {
		name: data?.user?.name as string,
		email: data?.user?.email as string,
		_id: data?.user?._id as string
	};

	setUserContext({ ...userData, apiKeys: data?.apiKeys || [] });

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
	<p>Welcome back {$userContext?.name}</p>
	<HomeView
		plan={data?.user?.plan || null}
		count={data.fileCount}
		apiKeys={data.apiKeys}
		{userData}
	/>
{:else}
	<CreateProject />
{/if}

<Toaster richColors />
