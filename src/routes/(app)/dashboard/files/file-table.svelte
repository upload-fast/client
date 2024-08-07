<script lang="ts">
	import { createTable, Subscribe, Render, createRender } from 'svelte-headless-table';
	import { addPagination } from 'svelte-headless-table/plugins';
	import type { Ufile } from './types';
	import { createWritableFilesData } from './store';
	import * as Table from '$lib/components/ui/table';
	import TableActions from './table-actions.svelte';
	import { Toaster } from 'svelte-sonner';
	import { Button } from '$lib/components/ui/button';

	export let filesFromServer: Ufile[];

	const data = createWritableFilesData(filesFromServer);

	const table = createTable(data, {
		page: addPagination({
			initialPageIndex: 0,
			initialPageSize: 10
		})
	});

	const columns = table.createColumns([
		table.column({
			header: 'Name',
			accessor: 'file_name'
		}),
		table.column({
			header: 'Type',
			accessor: 'file_type'
		}),
		table.column({
			header: 'Size (KB)',
			accessor: 'file_size'
		}),
		table.column({
			header: 'Uploaded on',
			accessor: 'createdAt',
			cell: ({ value }) => {
				const date = new Date(value);
				const month = date.toLocaleString('en-US', { month: 'short' });
				const day = date.getDate();
				const year = date.getFullYear();
				const time = date.toLocaleTimeString('en-US', {
					hour12: true,
					second: undefined,
					minute: 'numeric',
					hour: 'numeric'
				});
				return `${month} ${day} ${year} at ${time}`;
			}
		}),
		table.column({
			accessor: ({ url }) => url,
			header: '',
			cell: ({ value }) => {
				return createRender(TableActions, { id: value });
			}
		})
	]);
	const { headerRows, rows, tableAttrs, tableBodyAttrs, pluginStates, pageRows } =
		table.createViewModel(columns);
	const { hasNextPage, hasPreviousPage, pageIndex } = pluginStates.page;
</script>

<div class="bg-primary/20 rounded-sm border px-3 pb-2.5 pt-4">
	<Table.Root {...$tableAttrs} class=" text-md w-full">
		<Table.Header>
			{#each $headerRows as headerRow (headerRow.id)}
				<Subscribe rowAttrs={headerRow.attrs()} let:rowAttrs>
					<tr {...rowAttrs}>
						{#each headerRow.cells as cell (cell.id)}
							<Subscribe attrs={cell.attrs()} let:attrs>
								<th {...attrs} class="px-4 pb-1.5 text-left">
									<Render of={cell.render()} />
								</th>
							</Subscribe>
						{/each}
					</tr>
				</Subscribe>
			{/each}
		</Table.Header>
		<Table.Body {...$tableBodyAttrs}>
			{#if $pageRows.length}
				{#each $pageRows as row (row.id)}
					<Subscribe rowAttrs={row.attrs()} let:rowAttrs>
						<Table.Row {...rowAttrs} class="hover:bg-inherit">
							{#each row.cells as cell (cell.id)}
								<Subscribe attrs={cell.attrs()} let:attrs>
									<Table.Cell {...attrs} class="pt-4">
										<Render of={cell.render()} />
									</Table.Cell>
								</Subscribe>
							{/each}
						</Table.Row>
					</Subscribe>
				{/each}
			{:else}
				<div class="mx-4 my-8 w-full text-lg font-semibold text-green-100">
					No files uploaded yet.
				</div>
			{/if}
		</Table.Body>
	</Table.Root>
</div>

<div class="flex items-center justify-end space-x-4 py-4">
	<Button
		variant="outline"
		size="default"
		on:click={() => ($pageIndex = $pageIndex - 1)}
		disabled={!$hasPreviousPage}>Previous page</Button
	>
	<Button
		variant="outline"
		size="default"
		disabled={!$hasNextPage}
		on:click={() => ($pageIndex = $pageIndex + 1)}>Next page</Button
	>
</div>
<Toaster richColors position="top-right" duration={1200} />
