<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import PlusCircle from 'lucide-svelte/icons/circle-plus';
	import type { PageData } from './$types';
	import FileTable from './file-table.svelte';
	import MiscModal from '$lib/components/MiscModal.svelte';
	import { toast } from 'svelte-sonner';
	import VerificationBlock from '../../^blocks/VerificationBlock.svelte';

	export let data: PageData;

	let fileInput: HTMLInputElement;
	let img: HTMLImageElement;

	$: showModal = false;
	let PickedFile: File | null = null;
	let loading = false;

	// Check if user's email is verified
	$: isEmailVerified = data.user?.isEmailVerified !== false;

	function handleClick() {
		fileInput.click();
	}

	function handleFileChange(event: Event) {
		//@ts-ignore
		const file = event?.target?.files[0];
		PickedFile = file;
		showModal = true;

		// Revoke object url to free resources.
		img.onload = () => {
			URL.revokeObjectURL(img.src);
		};
	}

	async function appendFileandUpload(event: Event) {
		if (!data.keys[0].value) {
			alert('API key not defined');
			return;
		}
		const formData = new FormData();
		formData.append('file', PickedFile!);

		const request = new Request('/dashboard/files/upload', {
			method: 'POST',
			body: formData,

			headers: {
				'api-key': data.keys[0].value!
			}
		});

		try {
			loading = true;
			const response = await fetch(request);

			if (response.ok) {
				toast.success('Uploaded successfully!');
				showModal = false;
				localStorage.removeItem('x-api-key');
				location.reload();
			} else {
				loading = false;
				toast.error('Upload failed, try again');
			}
		} catch {
			toast.error('Upload failed.');
		} finally {
			loading = false;
		}
	}
</script>

<div class="mt-6">
	{#if isEmailVerified}
		<div class="my-4 flex flex-row items-center justify-between">
			<h2 class="ml-1.5 text-xl font-[550] capitalize text-primary-foreground">
				{data.user.name}'s uploads
			</h2>

			<Button
				class="align-center text-md order-2 inline-flex gap-3 bg-emerald-800 text-emerald-100 duration-150 active:scale-95"
				on:click={handleClick}
			>
				Upload new file <PlusCircle class="text-primary-foreground" size={14} />
			</Button>

			<!--Bind the file input to a variable so we can imperatively click it-->
			<input
				type="file"
				id="file"
				name="file"
				required
				class="order-1"
				hidden
				bind:this={fileInput}
				on:change={handleFileChange}
			/>
		</div>

		<FileTable filesFromServer={data.files} />
	{:else}
		<VerificationBlock action="upload and manage files" />
	{/if}
</div>

<MiscModal visible={showModal}>
	<div slot="trigger" />
	<div slot="title">Selected File</div>
	<div slot="content">
		{#if PickedFile}
			<p>Name: {PickedFile.name}</p>
			<p>Type: {PickedFile.type}</p>
			<p>Size: {Math.floor(PickedFile.size / 1024)} KB</p>
			{#if PickedFile.type.includes('image/')}
				<img
					src={URL.createObjectURL(PickedFile)}
					alt="File preview"
					class="mx-auto my-3 h-36 w-36 object-contain"
					bind:this={img}
				/>
			{/if}
		{/if}

		<Button
			class="mx-auto mt-4 w-full"
			disabled={loading}
			on:click={async (event) => await appendFileandUpload(event)}
			>Upload{loading ? 'ing...' : ''}</Button
		>
	</div>
</MiscModal>