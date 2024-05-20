<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
	import { Button } from './ui/button';

	export let btnText = 'Open modal';
	export let title = 'Modal title';
	export let visible: boolean = false;
	export let closeOnEscape: boolean = true;
	export let closeOnOutsideClick: boolean = true;
	export let handleClose: () => void = () => null;
</script>

<Dialog.Root
	bind:open={visible}
	bind:closeOnEscape
	bind:closeOnOutsideClick
	bind:onOpenChange={handleClose}
>
	<Dialog.Trigger>
		<slot name="trigger">
			<Button>{btnText}</Button>
		</slot>
	</Dialog.Trigger>
	<Dialog.Content class="h-fit w-[44rem]">
		<Dialog.Header>
			<Dialog.Title>
				<slot name="title">
					{title}
				</slot>
			</Dialog.Title>
			<Dialog.Description><slot name="description" /></Dialog.Description>
		</Dialog.Header>
		<slot name="content" />
	</Dialog.Content>
</Dialog.Root>
