<script lang="ts">
	interface Props {
		label: string;
		href?: string;
		variant?: 'default' | 'green' | 'blue' | 'amber';
		class?: string;
	}

	let { label, href, variant = 'default', class: className = '' }: Props = $props();

	const variantClasses = {
		default: 'bg-dark/10 text-dark hover:bg-dark/20',
		green: 'bg-accent-green/20 text-accent-green hover:bg-accent-green/30',
		blue: 'bg-accent-blue/20 text-accent-blue hover:bg-accent-blue/30',
		amber: 'bg-accent-amber/20 text-accent-amber hover:bg-accent-amber/30'
	};
</script>

{#if href}
	<a
		{href}
		class="inline-block rounded-full px-3 py-1 font-mono text-xs font-medium uppercase tracking-wide transition-colors {variantClasses[variant]} {className}"
	>
		{label}
	</a>
{:else}
	<span
		class="inline-block rounded-full px-3 py-1 font-mono text-xs font-medium uppercase tracking-wide {variantClasses[variant]} {className}"
	>
		{label}
	</span>
{/if}
