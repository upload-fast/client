export function addCopyButton(options = {}) {
	const toggleMs = options.toggle || 3000;
	return {
		name: 'shiki-transformer-copy-button',
		pre(node) {
			const button = document.createElement('button');
			button.classList.add('copy');
			button.dataset.code = this.source;
			button.addEventListener('click', () => {
				navigator.clipboard.writeText(this.source);
				button.classList.add('copied');
				setTimeout(() => button.classList.remove('copied'), toggleMs);
			});

			const ready = document.createElement('span');
			ready.classList.add('ready');
			const success = document.createElement('span');
			success.classList.add('success');
			button.append(ready, success);

			node.children.push(button);
		}
	};
}
