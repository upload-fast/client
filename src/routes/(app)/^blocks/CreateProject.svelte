<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import SelectPlan from '$lib/components/SelectPlan.svelte';
	import { Button } from '$lib/components/ui/button';
	import Input from '$lib/components/ui/input/input.svelte';
	import { Label } from '$lib/components/ui/label';
	import type { SubmitFunction } from '@sveltejs/kit';
	import Plus from 'lucide-svelte/icons/file-up';
	import Circle from 'lucide-svelte/icons/loader-circle';
	import { onMount } from 'svelte';

	let showProjectInitialize = true;

	let form: any;
	let loading = false;

	const submitForm: SubmitFunction = (input) => {
		loading = true;
		return async ({ update }) => {
			loading = false;
			await update({ reset: false });
		};
	};

	let preset: string;

	onMount(() => {
		preset = localStorage.getItem('preset') ?? '';
	});
</script>

<p class="mb-2 mt-8 text-lg font-[500] underline underline-offset-4">Create new project.</p>

{#if showProjectInitialize}
	<button
		class="group flex h-64 w-64 cursor-pointer items-center justify-center rounded-lg border-2 bg-slate-800 hover:border-primary-foreground"
		on:click={() => (showProjectInitialize = false)}
	>
		<Plus size={44} class="text-green-300 group-hover:text-primary-foreground" />
	</button>
{/if}

{#if !showProjectInitialize}
	<div class="mt-6 h-fit w-[700px] rounded-lg bg-gray-800 px-5 pb-3 pt-6">
		<form method="POST" action="?/createProject" use:enhance={submitForm}>
			<div class="flex flex-col gap-6">
				<span>
					<Label class="text-md" for="name">Project name</Label>
					<Input
						name="name"
						id="name"
						type="text"
						class="mt-1.5 h-12 w-[70%] bg-black/50"
						placeholder={'Upload-Thing'}
					/>
				</span>

				<span>
					<Label for="plan" class="text-md mb-3">Select a plan</Label>
					<SelectPlan {preset} />
				</span>
			</div>

			<div class="mt-4 flex w-full flex-row justify-end gap-4">
				<Button on:click={() => (showProjectInitialize = true)} class="hover:opacity-70"
					>Cancel</Button
				>
				<Button
					class="w-fit bg-black/80 text-emerald-100/90 hover:bg-black/50"
					disabled={loading}
					type="submit"
				>
					{#if loading}
						<Circle class="mx-3 animate-spin" size={12} />
					{/if}
					Create Project
				</Button>
			</div>
		</form>
	</div>
{/if}
