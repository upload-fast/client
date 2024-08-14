<script lang="ts">
	import { Button } from '$lib/components/ui/button';

	export let data: Record<any, any>[] = [];
</script>

<div class="lg:py-12" id="pricing">
	<div class="mx-auto mt-8 max-w-7xl px-6 pb-24 lg:px-8">
		<div class="mx-auto max-w-4xl text-center">
			<h1 class="text-lg font-semibold leading-7 text-emerald-200">Pricing</h1>
			<p class="mt-2 text-xl font-bold tracking-tight text-white md:text-4xl">
				Get started with a one-time payment.
			</p>
		</div>
		<p class="text-md mx-auto mt-4 max-w-2xl text-center leading-8 text-gray-300">
			Get value immediately.
		</p>

		<p class="text-md mx-auto max-w-2xl text-center leading-8 text-gray-300">
			Upgrade to the subscription plans later on.
		</p>
		<div
			class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
		>
			{#each data as item}
				<div class="rounded-3xl p-8 ring-1 ring-white/10 xl:pb-4 xl:pt-10">
					<div class="flex items-center justify-between gap-x-4">
						<h2 id="product1" class="text-lg font-semibold leading-8 text-white">{item.name}</h2>
					</div>
					<p class="mt-4 text-sm leading-6 text-gray-300 lg:text-base">
						{item.description}
					</p>
					<p class="mt-6 flex items-baseline gap-x-1">
						<span class="text-4xl font-bold tracking-tight text-white"
							>{item.name === 'Free Trial' ? '' : '$'}{item.price}</span
						><span class="text-sm font-semibold leading-6 text-gray-300"></span>
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
							</svg>{item.storageCap} of storage
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
							</svg>{new Intl.NumberFormat().format(item.uploadsPerMonth)}
							{item.name === 'Free Trial' ? 'uploads (plus test uploads)' : 'uploads a month'}
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
							</svg>
							Support - {item.support}
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
							</svg>Max File Upload Size - {item.sizeLimit}
						</li>
					</ul>

					<Button class="mt-8 w-full" href="/dashboard">Sign up</Button>
				</div>
			{/each}
			<!-- First Product -->
		</div>
	</div>
</div>
