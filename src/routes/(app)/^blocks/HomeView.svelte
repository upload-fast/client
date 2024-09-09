<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Progress } from '$lib/components/ui/progress';
	import { cn, generateStorageCapString, getPercentOf, replaceCharacters } from '$lib/utils';
	import Copy from 'lucide-svelte/icons/copy';
	import type { UserType } from '../../../app';
	import Button from '$lib/components/ui/button/button.svelte';
	import ExternalLinkIcon from 'lucide-svelte/icons/external-link';

	export let apiKeys: any;

	export let plan: UserType['plan'];

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
			>{plan.plan_type !== 'Trial'
				? 'May the f-(ile) be with you.'
				: 'Upgrade to access more storage space and features.'}</Card.Footer
		>
	</Card.Root>
	<Card.Root class="max-w-sm">
		<Card.Header class="pb-2">
			<Card.Description>File Storage Level</Card.Description>
			<Card.Title class="text-4xl"
				>{generateStorageCapString({
					storageCap: plan.storageCap,
					storageUsed: plan.storageUsed
				})}<small class="font-base ml-2 text-xs text-green-100/80">max</small></Card.Title
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
			<Card.Title class="text-4xl">
				{count.total} / {plan.uploadCap}
				<small class="ml-0.5 text-xs font-thin text-green-100/80">max</small>
			</Card.Title>
		</Card.Header>
		<Card.Content>
			<div class="text-xs text-muted-foreground">
				{count.thisWeek} files uploaded in the last week
			</div>
		</Card.Content>
		<Card.Footer>
			<Progress value={(count.total / plan.uploadCap) * 100} aria-label="25% increase" />
		</Card.Footer>
	</Card.Root>
</section>

<!-- Extract to component later -->
<div class="mt-12 w-full">
	<p class="mb-2 font-semibold underline">API KEYS</p>

	{#if !apiKeys.length}
		<p>When you create API keys, a preview will be shown here.</p>

		<p>
			Find out more on UploadFast API keys <a
				href="/docs/API"
				target="_blank"
				class="text-green-200">here</a
			>
		</p>
	{/if}

	<div class="my-3 mt-4 flex flex-col gap-2">
		<Button href="/dashboard/keys" class="mb-4 max-w-fit rounded-sm bg-[#E6F6EB] text-[#193B2D]"
			>Manage api keys <ExternalLinkIcon size={14} class="ml-2" /></Button
		>

	</div>
</div>
