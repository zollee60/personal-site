<script lang="ts">
	import { Section, Card, Tag } from '$lib/components';
	import { formatDate } from '$lib/utils/posts';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
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

	<!-- Tags Filter -->
	{#if data.tags.length > 0}
		<Section variant="light">
			<div class="flex flex-wrap items-center gap-2">
				<span class="font-mono text-sm text-dark/60">Filter by tag:</span>
				<a
					href="/blog"
					class="rounded-full bg-accent-green px-3 py-1 font-mono text-xs font-medium uppercase tracking-wide text-dark transition-colors hover:bg-accent-green/80"
				>
					All
				</a>
				{#each data.tags as tag}
					<Tag label={tag} href="/blog/tag/{tag}" variant="blue" />
				{/each}
			</div>
		</Section>
	{/if}

	<!-- Posts -->
	<Section title="All Posts" variant="light" class="border-t border-dark/10">
		{#if data.posts.length > 0}
			<div class="grid gap-6 md:grid-cols-2">
				{#each data.posts as post}
					<a
						href="/blog/{post.slug}"
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
			<p class="text-center font-mono text-dark/60">No posts yet. Check back soon!</p>
		{/if}
	</Section>
</div>
