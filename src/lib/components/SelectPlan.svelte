<script lang="ts">
	import * as Select from '$lib/components/ui/select';
	import Receipt from 'lucide-svelte/icons/receipt';
</script>

<Select.Root>
	<Select.Trigger class="mt-1.5 h-[45px] w-[180px]" aria-label="Select a plan">
		<Select.Input name="plan" />
		<Receipt class="text-white/80" size={14} />
		<Select.Value placeholder="Select a plan" class="text-md mr-4" />
	</Select.Trigger>
	<Select.Content class="bg-background">
		<Select.Item value="Trial">Free trial</Select.Item>
		<Select.Item value="Tier 1">Tier 1</Select.Item>
		<Select.Item value="Tier 2">Tier 2</Select.Item>
	</Select.Content>
</Select.Root>
