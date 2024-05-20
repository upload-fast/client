<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import PlusCircle from 'lucide-svelte/icons/circle-plus';
	import type { PageData } from './$types';
	import FileTable from './file-table.svelte';
	import MiscModal from '$lib/components/MiscModal.svelte';
	import type { EventHandler } from 'svelte/elements';

	export let data: PageData;

	let fileInput: HTMLInputElement;

	let showModal = false;
	let PickedFile: File | null = null;

	function handleClick() {
		fileInput.click();
	}

	function handleFileChange(event: Event) {
		//@ts-ignore
		const file = event?.target?.files[0];
		PickedFile = file;
		showModal = true;
	}
</script>

<div class="mt-6 max-w-[90%]">
	<div class="my-4 flex flex-row items-center justify-between">
		<h2 class="ml-1.5 text-xl font-[550] text-primary-foreground">Your Uploads</h2>

		<Button
			class="align-center text-md order-2 inline-flex gap-3 active:scale-90"
			on:click={handleClick}
		>
			Add new file <PlusCircle class="text-primary-foreground" size={14} />
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
</div>

<MiscModal visible={showModal}>
	<div slot="trigger" />
	<div slot="title">Selected File</div>
	<div slot="content">
		{#if PickedFile}
			<p>Name: {PickedFile.name}</p>
			<p>Type: {PickedFile.type}</p>
			<p>Size: {PickedFile.size} bytes</p>
			{#if PickedFile.type.includes('image/')}
				<img src={URL.createObjectURL(PickedFile)} alt="File preview" class="mx-auto h-36 w-36" />
			{/if}
		{/if}
	</div>

	<form>
		<Button class="mt-4">Upload file</Button>
	</form>
</MiscModal>
