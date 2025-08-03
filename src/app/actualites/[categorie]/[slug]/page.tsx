import GlobalLayout from '@/components/layouts/GlobalLayout';
import PostDetails from '@/components/details/PostDetails';
import SEO from '@/components/ui/SEO';
import { getPostBySlug } from '@/functions/wpPosts';
import { decodeHtml } from '@/functions/decodeHtml';
import { notFound } from 'next/navigation';


interface PageProps {
  params: {
    slug: string;
  };
}


export async function generateMetadata({ params }: PageProps) {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: decodeHtml(post.title.rendered),
    description: decodeHtml(post.excerpt.rendered),
  };
}

export default async function PostPage({ params }: PageProps) {
  const post = await getPostBySlug(params.slug);
  if (!post) return notFound();

  const categories = post._embedded?.['wp:term']?.[0]?.map((cat: any) => cat.name) || [];

  return (
    <GlobalLayout className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <SEO
        title={decodeHtml(post.title.rendered)}
        description={decodeHtml(post.excerpt.rendered)}
      />

      <nav className="bg-gradient-to-r from-slate-100/80 to-slate-50/80 backdrop-blur-sm border-b border-slate-200/50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm text-slate-600">
            <a href="/" className="hover:text-blue-600 font-medium">Accueil</a>
            <span className="text-slate-400">/</span>
            {categories.length > 0 && (
              <>
                <a href="#" className="hover:text-cyan-600 font-medium">{categories[0]}</a>
                <span className="text-slate-400">/</span>
              </>
            )}
            <span className="text-slate-900 font-semibold">Article</span>
          </div>
        </div>
      </nav>

      <PostDetails post={post} />
    </GlobalLayout>
  );
}
