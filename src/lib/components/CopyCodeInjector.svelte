<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		// will add a children to any <pre> element with class language-*
		let pres: HTMLCollection = document.getElementsByTagName('pre');
		for (let _ of pres) {
			const pre = _ as HTMLPreElement;
			if (![...pre.classList].some((el) => el.startsWith('language-'))) {
				continue;
			}
			const text = pre.innerText;
			pre.style.position = 'relative';
			let copyButton = document.createElement('button');
			let btnText = 'Copy';

			copyButton.addEventListener('click', () => {
				navigator.clipboard.writeText(text);
				copyButton.innerText = 'Saved!';
				pre.appendChild(copyButton);
			});
			copyButton.style.position = 'absolute';
			copyButton.style.top = '4px';
			copyButton.style.right = '10px';
			copyButton.style.backgroundColor = 'rgb(41 37 36 / 0.8)';
			copyButton.style.color = '#ebdbb2';
			copyButton.style.fontWeight = 'bolder';
			copyButton.style.border = 'none';
			copyButton.style.padding = '4px 12px';
			copyButton.style.textAlign = 'center';
			copyButton.style.textDecoration = 'none';
			copyButton.style.display = 'inline-block';
			copyButton.style.fontSize = '12px';
			copyButton.style.margin = '4px 2px';
			copyButton.style.cursor = 'pointer';
			copyButton.style.borderRadius = '8px';
			copyButton.innerText = btnText;
			pre.appendChild(copyButton);
		}
	});
</script>

<slot />
