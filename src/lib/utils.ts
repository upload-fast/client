import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { cubicOut } from 'svelte/easing';
import type { TransitionConfig } from 'svelte/transition';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

type FlyAndScaleParams = {
	y?: number;
	x?: number;
	start?: number;
	duration?: number;
};

export const flyAndScale = (
	node: Element,
	params: FlyAndScaleParams = { y: -8, x: 0, start: 0.95, duration: 150 }
): TransitionConfig => {
	const style = getComputedStyle(node);
	const transform = style.transform === 'none' ? '' : style.transform;

	const scaleConversion = (valueA: number, scaleA: [number, number], scaleB: [number, number]) => {
		const [minA, maxA] = scaleA;
		const [minB, maxB] = scaleB;

		const percentage = (valueA - minA) / (maxA - minA);
		const valueB = percentage * (maxB - minB) + minB;

		return valueB;
	};

	const styleToString = (style: Record<string, number | string | undefined>): string => {
		return Object.keys(style).reduce((str, key) => {
			if (style[key] === undefined) return str;
			return str + `${key}:${style[key]};`;
		}, '');
	};

	return {
		duration: params.duration ?? 200,
		delay: 0,
		css: (t) => {
			const y = scaleConversion(t, [0, 1], [params.y ?? 5, 0]);
			const x = scaleConversion(t, [0, 1], [params.x ?? 0, 0]);
			const scale = scaleConversion(t, [0, 1], [params.start ?? 0.95, 1]);

			return styleToString({
				transform: `${transform} translate3d(${x}px, ${y}px, 0) scale(${scale})`,
				opacity: t
			});
		},
		easing: cubicOut
	};
};

export function replaceCharacters(str: string) {
	let firstThreeChars = str.slice(0, 3); // Extract the first three characters

	if (firstThreeChars !== 'ufl') {
		firstThreeChars = 'ufl';
	}
	const asterisks = '*'.repeat(str.length - 3); // Generate asterisks for the remaining characters

	return firstThreeChars + ' _ ' + asterisks;
}

export function calcFileSizeInKB(size: number) {
	const fileSizeInKB = size / 1024;
	return Number(fileSizeInKB.toFixed(2)); // Return the size with two decimal places
}

export function getPercentOf(values: { v1: number; v2: number }) {
	return Number(((values.v1 / values.v2) * 100).toFixed(2));
}

export function generateStorageCapString({
	storageCap,
	storageUsed
}: {
	storageCap: number;
	storageUsed: number;
}) {
	if (storageCap > 1048576) {
		const fileSizeInGb = storageCap / 1048576;

		return `${calcFileSizeInKB(storageUsed)} MB / ${fileSizeInGb.toLocaleString()} GB`;
	}

	return `${calcFileSizeInKB(storageUsed)} / ${calcFileSizeInKB(storageCap)
		.toFixed()
		.toLocaleString()} MB`;
}

export async function copyApiKey(value: string) {
	await navigator.clipboard.writeText(value);
	alert('Copied API key. Keep it safe.');
}
