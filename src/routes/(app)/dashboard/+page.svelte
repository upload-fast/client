<script lang="ts">
	//
	import GithubAuthModal from '../^blocks/GithubAuthModal.svelte';
	import type { ActionData, PageData } from './$types';
	import { Button } from '$lib/components/ui/button';
	import { signOut } from '@auth/sveltekit/client';
	import CreateProject from '../^blocks/CreateProject.svelte';
	import { Toaster, toast } from 'svelte-sonner';

	export let data: PageData;

	export let form: ActionData;

	$: form?.error === true ? toast.error(form.payload.slice(0, 80) ?? 'An error occured') : null;
</script>

<GithubAuthModal openIt={!Boolean(data.session)} />
<CreateProject />
<Toaster richColors />
