<script lang="ts">
	import type { PageData } from './$types';
	import FileTable from './file-table.svelte';

	export let data: PageData;
</script>

<div class="my-12 ml-6">
	<h2 class="mb-3 ml-1.5 text-xl font-[550] uppercase text-primary-foreground">Your Uploads</h2>

	<FileTable filesFromServer={data.files} />
</div>
