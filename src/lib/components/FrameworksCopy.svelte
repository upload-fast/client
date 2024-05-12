<script lang="ts">
	// @ts-nocheck
	const blocks = ['React', 'Svelte', 'Vue'];

	import { Tabs } from 'bits-ui';
	import { Button } from './ui/button';
	import Copy from 'lucide-svelte/icons/clipboard-copy';
	import CopyCodeInjector from './CopyCodeInjector.svelte';
	// @ts-ignore
	import React from './snippets/react.svx';
	import Vue from './snippets/vue.svx';
</script>

<div class="mb-12 max-h-[40rem] w-[38rem] rounded-lg bg-stone-800/50">
	<Tabs.Root>
		<Tabs.List
			class="rounded-9px shadow-mini-inset flex w-full flex-row gap-1 rounded-t-lg p-1 text-sm font-semibold leading-[0.01em] dark:border dark:border-neutral-600/30 dark:bg-background"
		>
			{#each blocks as block}
				<Tabs.Trigger
					value={block}
					class="h-8 w-1/4 rounded-[7px] bg-transparent py-2 data-[state=active]:border-b-2 data-[state=active]:bg-white dark:data-[state=active]:bg-orange-600"
				>
					{block}
				</Tabs.Trigger>
			{/each}
		</Tabs.List>

		<Tabs.Content value={'React'} class="max-h-[32rem] overflow-auto px-2">
			<CopyCodeInjector><React /></CopyCodeInjector>
		</Tabs.Content>

		<Tabs.Content value={'Svelte'} class="max-h-[32rem] overflow-auto px-2">
			<CopyCodeInjector><React /></CopyCodeInjector>
		</Tabs.Content>

		<Tabs.Content value={'Vue'} class="max-h-[32rem] overflow-auto px-2">
			<CopyCodeInjector><Vue /></CopyCodeInjector>
		</Tabs.Content>
	</Tabs.Root>
</div>
