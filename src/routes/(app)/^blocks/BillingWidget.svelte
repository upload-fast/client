<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Checkbox } from '$lib/components/ui/chekbox';
	import * as Dialog from '$lib/components/ui/dialog';
	import { cn } from '$lib/utils';

	let checked = false;

	let plans = ['Free Trial', 'Tier 1', 'Tier 2'].map((item) => {
		return { name: item, selected: false };
	});

	function togglePlan(planName: string) {
		plans = plans.map((plan) => {
			if (plan.name === planName) {
				// Toggle logic
				plan['selected'] = plan['selected'] === true ? false : true;
			} else {
				plan['selected'] = false;
			}
			return plan;
		});
	}
</script>

<Dialog.Root>
	<Dialog.Trigger><Button variant="outline">Activate project</Button></Dialog.Trigger>
	<Dialog.Content class="h-fit w-[44rem]">
		<Dialog.Header>
			<Dialog.Title>Activate your API keys</Dialog.Title>
			<Dialog.Description>Select a plan below and start shipping.</Dialog.Description>
			<div class="!mt-6 flex flex-row flex-wrap gap-8">
				{#each plans as { selected, name }}
					<!-- svelte-ignore a11y-interactive-supports-focus -->
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div
						class={cn(
							'flex h-14 w-44 cursor-pointer flex-row justify-between rounded-lg border p-4',
							selected ? 'border-emerald-500' : ''
						)}
						on:click={() => togglePlan(name)}
						role="button"
						aria-pressed="false"
					>
						<p>{name}</p>
						<Checkbox bind:checked={selected} class="p-0.5" />
					</div>
				{/each}
			</div>
			<Button class="!mt-8">Proceed</Button>
		</Dialog.Header>
	</Dialog.Content>
</Dialog.Root>
