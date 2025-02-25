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
		'flex items-center gap-3 rounded-lg px-3 py-2 transition-colors hover:bg-gray-800',
		isActive ? 'bg-gray-800/80' : '',
		className
	)}
	href={to}
>
	<div class="flex items-center gap-3">
		<Icon class="h-4 w-4 text-gray-400" />
		<span class="text-sm text-gray-300">{title}</span>
	</div>
</a>
