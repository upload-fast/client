<script lang="ts">
	import { enhance } from '$app/forms';
	import { Button } from '$lib/components/ui/button';
	import type { SubmitFunction } from '@sveltejs/kit';
	import Circle from 'lucide-svelte/icons/circle';

	let loading = false;

	const submitForm: SubmitFunction = (input) => {
		loading = true;
		return async ({ update }) => {
			loading = false;
			await update({ reset: false });
		};
	};
</script>

<form method="POST" action="?/createKey" use:enhance={submitForm}>
	<Button type="submit">
		{#if loading}
			<Circle class="mx-3 animate-spin" size={12} />
		{/if}Create API key</Button
	>
</form>
