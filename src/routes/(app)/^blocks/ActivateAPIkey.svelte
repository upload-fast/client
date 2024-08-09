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
		const checkoutUrl = `https://upload-fast.lemonsqueezy.com/buy/fcdd9d62-446c-462c-b77c-7f9387daff6e
		?checkout[email]=${email}
		&checkout[name]=${name}
		&checkout[custom][userId]=${userId}
		`;
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
		<slot>Activate API keys</slot>
	</Button>
{/if}
