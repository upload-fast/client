<script lang="ts">
	export let to: string;
	export let Icon: any;
	export let title: string;
	export let isActive: boolean;
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import { cn } from '$lib/utils';
</script>

<Tooltip.Root openDelay={60}>
	<Tooltip.Trigger asChild let:builder>
		<a
			href={to}
			class={cn(
				'flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted/80 hover:text-foreground md:h-10 md:w-10',
				isActive ? 'bg-muted' : ''
			)}
			use:builder.action
			{...builder}
		>
			<svelte:component this={Icon} class="h-5 w-5 text-white" />
			<span class="sr-only">{title}</span>
		</a>
	</Tooltip.Trigger>
	<Tooltip.Content side="right">{title}</Tooltip.Content>
</Tooltip.Root>
