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
		const itemId = 269034;
		const isDarkMode =
			window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
		const checkoutUrl =
			`https://upload-fast.lemonsqueezy.com/buy/4b700180-1998-4a87-8e46-bad3e75b1fe7?` +
			new URLSearchParams({
				embed: '1',
				dark: '1'
				// "checkout[email]": $user.email,
				// "checkout[name]": $user.displayName,
				// "checkout[custom][user_id]": $user.uid,
			}).toString();

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
	<!-- <form method="POST" action="?/activate"> -->
	<Button type="submit" id="activate" variant={'outline'} on:click={purchasePlan}>
		{#if loading}
			<Circle class="mx-3 animate-spin" size={12} />
		{/if}
		<slot>Activate API key</slot>
	</Button>
	<!-- </form> -->
{/if}
