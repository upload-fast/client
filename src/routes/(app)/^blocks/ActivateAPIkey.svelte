<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { getLemonSqueezy, openLemonSqueezyUrl, respondToCheckoutEvent } from '$lib/lemon';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { Circle } from 'lucide-svelte';
	import { onMount } from 'svelte';

	export let visible: boolean;

	let loading: boolean;

	function purchasePlan() {
		loading = true;
		const checkoutUrl = `https://upload-fast.lemonsqueezy.com/buy/d526382a-67e3-457b-8e36-ad3a8b56062c`;
		openLemonSqueezyUrl(checkoutUrl);
		loading = false;
	}

	function handleCheckout(data: any) {
		alert(JSON.stringify(data));
	}

	onMount(() => {
		respondToCheckoutEvent(handleCheckout);
	});
</script>

{#if visible}
	<Button type="submit" id="activate" variant={'outline'} on:click={purchasePlan}>
		{#if loading}
			<Circle class="mx-3 animate-spin" size={12} />
		{/if}
		<slot>Activate API key</slot>
	</Button>
{/if}
