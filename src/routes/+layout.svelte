<script>
	import '@fontsource-variable/instrument-sans';
	import '../app.pcss';
	import { ProgressBar } from '@prgm/sveltekit-progress-bar';
</script>

<main class="mx-auto">
	<ProgressBar class="text-green-500" />
	<slot />
</main>
