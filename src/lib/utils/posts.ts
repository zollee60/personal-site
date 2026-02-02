export interface PostMeta {
	title: string;
	description: string;
	date: string;
	tags: string[];
	published: boolean;
}

export interface Post extends PostMeta {
	slug: string;
}

export async function getPosts(): Promise<Post[]> {
	const modules = import.meta.glob('/src/posts/*.md', { eager: true });

	const posts: Post[] = [];

	for (const path in modules) {
		const module = modules[path] as { metadata: PostMeta };
		const slug = path.split('/').pop()?.replace('.md', '') ?? '';

		if (module.metadata?.published !== false) {
			posts.push({
				...module.metadata,
				slug
			});
		}
	}

	return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostsByTag(tag: string): Promise<Post[]> {
	const posts = await getPosts();
	return posts.filter((post) => post.tags?.includes(tag));
}

export async function getAllTags(): Promise<string[]> {
	const posts = await getPosts();
	const tags = new Set<string>();

	posts.forEach((post) => {
		post.tags?.forEach((tag) => tags.add(tag));
	});

	return Array.from(tags).sort();
}

export function formatDate(dateString: string): string {
	const date = new Date(dateString);
	return date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}

export function formatMonthYear(dateString: string): string {
	const date = new Date(dateString);
	return date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long'
	});
}

export async function getAllMonths(): Promise<string[]> {
	const posts = await getPosts();
	const monthsSet = new Set<string>();

	posts.forEach((post) => {
		monthsSet.add(formatMonthYear(post.date));
	});

	// Sort chronologically (most recent first)
	return Array.from(monthsSet).sort((a, b) => {
		const dateA = new Date(a);
		const dateB = new Date(b);
		return dateB.getTime() - dateA.getTime();
	});
}
