import { browser } from '$app/environment';

const windowWithLemonSqueezy = browser
	? (window as unknown as {
			LemonSqueezy: any;
			createLemonSqueezy: () => void;
		})
	: undefined;

export async function openLemonSqueezyUrl(s: string) {
	const LemonSqueezy = await getLemonSqueezy();
	return LemonSqueezy.Url.Open(s);
}

export async function respondToCheckoutEvent(callback: (data: any) => void) {
	const LemonSqueezy = await getLemonSqueezy();

	LemonSqueezy.Setup({
		eventHandler: (ctx: { event: string; data: any }) => {
			if (ctx.event === 'Checkout.Success') {
				callback(ctx.data);
			}
		}
	});
}

export async function getLemonSqueezy() {
	if (!windowWithLemonSqueezy?.LemonSqueezy) {
		await loadAndInitialize();
	}

	return windowWithLemonSqueezy?.LemonSqueezy;
}

function loadAndInitialize() {
	return new Promise<void>((resolve) => {
		const script = document.createElement('script');
		script.onload = function () {
			windowWithLemonSqueezy?.createLemonSqueezy();
			resolve();
		};
		script.src = 'https://assets.lemonsqueezy.com/lemon.js';

		document.head.appendChild(script);
	});
}
