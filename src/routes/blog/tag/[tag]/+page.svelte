<script lang="ts">
	import { base } from '$app/paths';
	import { Section, Tag } from '$lib/components';
	import { formatDate } from '$lib/utils/posts';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Posts tagged "{data.tag}" - Blog</title>
	<meta name="description" content="Blog posts tagged with {data.tag}." />
</svelte:head>

<div class="bg-light text-dark">
	<!-- Header -->
	<section class="bg-dark py-12 text-light md:py-16">
		<div class="mx-auto max-w-5xl px-4 text-center">
			<p class="font-mono text-sm uppercase tracking-wide text-accent-green">Posts tagged</p>
			<h1 class="mt-2 font-mono text-3xl font-bold uppercase tracking-tight md:text-4xl">
				#{data.tag}
			</h1>
			<a href="{base}/blog" class="mt-4 inline-block font-mono text-sm text-light/60 hover:text-accent-green">
				← All posts
			</a>
		</div>
	</section>

	<!-- Posts -->
	<Section variant="light" class="border-t border-dark/10">
		{#if data.posts.length > 0}
			<div class="grid gap-6 md:grid-cols-2">
				{#each data.posts as post}
					<a
						href="{base}/blog/{post.slug}"
						class="group rounded-lg border border-dark/20 bg-white p-6 transition-all hover:border-accent-green hover:shadow-lg"
					>
						<div class="mb-3 flex flex-wrap gap-2">
							{#each post.tags as tag}
								<Tag label={tag} href="{base}/blog/tag/{tag}" variant={tag === data.tag ? 'green' : 'blue'} />
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
			<p class="text-center font-mono text-dark/60">No posts with this tag yet.</p>
		{/if}
	</Section>
</div>
