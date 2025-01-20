<script lang="ts">
	export let to: string;
	export let Icon: any;
	export let title: string;
	export let isActive: boolean;
	export let className: string = '';
	import { cn } from '$lib/utils';
</script>

<a
	class={cn(
		'flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-muted',
		isActive ? 'bg-muted/80' : '',
		className
	)}
	href={to}
>
	<div class="flex items-center gap-4">
		<Icon class="h-4 w-4 pl-1" />
		<span class="opacity-0 transition-opacity duration-200 group-hover:opacity-100">{title}</span>
	</div>
</a>
