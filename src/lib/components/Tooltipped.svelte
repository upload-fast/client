<script lang="ts">
	import * as Tooltip from '$lib/components/ui/tooltip';

	export let content: string;
</script>

<Tooltip.Root openDelay={400}>
	<Tooltip.Trigger>
		<slot />
	</Tooltip.Trigger>
	<Tooltip.Content class="w-48 px-4 py-4 text-center">
		<p>{content}</p>
	</Tooltip.Content>
</Tooltip.Root>
