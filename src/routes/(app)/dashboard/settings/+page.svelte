<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
</script>

<Card.Root class="mt-5 w-[70%]">
	<Card.Header>
		<Card.Title>Project Name</Card.Title>
		<Card.Description>Edit your project name</Card.Description>
	</Card.Header>
	<Card.Content>
		<form>
			<Input placeholder="Store Name" class="h-12 bg-secondary/50" />
		</form>
	</Card.Content>
	<Card.Footer class="border-t px-6 py-4">
		<Button>Save name</Button>
	</Card.Footer>
</Card.Root>
