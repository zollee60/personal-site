<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		href?: string;
		class?: string;
		children?: Snippet;
	}

	let { href, class: className = '', children }: Props = $props();
</script>

{#if href}
	<a
		{href}
		class="group block rounded-lg border border-dark-border bg-dark-lighter p-6 transition-all hover:border-accent-green/50 hover:shadow-lg hover:shadow-accent-green/10 {className}"
	>
		{#if children}
			{@render children()}
		{/if}
	</a>
{:else}
	<div
		class="rounded-lg border border-dark-border bg-dark-lighter p-6 transition-all {className}"
	>
		{#if children}
			{@render children()}
		{/if}
	</div>
{/if}
