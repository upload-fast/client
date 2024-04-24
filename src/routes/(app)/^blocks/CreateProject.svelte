<script lang="ts">
	import { enhance } from '$app/forms';
	import SelectPlan from '$lib/components/SelectPlan.svelte';
	import { Button } from '$lib/components/ui/button';
	import Input from '$lib/components/ui/input/input.svelte';
	import { Label } from '$lib/components/ui/label';
	import type { SubmitFunction } from '@sveltejs/kit';
	import Plus from 'lucide-svelte/icons/file-up';
	import Circle from 'lucide-svelte/icons/loader-circle';

	let showProjectInitialize = false;

	let form: any;
	let loading = false;

	function handleSubmit(event: any) {
		form.submit();
	}

	const submitForm: SubmitFunction = (input) => {
		loading = true;
		return async ({ update }) => {
			loading = false;
			await update({ reset: false });
		};
	};
</script>

<p class="mb-2 mt-8 text-lg font-[500] underline underline-offset-4">Create a new project</p>

{#if showProjectInitialize}
	<button
		class="group flex h-64 w-64 cursor-pointer items-center justify-center rounded-lg border-2 bg-slate-800 hover:border-primary-foreground"
		on:click={() => (showProjectInitialize = false)}
	>
		<Plus size={44} class="text-fuchsia-300 group-hover:text-primary-foreground" />
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
						class="mt-1.5 h-12 w-[70%] bg-background"
						placeholder={'Buttery Butter App'}
					/>
				</span>

				<span>
					<Label for="plan" class="text-md mb-3">Select a plan</Label>
					<SelectPlan />
				</span>
			</div>

			<div class="mt-4 flex w-full flex-row justify-end gap-4">
				<Button on:click={() => (showProjectInitialize = true)}>Cancel</Button>
				<Button variant="outline" class="w-fit" disabled={loading} type="submit">
					{#if loading}
						<Circle class="mx-3 animate-spin" size={12} />
					{/if}
					Create Project
				</Button>
			</div>
		</form>
	</div>
{/if}
