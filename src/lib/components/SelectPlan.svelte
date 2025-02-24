<script lang="ts">
	import * as Select from '$lib/components/ui/select';
	import Receipt from 'lucide-svelte/icons/receipt';

	export let preset: string;
	let obj: any;
	if (preset) {
		obj = { value: preset, label: preset };
	}
</script>

<Select.Root selected={obj}>
	<Select.Trigger class="mt-1.5 h-[45px] w-[180px]" aria-label="Select a plan">
		<Select.Input name="plan" />
		<Receipt class="text-white/80" size={14} />
		<Select.Value placeholder="Select a plan" class="text-md mr-4" />
	</Select.Trigger>
	<Select.Content class="bg-background">
		<Select.Item value="Trial" label="Trial">🚀 Quick Start</Select.Item>
		<Select.Item value="Tier 1" label="Tier 1">⭐ Starter</Select.Item>
		<Select.Item value="Tier 2" label="Tier 2">💎 Pro</Select.Item>
	</Select.Content>
</Select.Root>
