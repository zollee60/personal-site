<script lang="ts">
	import { base } from '$app/paths';
	import { Section, Card, Tag } from '$lib/components';
	import { formatDate, formatMonthYear } from '$lib/utils/posts';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	let sortOrder = $state<'newest' | 'oldest'>('newest');
	let selectedMonth = $state<string | null>(null);

	let filteredAndSortedPosts = $derived(() => {
		let posts = [...data.posts];

		// Filter by month
		if (selectedMonth) {
			posts = posts.filter((post) => formatMonthYear(post.date) === selectedMonth);
		}

		// Sort by date
		posts.sort((a, b) => {
			const dateA = new Date(a.date).getTime();
			const dateB = new Date(b.date).getTime();
			return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
		});

		return posts;
	});
</script>

<svelte:head>
	<title>Blog - Tóth Márk Zoltán</title>
	<meta name="description" content="Blog posts about web development, TypeScript, and software engineering." />
</svelte:head>

<div class="bg-light text-dark">
	<!-- Header -->
	<section class="bg-dark py-12 text-light md:py-16">
		<div class="mx-auto max-w-5xl px-4 text-center">
			<h1 class="font-mono text-3xl font-bold uppercase tracking-tight md:text-4xl">
				Blog<span class="text-accent-green">.</span>
			</h1>
			<p class="mt-2 font-mono text-sm text-light/60">
				Thoughts on web development, TypeScript, and software engineering
			</p>
		</div>
	</section>

	<!-- Filters -->
	<Section variant="light">
		<div class="space-y-4">
			<!-- Tag Filter Row -->
			{#if data.tags.length > 0}
				<div class="flex flex-wrap items-center gap-2">
					<span class="font-mono text-sm text-dark/60">Tag:</span>
					<a
						href="{base}/blog"
						class="rounded-full bg-accent-green px-3 py-1 font-mono text-xs font-medium uppercase tracking-wide text-dark transition-colors hover:bg-accent-green/80"
					>
						All
					</a>
					{#each data.tags as tag}
						<Tag label={tag} href="{base}/blog/tag/{tag}" variant="blue" />
					{/each}
				</div>
			{/if}

			<!-- Sort and Month Filter Row -->
			<div class="flex flex-wrap items-center gap-4">
				<!-- Sort Dropdown -->
				<div class="flex items-center gap-2">
					<label for="sort-order" class="font-mono text-sm text-dark/60">Sort:</label>
					<select
						id="sort-order"
						bind:value={sortOrder}
						class="rounded border border-dark/20 bg-white px-3 py-1 font-mono text-sm text-dark focus:border-accent-green focus:outline-none"
					>
						<option value="newest">Newest first</option>
						<option value="oldest">Oldest first</option>
					</select>
				</div>

				<!-- Month Filter -->
				{#if data.months.length > 0}
					<div class="flex flex-wrap items-center gap-2">
						<span class="font-mono text-sm text-dark/60">Month:</span>
						<button
							onclick={() => (selectedMonth = null)}
							class="rounded-full px-3 py-1 font-mono text-xs font-medium uppercase tracking-wide transition-colors {selectedMonth === null
								? 'bg-accent-green text-dark'
								: 'bg-dark/10 text-dark/70 hover:bg-dark/20'}"
						>
							All
						</button>
						{#each data.months as month}
							<button
								onclick={() => (selectedMonth = month)}
								class="rounded-full px-3 py-1 font-mono text-xs font-medium tracking-wide transition-colors {selectedMonth === month
									? 'bg-accent-amber text-dark'
									: 'bg-dark/10 text-dark/70 hover:bg-dark/20'}"
							>
								{month}
							</button>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	</Section>

	<!-- Posts -->
	<Section title="All Posts" variant="light" class="border-t border-dark/10">
		{#if filteredAndSortedPosts().length > 0}
			<div class="grid gap-6 md:grid-cols-2">
				{#each filteredAndSortedPosts() as post}
					<a
						href="{base}/blog/{post.slug}"
						class="group rounded-lg border border-dark/20 bg-white p-6 transition-all hover:border-accent-green hover:shadow-lg"
					>
						<div class="mb-3 flex flex-wrap gap-2">
							{#each post.tags as tag}
								<Tag label={tag} variant="blue" />
							{/each}
						</div>
						<h2 class="font-mono text-lg font-bold text-dark transition-colors group-hover:text-accent-green">
							{post.title}
						</h2>
						<p class="mt-2 font-mono text-sm text-dark/70">{post.description}</p>
						<p class="mt-4 font-mono text-xs text-dark/50">{formatDate(post.date)}</p>
					</a>
				{/each}
			</div>
		{:else}
			<p class="text-center font-mono text-dark/60">No posts found for this filter.</p>
		{/if}
	</Section>
</div>
