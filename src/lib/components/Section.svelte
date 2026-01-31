<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title?: string;
		subtitle?: string;
		variant?: 'dark' | 'light';
		class?: string;
		children?: Snippet;
	}

	let { title, subtitle, variant = 'dark', class: className = '', children }: Props = $props();

	let titleColor = $derived(variant === 'light' ? 'text-dark' : 'text-light');
</script>

<section class="py-12 md:py-16 {className}">
	<div class="mx-auto max-w-5xl px-4">
		{#if title}
			<div class="mb-8">
				<h2 class="font-mono text-2xl font-bold uppercase tracking-tight md:text-3xl {titleColor}">
					{title}<span class="text-accent-green">.</span>
				</h2>
				{#if subtitle}
					<p class="mt-2 font-mono text-sm text-muted">{subtitle}</p>
				{/if}
			</div>
		{/if}
		{#if children}
			{@render children()}
		{/if}
	</div>
</section>
