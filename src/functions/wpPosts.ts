import { WP_API } from "@/utils/wpApi";

export async function getAllSlugs() {
  const res = await fetch(`${WP_API}/posts?per_page=50`);
  return await res.json();
}

export async function getPostBySlug(slug: string) {
  const res = await fetch(`${WP_API}/posts?slug=${slug}&_embed`);
  const data = await res.json();
  return data[0] || null;
}