import { notFound } from "next/navigation";
import PostCard from "@/components/items/PostCard";
import GlobalLayout from "@/components/layouts/GlobalLayout";
import { Suspense } from "react";
import { WP_API } from "@/utils/wpApi";
import axios from "axios";

// Fonction pour récupérer les articles depuis l’API WordPress
async function getPostsByCategory(slug: string) {

        try {
          const categoryRes = await axios.get(`${WP_API}/categories?slug=${slug}`)  
           const category = categoryRes.data
          if (!category[0]) return [];
            const posts = await axios.get(`${WP_API}/posts?categories=${category[0].id}&_embed`);
              return posts.data;
        } catch (error) {
            
        }

}

// Fonction pour récupérer le nom de la catégorie (optionnel)
async function getCategoryName(slug: string) {
  if (slug === "tous") return null;

  const res = await fetch(
    `${WP_API}/categories?slug=${slug}`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) return null;
  const categories = await res.json();
  return categories[0]?.name || null;
}

export async function generateMetadata({ params }: { params: { categorie: string } }) {
  const name = await getCategoryName(params.categorie);
  return {
    title: name
      ? `Actualités ${name} - Ouaké Web`
      : "Toutes les actualités - Ouaké Web",
    description: name
      ? `Articles et infos sur le thème ${name}`
      : "Toutes les actualités de Ouaké et ses environs.",
  };
}

export default async function Page({ params }: { params: { categorie: string } }) {
  const { categorie: slug } = params;
  const [posts, categorieName] = await Promise.all([
    getPostsByCategory(slug),
    getCategoryName(slug),
  ]);

  if (slug !== "tous" && !categorieName) {
    notFound(); // si catégorie inconnue
  }

  return (
    <GlobalLayout className="min-h-screen flex flex-col bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white py-4 shadow-sm">
        <div className="container mx-auto px-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <a href="/" className="text-blue-600 hover:text-blue-800 transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>{categorieName || "Tous"}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {slug === "tous" || !categorieName
              ? "Toutes les actualités"
              : `Actualités ${categorieName}`}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {categorieName
              ? `Découvrez nos derniers articles sur le thème ${categorieName.toLowerCase()}`
              : "Découvrez nos derniers articles sur Ouaké Web"}
          </p>
        </div>

        {/* Posts */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: any) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-700">
              Aucun article disponible pour le moment
            </h3>
            <p className="text-gray-500 mt-2">
              Revenez plus tard pour découvrir nos nouveaux contenus
            </p>
          </div>
        )}
      </main>
    </GlobalLayout>
  );
}
