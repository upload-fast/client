<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { openLemonSqueezyUrl, respondToCheckoutEvent } from '$lib/lemon';
	import { Circle } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import type { UserType } from '../../../app';

	export let visible: boolean;
	export let name: UserType['name'];
	export let email: UserType['email'];
	export let userId: UserType['_id'];
	let loading: boolean;

	function purchasePlan() {
		loading = true;
		const checkoutUrl = `https://upload-fast.lemonsqueezy.com/buy/e1d1f41f-0335-47a1-95ec-26fb5801906b
		?checkout[email]=${email}
		&checkout[name]=${name}
		&checkout[custom][userId]=${userId}
		`;
		openLemonSqueezyUrl(checkoutUrl);
		loading = false;
	}

	function handleCheckout(data: any) {
		location.reload()
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
		<slot>Activate all API keys</slot>
	</Button>
{/if}
