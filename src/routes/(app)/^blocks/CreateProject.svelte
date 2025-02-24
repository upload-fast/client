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

	// Add a title and description for the project
	let projectTitle = '';
	let projectDescription = '';

	onMount(() => {
		preset = localStorage.getItem('preset') ?? '';
	});
</script>

{#if showProjectInitialize}
	<div class="mx-auto mt-8 max-w-2xl">
		<h1 class="mb-3 text-2xl font-semibold text-gray-100">Create a New Project</h1>
		<p class="mb-6 text-gray-400">Get started by creating a new project to manage your uploads.</p>

		<button
			class="flex h-48 w-full flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed border-gray-700 bg-gray-900/50 transition-all hover:border-gray-500 hover:bg-gray-800/50"
			on:click={() => (showProjectInitialize = false)}
		>
			<Plus size={32} class="text-gray-300" />
			<p class="text-lg text-gray-300">Click to create a new project</p>
		</button>
	</div>
{/if}

{#if !showProjectInitialize}
	<div class="mx-auto mt-8 max-w-2xl">
		<h1 class="mb-3 text-2xl font-semibold text-gray-100">Project Details</h1>
		<p class="mb-6 text-gray-400">Fill in the information below to set up your new project.</p>

		<div class="rounded-lg border border-gray-800 bg-gray-900/50 p-6">
			<form
				method="POST"
				action="?/createProject"
				use:enhance={submitForm}
				bind:this={form}
				class="space-y-6"
			>
				<div class="space-y-4">
					<div>
						<Label for="name" class="text-sm font-medium text-gray-300">Project Name</Label>
						<Input
							name="name"
							id="name"
							type="text"
							class="mt-1.5 border-gray-700 bg-gray-800/50 focus:border-gray-500 focus:ring-gray-500"
							placeholder="My Awesome Project"
							bind:value={projectTitle}
						/>
					</div>

					<div>
						<Label for="description" class="text-sm font-medium text-gray-300"
							>Project Description</Label
						>
						<Input
							name="description"
							id="description"
							type="text"
							class="mt-1.5 border-gray-700 bg-gray-800/50 focus:border-gray-500 focus:ring-gray-500"
							placeholder="Brief description of your project"
							bind:value={projectDescription}
						/>
					</div>

					<div>
						<Label class="mb-3 text-sm font-medium text-gray-300">Select a Plan</Label>
						<SelectPlan {preset} />
					</div>
				</div>

				<div class="flex justify-end gap-3 border-t border-gray-800 pt-4">
					<Button
						variant="outline"
						class="border-gray-700 text-gray-300 hover:bg-gray-800"
						on:click={() => (showProjectInitialize = true)}
						type="button"
					>
						Cancel
					</Button>
					<Button
						variant="default"
						class="hover:bg-primary/90 min-w-[120px] bg-primary text-primary-foreground"
						disabled={loading}
						type="submit"
					>
						{#if loading}
							<Circle class="mr-2 animate-spin" size={16} />
						{/if}
						Create Project
					</Button>
				</div>
			</form>
		</div>
	</div>
{/if}
