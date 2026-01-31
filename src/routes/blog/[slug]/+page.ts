import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { PostMeta } from '$lib/utils/posts';

export const load: PageLoad = async ({ params }) => {
	try {
		const post = await import(`../../../posts/${params.slug}.md`);

		return {
			Content: post.default,
			meta: post.metadata as PostMeta
		};
	} catch {
		throw error(404, `Post not found: ${params.slug}`);
	}
};
