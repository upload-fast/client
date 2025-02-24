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
		'flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-slate-800',
		isActive ? 'bg-slate-800/80' : '',
		className
	)}
	href={to}
>
	<div class="flex items-center gap-4">
		<Icon class="h-5 w-5 text-slate-300" />
		<span class="text-slate-200">{title}</span>
	</div>
</a>
