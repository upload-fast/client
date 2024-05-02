<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Progress } from '$lib/components/ui/progress';
	import { getPercentOf, replaceCharacters } from '$lib/utils';
	import { calcFileSizeInKB } from '$lib/utils';
	import Copy from 'lucide-svelte/icons/copy';
	const text = 'uf_djfgjdjfjf203493949';

	export let plan: any;

	export let count: { total: number; thisWeek: number };

	const percentUsed = getPercentOf({ v1: plan.storageUsed, v2: plan.storageCap });
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

<div class="mt-8">
	<p class="ml-1 font-semibold">PRIVATE API KEY</p>
	<div
		class="mt-1.5 flex w-72 flex-row items-center justify-between rounded-sm bg-gray-800 px-3 py-2.5"
	>
		<p>{replaceCharacters(text)}</p>
		<button class="active:scale-90">
			<Copy class="text-white" size={14} />
		</button>
	</div>
</div>
