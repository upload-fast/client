<script lang="ts">
	//
	import GithubAuthModal from '../^blocks/GithubAuthModal.svelte';
	import CreateProject from '../^blocks/CreateProject.svelte';
	import { Toaster, toast } from 'svelte-sonner';
	import type { PageData, ActionData } from './$types';
	import HomeView from '../^blocks/HomeView.svelte';

	export let data: PageData;

	export let form: ActionData;

	$: form?.error === true ? toast.error(form.payload.slice(0, 80) ?? 'An error occured') : null;

	$: form?.data.success ? toast(form.data.payload) : null;
</script>

<GithubAuthModal openIt={!Boolean(data.session)} />

{#if Boolean(data?.user?.plan)}
	<p>Welcome back {data.user?.name}</p>
{:else}
	<CreateProject />
{/if}

<HomeView plan={data?.user?.plan} count={data.fileCount} />

<Toaster richColors />
