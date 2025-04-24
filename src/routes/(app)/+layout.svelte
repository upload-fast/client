<script lang="ts">
	import Header from './^blocks/Header.svelte';
	import Sidebar from './^blocks/Sidebar.svelte';
	import type { PageData } from './dashboard/$types';
	export let data: PageData;
	import OpenGraph from '$lib/components/OpenGraph.svelte';
	import Twitter from '$lib/components/Twitter.svelte';
	import { Toaster } from 'svelte-sonner';
	import VerificationBanner from './^blocks/VerificationBanner.svelte';
	import GithubAuthModal from './^blocks/GithubAuthModal.svelte';
  </script>
  
  <svelte:head>
	<title>Uploadfast | Dashboard</title>
	<OpenGraph
	  siteTitle="UploadFast"
	  pageTitle="UploadFast | Dashboard"
	  metadescription="Control panel for your files"
	  url="https://www.uploadfast.dev/dashboard"
	  image="/uploadfast-poster-123.png"
	  squareImage="/uploadfast-poster-123.png"
	/>
	<Twitter image={{ url: '/uploadfast-poster-123.png' }} />
  </svelte:head>
  
  <!-- Pass user data to determine if we should show the auth modal -->
  <GithubAuthModal openIt={!data.user && !data.session?.user} />
  
  <main class="hidden min-h-screen w-full flex-col bg-muted/40 p-0 md:flex">
	<Sidebar />
	<section class="ml-28 py-6">
	  <div class="mx-auto max-w-7xl">
		<Header
		  imageUrl={data.session?.user?.image ?? data.user?.avatar ?? undefined}
		  username={data.session?.user?.name ?? data.user?.name ?? ''}
		/>
		
		{#if data.user && !data.user.isEmailVerified}
		  <VerificationBanner userEmail={data.user.email} />
		{/if}
		
		<slot />
	  </div>
	</section>
	<Toaster richColors position="top-right" />
  </main>
  
  <section class="flex min-h-screen flex-row items-center justify-center p-6 text-center md:hidden">
	<p class="text-balance w-[88%] text-xl font-semibold">
	  Access this page on a larger screen to manage your files.
	</p>
  </section>