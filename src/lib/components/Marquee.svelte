<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		speed?: number;
		reverse?: boolean;
		pauseOnHover?: boolean;
		class?: string;
		children?: Snippet;
	}

	let {
		speed = 30,
		reverse = false,
		pauseOnHover = true,
		class: className = '',
		children
	}: Props = $props();
</script>

<div
	class="relative flex overflow-hidden {className}"
	class:pause-on-hover={pauseOnHover}
>
	<div
		class="flex shrink-0 items-center gap-4"
		style="animation: {reverse ? 'marquee-reverse' : 'marquee'} {speed}s linear infinite;"
	>
		{#if children}
			{@render children()}
		{/if}
	</div>
	<div
		class="flex shrink-0 items-center gap-4"
		style="animation: {reverse ? 'marquee-reverse' : 'marquee'} {speed}s linear infinite;"
		aria-hidden="true"
	>
		{#if children}
			{@render children()}
		{/if}
	</div>
</div>

<style>
	.pause-on-hover:hover > div {
		animation-play-state: paused;
	}
</style>
