<script lang="ts">
	import { browser } from '$app/environment';
	import { Button } from '$lib/components/ui/button';

	function savePreset(value: string) {
		if (browser) {
			localStorage.setItem('preset', value);
		}
	}
</script>

<div id="pricing">
	<div class="mx-auto mt-12 max-w-7xl px-6 pb-24 lg:px-8">
		<div class="mx-auto max-w-4xl text-center">
			<p class="mt-2 text-lg font-bold tracking-tight text-white md:text-4xl">
				Get started with a one-time payment.
			</p>
		</div>
		<p class="text-md mx-auto mt-4 max-w-2xl text-center leading-8 text-gray-300">
			Skip the <strong class="mx-1">BS</strong>and get value immediately.
		</p>

		<p
			class="md:text-md mx-auto mt-4 flex max-w-2xl items-center justify-center gap-2 text-center text-xs leading-4 text-gray-300 lg:mt-1"
		>
			<span class="font-semibold text-emerald-300">Sign up</span>
			<span class="text-gray-500">→</span>
			<span class="font-semibold text-emerald-300">Create API key</span>
			<span class="text-gray-500">→</span>
			<span class="font-semibold text-emerald-300">Activate key</span>
			<span class="hidden text-gray-400 lg:block">(launches payment flow)</span>
		</p>

		<div
			class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
		>
			<div class="rounded-3xl p-8 ring-1 ring-white/10 xl:pb-4 xl:pt-10">
				<div class="flex items-center justify-between gap-x-4">
					<h2 id="product1" class="text-lg font-semibold leading-8 text-white">Quick Fix</h2>
				</div>
				<p class="mt-4 text-sm leading-6 text-gray-300 lg:text-base">
					For prototyping new apps where users can upload images.
				</p>
				<p class="mt-6 flex items-baseline gap-x-1">
					<span class="text-4xl font-bold tracking-tight text-white">$4</span>
					<span class="text-sm font-semibold leading-6 text-gray-300">- once</span>
				</p>

				<ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
					<li class="flex gap-x-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							class="h-6 w-5 flex-none text-emerald-500"
						>
							<path
								fill-rule="evenodd"
								d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
								clip-rule="evenodd"
							></path>
						</svg>1GB of storage
					</li>
					<li class="flex gap-x-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							class="h-6 w-5 flex-none text-emerald-500"
						>
							<path
								fill-rule="evenodd"
								d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
								clip-rule="evenodd"
							></path>
						</svg>500 uploads a month
					</li>
					<li class="flex gap-x-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							class="h-6 w-5 flex-none text-emerald-500"
						>
							<path
								fill-rule="evenodd"
								d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
								clip-rule="evenodd"
							></path>
						</svg>Support - Limited support.
					</li>
					<li class="flex gap-x-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							class="h-6 w-5 flex-none text-emerald-500"
						>
							<path
								fill-rule="evenodd"
								d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
								clip-rule="evenodd"
							></path>
						</svg>Max File Upload Size - 25MB
					</li>
				</ul>

				<Button class="mt-8 w-full" href="/dashboard" on:click={() => savePreset('Quick Fix')}
					>Sign up</Button
				>
			</div>

			<div class="rounded-3xl p-8 ring-1 ring-white/10 xl:pb-4 xl:pt-10">
				<div class="flex items-center justify-between gap-x-4">
					<h2 id="product2" class="text-lg font-semibold leading-8 text-white">Tier 1</h2>
				</div>
				<p class="mt-4 text-sm leading-6 text-gray-300 lg:text-base">
					For apps with moderately frequent image uploads needs in production
				</p>
				<p class="mt-6 flex items-baseline gap-x-1">
					<span class="text-4xl font-bold tracking-tight text-white">$7</span>
					<span class="text-sm font-semibold leading-6 text-gray-300">/mo</span>
				</p>

				<ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
					<li class="flex gap-x-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							class="h-6 w-5 flex-none text-emerald-500"
						>
							<path
								fill-rule="evenodd"
								d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
								clip-rule="evenodd"
							></path>
						</svg>15GB of storage
					</li>
					<li class="flex gap-x-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							class="h-6 w-5 flex-none text-emerald-500"
						>
							<path
								fill-rule="evenodd"
								d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
								clip-rule="evenodd"
							></path>
						</svg>5,000 uploads a month
					</li>
					<li class="flex gap-x-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							class="h-6 w-5 flex-none text-emerald-500"
						>
							<path
								fill-rule="evenodd"
								d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
								clip-rule="evenodd"
							></path>
						</svg>Support - Enthusiastic support via email.
					</li>
					<li class="flex gap-x-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							class="h-6 w-5 flex-none text-emerald-500"
						>
							<path
								fill-rule="evenodd"
								d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
								clip-rule="evenodd"
							></path>
						</svg>Max File Upload Size - 1GB
					</li>
				</ul>

				<Button class="mt-8 w-full" href="/dashboard" on:click={() => savePreset('Tier 1')}
					>Sign up</Button
				>
			</div>

			<div class="rounded-3xl p-8 ring-1 ring-white/10 xl:pb-4 xl:pt-10">
				<div class="flex items-center justify-between gap-x-4">
					<h2 id="product3" class="text-lg font-semibold leading-8 text-white">Tier 2</h2>
				</div>
				<p class="mt-4 text-sm leading-6 text-gray-300 lg:text-base">
					For production apps with frequent image upload and storage needs.
				</p>
				<p class="mt-6 flex items-baseline gap-x-1">
					<span class="text-4xl font-bold tracking-tight text-white">$19</span>
					<span class="text-sm font-semibold leading-6 text-gray-300">/mo</span>
				</p>

				<ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
					<li class="flex gap-x-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							class="h-6 w-5 flex-none text-emerald-500"
						>
							<path
								fill-rule="evenodd"
								d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
								clip-rule="evenodd"
							></path>
						</svg>120GB (extendable) of storage
					</li>
					<li class="flex gap-x-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							class="h-6 w-5 flex-none text-emerald-500"
						>
							<path
								fill-rule="evenodd"
								d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
								clip-rule="evenodd"
							></path>
						</svg>1,000,000 uploads a month
					</li>
					<li class="flex gap-x-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							class="h-6 w-5 flex-none text-emerald-500"
						>
							<path
								fill-rule="evenodd"
								d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
								clip-rule="evenodd"
							></path>
						</svg>Support - Team is on hand to help you fix your issues.
					</li>
					<li class="flex gap-x-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							class="h-6 w-5 flex-none text-emerald-500"
						>
							<path
								fill-rule="evenodd"
								d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
								clip-rule="evenodd"
							></path>
						</svg>Max File Upload Size - None
					</li>
				</ul>

				<Button class="mt-8 w-full" href="/dashboard" on:click={() => savePreset('Tier 2')}
					>Sign up</Button
				>
			</div>
		</div>
	</div>
</div>
