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
				alert('Code block copied');
			});
			copyButton.style.position = 'absolute';
			copyButton.style.top = '10px';
			copyButton.style.right = '10px';
			copyButton.style.backgroundColor = ' #0aa370';
			copyButton.style.color = 'white';
			copyButton.style.border = 'none';
			copyButton.style.padding = '4px 12px';
			copyButton.style.textAlign = 'center';
			copyButton.style.textDecoration = 'none';
			copyButton.style.display = 'inline-block';
			copyButton.style.fontSize = '16px';
			copyButton.style.margin = '4px 2px';
			copyButton.style.cursor = 'pointer';
			copyButton.style.borderRadius = '12px';
			copyButton.innerText = btnText;
			pre.appendChild(copyButton);
		}
	});
</script>

<slot />
