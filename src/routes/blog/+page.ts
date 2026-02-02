import { getPosts, getAllTags, getAllMonths } from '$lib/utils/posts';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const posts = await getPosts();
	const tags = await getAllTags();
	const months = await getAllMonths();
	return { posts, tags, months };
};
