<script>
	import { goto } from '$app/navigation';
	async function handleClose() {
		goto('/');
	}

	import X from 'lucide-svelte/icons/x';
</script>

<button on:click={handleClose}>
	<X class="h-4 w-4" />
</button>
