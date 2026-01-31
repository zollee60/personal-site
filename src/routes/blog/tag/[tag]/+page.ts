import { getPostsByTag } from '$lib/utils/posts';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const posts = await getPostsByTag(params.tag);
	return {
		tag: params.tag,
		posts
	};
};
