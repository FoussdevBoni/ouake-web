import { getAllSlugs } from '@/functions/wpPosts';

export async function generateStaticParams() {
  const posts = await getAllSlugs();
  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}
