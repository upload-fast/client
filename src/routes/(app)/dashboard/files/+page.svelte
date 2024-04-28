<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import PlusCircle from 'lucide-svelte/icons/circle-plus';
	import type { PageData } from './$types';
	import FileTable from './file-table.svelte';

	export let data: PageData;
</script>

<div class="my-12">
	<div class="my-4 flex max-w-[60rem] flex-row items-center justify-between">
		<h2 class="ml-1.5 text-xl font-[550] text-primary-foreground">Your Uploads</h2>
		<Button class="align-center text-md inline-flex gap-3 active:scale-90"
			>Add new file <PlusCircle class="text-primary-foreground" size={14} /></Button
		>
	</div>

	<FileTable filesFromServer={data.files} />
</div>
