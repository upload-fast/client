<script lang="ts">
	import { createTable, Subscribe, Render, createRender } from 'svelte-headless-table';
	import type { Ufile } from './types';
	import { createWritableFilesData } from './store';
	import * as Table from '$lib/components/ui/table';
	import TableActions from './table-actions.svelte';
	import { Toaster } from 'svelte-sonner';

	export let filesFromServer: Ufile[];

	const data = createWritableFilesData(filesFromServer);

	const table = createTable(data);

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
			header: 'Added on',
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
	const { headerRows, rows, tableAttrs, tableBodyAttrs } = table.createViewModel(columns);
</script>

<div class="max-w-4xl rounded-lg border-2 bg-muted px-3 pb-2.5 pt-4">
	<Table.Root {...$tableAttrs} class=" w-full text-lg">
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
			{#each $rows as row (row.id)}
				<Subscribe rowAttrs={row.attrs()} let:rowAttrs>
					<Table.Row {...rowAttrs}>
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
		</Table.Body>
	</Table.Root>
</div>
<Toaster richColors position="top-right" duration={1200} />
