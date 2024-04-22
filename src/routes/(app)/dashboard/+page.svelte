<script lang="ts">
	import GithubAuthModal from '../^blocks/GithubAuthModal.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<p class="text-2xl font-bold">Uploadfast⚡</p>

<GithubAuthModal openIt={!Boolean(data.user)} />
