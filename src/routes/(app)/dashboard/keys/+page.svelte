<script lang="ts">
	import { cn, copyApiKey, replaceCharacters } from '$lib/utils';
	import Copy from 'lucide-svelte/icons/copy';
	import Download from 'lucide-svelte/icons/download';
	import ActivateApIkey from '../../^blocks/ActivateAPIkey.svelte';
	import CreateApiKey from '../../^blocks/CreateApiKey.svelte';
	import type { ActionData, PageData } from './$types';
	import { toast } from 'svelte-sonner';
	import MiscModal from '$lib/components/MiscModal.svelte';
	import Trash2 from 'lucide-svelte/icons/trash-2';
	import { Button } from '$lib/components/ui/button';
	import { invalidate } from '$app/navigation';

	export let data: PageData;

	export let form: ActionData;

	let modalVisible = false;
	let newApiKey = '';

	async function deleteKeyAction(key: string) {
		console.log('Running');
		try {
			const response = await fetch('/api/deleteKey', {
				method: 'POST',
				body: JSON.stringify({
					key: key
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			});

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const data = await response.json();
			return data; // This will be the resolved value of the Promise
		} catch (error) {
			console.log(error);
			throw error; // This will reject the Promise
		}
	}

	function deleteKey(key: string) {
		toast.promise(deleteKeyAction(key), {
			loading: 'Deleting...',
			success: (data) => {
                invalidate('app:keys')
				return 'Key has been deleted successfully';
			},
			error: 'Error... :( Try again!'
		});
	}

	function displayPrompt(key: string) {
		toast.success('API key created successfully.');
		newApiKey = key;
		modalVisible = true;
	}

	function downloadKeyAsTxt() {
		const filename = `file_${Date.now()}.txt`;
		const blob = new Blob([newApiKey], { type: 'text/plain' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = filename;
		document.body.appendChild(a);
		a.click();
		URL.revokeObjectURL(url);
		document.body.removeChild(a);
	}

	function handleClose() {
		newApiKey = '';
		modalVisible = false;
	}

	$: {
		form?.error === true ? toast.error(form.payload) : null;
		//@ts-ignore
		form?.error === false ? displayPrompt(form.payload) : null;
	}
</script>

<div class="mt-8">
	<h2 class="mb-2 text-xl font-semibold">Your API keys.</h2>
	{#if data.keys.length}
		<p>{!data.user?.plan.paid ? 'Activate your keys to start uploading files.' : ''}</p>
	{:else}
		<p>Create an API key to get started</p>
	{/if}
</div>

<div class="my-8 flex flex-col gap-4">
	{#each data.keys as key}
		<div class="flex flex-row items-center gap-4">
			<div
				class="flex w-64 flex-row items-center justify-between rounded-sm bg-gray-800 px-3 py-2.5"
			>
				<p>{replaceCharacters(key.value).slice(0, 30)}</p>
			</div>
			<span
				class={cn(
					'rounded-xl px-2 py-1 text-sm ',
					key.active ? 'bg-emerald-500/30 text-green-200' : 'bg-red-500/30 text-red-300'
				)}>{key.active ? 'active' : 'inactive'}</span
			>

			<button
				class="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-sm bg-red-500/20 duration-150 active:scale-95"
				on:click={() => deleteKey(key.value)}
			>
				<Trash2 size={14} class="text-red-200" stroke={'8'} />
			</button>
		</div>
	{/each}
</div>

<div class="mt-2 flex max-w-md flex-row items-center gap-4">
	<ActivateApIkey
		visible={data.keys.length && !data.user?.plan.paid}
		name={data.user.name}
		email="data.user.email}"
		userId={data.user._id}
	/>

	<CreateApiKey>Create new API key</CreateApiKey>
</div>

<MiscModal title="" visible={modalVisible} {handleClose}>
	<div slot="content" class="flex flex-col items-center">
		<p class="mb-4 text-center text-xl font-bold">Your API key is</p>
		<div
			class="flex h-fit w-72 flex-row items-center justify-between rounded-sm bg-gray-800 px-3 py-2.5"
		>
			<p class="text-lg">{newApiKey}</p>

			<button class="active:scale-90" on:click={() => copyApiKey('')}>
				<Copy class="text-white" size={14} />
			</button>
		</div>

		<div
			class="text-balance my-6 flex flex-row rounded-md bg-red-900/90 px-2 py-4 text-center text-sm text-red-100"
		>
			<p>
				Caution: You will not be able to see your key in plain text again once this dialog is
				closed.
			</p>
		</div>

		<Button on:click={downloadKeyAsTxt}>Download as .txt <Download size={12} class="ml-2" /></Button
		>
	</div>
</MiscModal>
