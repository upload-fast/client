<script lang="ts">
	export let data: Record<any, any>[] = [];
</script>

<div class="pt-5" id="pricing">
	<div class="mx-auto mt-4 max-w-7xl px-6 pb-20 lg:px-8">
		<div class="mx-auto max-w-4xl text-center">
			<h1 class="text-lg font-semibold leading-7 text-emerald-200">Pricing</h1>
			<p class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
				The simplest pricing you'll ever see on a SaaS website.
			</p>
		</div>
		<p class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
			Choose the tier that works best, and pay once!
		</p>
		<div
			class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
		>
			{#each data as item}
				<div class="rounded-3xl p-8 ring-1 ring-white/10 xl:p-10">
					<div class="flex items-center justify-between gap-x-4">
						<h2 id="product1" class="text-lg font-semibold leading-8 text-white">{item.name}</h2>
					</div>
					<p class="mt-4 text-sm leading-6 text-gray-300">
						{item.description}
					</p>
					<p class="mt-6 flex items-baseline gap-x-1">
						<span class="text-4xl font-bold tracking-tight text-white">${item.price}</span><span
							class="text-sm font-semibold leading-6 text-gray-300"
						></span>
					</p>
					<a
						href="/order"
						aria-describedby="product1"
						class="mt-6 block rounded-md bg-white/10 px-3 py-2 text-center text-sm font-semibold leading-6 text-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
						>Get access</a
					>
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
							</svg>{new Intl.NumberFormat().format(item.uploadsPerMonth)} uploads a month
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
							</svg>Fast delivery
						</li>
					</ul>
				</div>
			{/each}
			<!-- First Product -->
		</div>
	</div>
</div>
