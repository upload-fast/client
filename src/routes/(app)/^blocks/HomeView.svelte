<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Progress } from '$lib/components/ui/progress';
	import { cn, getPercentOf, replaceCharacters } from '$lib/utils';
	import { calcFileSizeInKB } from '$lib/utils';
	import Copy from 'lucide-svelte/icons/copy';
	import Link from './Link.svelte';
	import { Plus, Trash2 } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import CreateApiKey from './CreateApiKey.svelte';
	import ActivateApIkey from './ActivateAPIkey.svelte';

	export let apiKeys: any;

	export let plan: any;

	export let count: { total: number; thisWeek: number };

	const percentUsed = getPercentOf({ v1: plan.storageUsed, v2: plan.storageCap });

	async function copyApiKey(value: string) {
		await navigator.clipboard.writeText(value);
		alert('Copied API key. Keep it safe.');
	}
</script>

<section class="-ml-1 mt-4 grid w-full grid-cols-4 gap-4">
	<Card.Root class="max-w-sm">
		<Card.Header class="pb-2">
			<Card.Description>Your Plan</Card.Description>
			<Card.Title class="text-3xl">{plan.name}</Card.Title>
		</Card.Header>
		<Card.Content>
			<div class="text-xs text-muted-foreground">Plan Type - {plan.plan_type}</div>
		</Card.Content>
		<Card.Footer class="text-xs text-muted-foreground"
			>Upgrade to access more storage space and features.</Card.Footer
		>
	</Card.Root>
	<Card.Root class="max-w-sm">
		<Card.Header class="pb-2">
			<Card.Description>File Storage Level</Card.Description>
			<Card.Title class="text-4xl"
				>{calcFileSizeInKB(plan.storageUsed)} / {plan.storageCap / 1024} MB</Card.Title
			>
		</Card.Header>
		<Card.Content>
			<div class="text-xs text-muted-foreground">+{percentUsed}% of total</div>
		</Card.Content>
		<Card.Footer>
			<Progress value={percentUsed} aria-label="25% increase" />
		</Card.Footer>
	</Card.Root>

	<Card.Root class="max-w-sm">
		<Card.Header class="pb-2">
			<Card.Description>Files Stored</Card.Description>
			<Card.Title class="text-4xl">{count.total}</Card.Title>
		</Card.Header>
		<Card.Content>
			<div class="text-xs text-muted-foreground">
				{count.thisWeek} files uploaded in the last week
			</div>
		</Card.Content>
		<Card.Footer>
			<Progress value={100} aria-label="25% increase" />
		</Card.Footer>
	</Card.Root>
</section>

<!-- Extract to component later -->
<div class="mt-12 w-full">
	<p class=" ml-1 font-semibold underline">API KEYS</p>
	<p class="ml-0.5 mt-1 text-sm text-muted-foreground">Keep your API keys private.</p>

	<div class="my-3 mt-4 flex flex-col gap-4">
		{#each apiKeys as key}
			<div class="flex flex-row items-center gap-4">
				<div
					class="flex w-64 flex-row items-center justify-between rounded-sm bg-gray-800 px-3 py-2.5"
				>
					<p>{replaceCharacters(key.value)}</p>
					<button class="active:scale-90" on:click={() => copyApiKey(key.value)}>
						<Copy class="text-white" size={14} />
					</button>
				</div>
				<!-- 
				<span
					class="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-sm bg-red-500/30"
				>
					<Trash2 size={14} class="text-red-300" />
				</span> -->

				<span
					class={cn(
						'rounded-xl px-2 py-1 text-sm ',
						key.active ? 'bg-emerald-500/30 text-green-200' : 'bg-red-500/30 text-red-300'
					)}>{key.active ? 'active' : 'inactive'}</span
				>
			</div>
		{/each}

		<div class="mt-3 flex max-w-md flex-row items-center gap-4">
			<ActivateApIkey visible={apiKeys.length && !plan.paid} />
			<CreateApiKey>Create new API key</CreateApiKey>
		</div>
	</div>
</div>
