<script lang="ts">
	export interface TimelineItem {
		startDate: string;
		endDate: string;
		title: string;
		company: string;
		description: string;
		bullets?: string[];
	}

	interface Props {
		items: TimelineItem[];
		variant?: 'dark' | 'light';
		class?: string;
	}

	let { items, variant = 'dark', class: className = '' }: Props = $props();

	let textColor = $derived(variant === 'light' ? 'text-dark' : 'text-light');
	let textMuted = $derived(variant === 'light' ? 'text-dark/70' : 'text-light/80');
	let borderColor = $derived(variant === 'light' ? 'border-dark/20' : 'border-dark-border');
</script>

<div class="space-y-8 {className}">
	{#each items as item}
		<div class="relative grid gap-4 md:grid-cols-[120px_1fr]">
			<!-- Date Column -->
			<div class="font-mono text-sm">
				<span class="font-bold {textColor}">{item.startDate}</span>
				<span class="block text-muted">{item.endDate}</span>
			</div>

			<!-- Content Column -->
			<div class="relative border-l-2 {borderColor} pl-6 md:pl-8">
				<!-- Dot -->
				<div
					class="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 {borderColor} bg-accent-green"
				></div>

				<h3 class="font-mono text-base font-bold uppercase tracking-tight {textColor}">
					{item.title}
				</h3>
				<span class="font-mono text-sm uppercase text-muted">{item.company}</span>

				<p class="mt-2 font-mono text-sm {textMuted}">{item.description}</p>

				{#if item.bullets && item.bullets.length > 0}
					<ul class="mt-2 space-y-1">
						{#each item.bullets as bullet}
							<li class="flex items-start font-mono text-sm {textMuted}">
								<span class="mr-2 text-accent-green">•</span>
								<span>{bullet}</span>
							</li>
						{/each}
					</ul>
				{/if}
			</div>
		</div>
	{/each}
</div>
