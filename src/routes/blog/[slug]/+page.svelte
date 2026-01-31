<script lang="ts">
	import { base } from '$app/paths';
	import { Tag } from '$lib/components';
	import { formatDate } from '$lib/utils/posts';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{data.meta.title} - Blog</title>
	<meta name="description" content={data.meta.description} />
</svelte:head>

<div class="bg-light text-dark">
	<!-- Header -->
	<section class="bg-dark py-12 text-light md:py-16">
		<div class="mx-auto max-w-3xl px-4">
			<div class="mb-4 flex flex-wrap gap-2">
				{#each data.meta.tags as tag}
					<Tag label={tag} href="{base}/blog/tag/{tag}" variant="blue" />
				{/each}
			</div>
			<h1 class="font-mono text-3xl font-bold md:text-4xl">
				{data.meta.title}
			</h1>
			<p class="mt-4 font-mono text-sm text-light/60">{formatDate(data.meta.date)}</p>
		</div>
	</section>

	<article class="pb-12 md:pb-16 pt-8">
		<div class="mx-auto max-w-3xl px-4">
			<!-- Content -->
			<div class="prose prose-lg max-w-none font-mono prose-headings:font-mono prose-headings:font-bold prose-headings:uppercase prose-headings:tracking-tight prose-headings:text-dark prose-p:text-dark/80 prose-a:text-accent-green prose-a:no-underline hover:prose-a:underline prose-strong:text-dark prose-code:rounded prose-code:bg-dark/10 prose-code:px-1 prose-code:py-0.5 prose-code:text-accent-green prose-code:before:content-none prose-code:after:content-none prose-pre:bg-dark prose-pre:text-light prose-pre:border prose-pre:border-dark/20 prose-li:text-dark/80 prose-blockquote:border-accent-green prose-blockquote:text-dark/70 mb-10">
				<data.Content />
			</div>

			<script src="https://utteranc.es/client.js"
                repo="zollee60/personal-site"
                issue-term="pathname"
                label="utterances-comment"
                theme="github-light"
                crossorigin="anonymous"
                async>
            </script>

			<!-- Back Link -->
			<div class="mt-8 border-t border-dark/10 pt-8">
				<a href="{base}/blog" class="font-mono text-sm text-accent-green hover:underline">
					← Back to all posts
				</a>
			</div>
		</div>
	</article>
</div>
