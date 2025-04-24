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
	import * as Table from '$lib/components/ui/table';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Toaster } from 'svelte-sonner';
	import Ellipsis from 'lucide-svelte/icons/ellipsis';
	import VerificationBlock from '../../^blocks/VerificationBlock.svelte';

	export let data: PageData;
	export let form: ActionData;

	// Check if user's email is verified
	$: isEmailVerified = data.user?.isEmailVerified !== false;

	let modalVisible = false;
	let newApiKey = '';

	async function deleteKeyAction(key: string) {
		try {
			const response = await fetch('/api/deleteKey', {
				method: 'POST',
				body: JSON.stringify({ key }),
				headers: { 'Content-Type': 'application/json' }
			});

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const data = await response.json();
			return data;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	function deleteKey(key: string) {
		toast.promise(deleteKeyAction(key), {
			loading: 'Deleting...',
			success: (data) => {
				invalidate('app:keys');
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

	$: {
		form?.error === true ? toast.error(form.payload) : null;
		form?.error === false ? displayPrompt(form.payload) : null;
	}
</script>

{#if isEmailVerified}
	<div class="mt-8 flex flex-row justify-between">
		<div>
			<h2 class="mb-2 text-xl font-semibold">API keys</h2>
			{#if data.keys.length}
				<p>{!data.user?.plan.paid ? 'Activate your keys to start uploading files.' : ''}</p>
			{:else}
				<p>Manage your API keys.</p>
			{/if}
		</div>

		<div class="mt-2 flex max-w-md flex-row items-center gap-4">
			<ActivateApIkey
				visible={data.keys.length && !data.user?.plan.paid}
				name={data.user.name}
				email={data.user.email}
				userId={data.user._id}
			/>
			<CreateApiKey>Create new API key</CreateApiKey>
		</div>
	</div>

	<div class="my-8">
		<Table.Root class="bg-primary/20 border-border/40 w-full !rounded-lg border !p-5">
			<Table.Header>
				<Table.Row class="hover:bg-transparent">
					<Table.Head>Key</Table.Head>
					<Table.Head>Status</Table.Head>
					<Table.Head>Created on</Table.Head>
					<Table.Head class="text-right">Actions</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#if data.keys.length}
					{#each data.keys as key}
						<Table.Row class="hover:bg-muted/50">
							<Table.Cell class="truncate font-mono">{replaceCharacters(key.value)}</Table.Cell>
							<Table.Cell>
								<span
									class={cn(
										'rounded-xl px-2 py-1 text-sm',
										key.active ? 'bg-emerald-500/30 text-green-200' : 'bg-red-500/30 text-red-300'
									)}
								>
									{key.active ? 'active' : 'invalid'}
								</span>
							</Table.Cell>
							<Table.Cell>
								{new Date(key.createdAt).toLocaleDateString('en-US', {
									year: 'numeric',
									month: 'short',
									day: 'numeric'
								})}
							</Table.Cell>
							<Table.Cell class="text-right">
								<DropdownMenu.Root>
									<DropdownMenu.Trigger asChild let:builder>
										<Button variant="ghost" builders={[builder]} size="sm"><Ellipsis /></Button>
									</DropdownMenu.Trigger>
									<DropdownMenu.Content>
										<DropdownMenu.Item class="text-red-400" on:click={() => deleteKey(key.value)}>
											<Trash2 class="mr-2 h-4 w-4" />
											Delete Key
										</DropdownMenu.Item>
									</DropdownMenu.Content>
								</DropdownMenu.Root>
							</Table.Cell>
						</Table.Row>
					{/each}
				{:else}
					<Table.Row>
						<Table.Cell colspan={4} class="text-center">No API keys found</Table.Cell>
					</Table.Row>
				{/if}
			</Table.Body>
		</Table.Root>
	</div>
{:else}
	<VerificationBlock action="manage API keys" />
{/if}

<MiscModal title="" visible={modalVisible} handleClose={() => (modalVisible = false)}>
	<div slot="content" class="flex flex-col items-center">
		<p class="mb-4 text-center text-xl font-bold">Your API key is</p>
		<div
			class="flex h-fit w-72 flex-row items-center justify-between rounded-sm bg-gray-800 px-3 py-2.5"
		>
			<p class="text-lg">{newApiKey}</p>
			<button class="active:scale-90" on:click={() => copyApiKey(newApiKey)}>
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
		<Button on:click={() => downloadKeyAsTxt()}
			>Download as .txt <Download size={12} class="ml-2" /></Button
		>
	</div>
</MiscModal>

<Toaster richColors position="top-right" />