"use client"

import { useState } from 'react';
import { FaFire, FaArrowRight } from 'react-icons/fa';
import { HiTrendingUp } from 'react-icons/hi';

import PostCard from '../components/items/PostCard';
import { HeroSection } from '../components/sections/home/Hero';
import usePosts from '../hooks/usePosts';
import GlobalLayout from '../components/layouts/GlobalLayout';
import { Categorie } from '../utils/database';
import SEO from '@/components/ui/SEO';
import { usePathname, useRouter  } from "next/navigation";
import Link from 'next/link';


// Composant Breaking News
function BreakingNews() {
  const breakingNews = [
    "Le gouvernement annonce de nouvelles mesures économiques",
    "Sommet de l'Union Africaine : le Bénin à l'honneur",
    "Ouverture du nouveau port autonome de Cotonou"
  ];

  const [currentIndex] = useState(0);

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-500 text-white py-3 overflow-hidden">
      <div className="container mx-auto px-4 flex items-center space-x-4">
        <div className="flex items-center space-x-2 bg-white/20 px-3 py-1 rounded-full">
          <FaFire className="w-4 h-4 animate-pulse" />
          <span className="font-bold text-sm">URGENT</span>
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            <span className="font-medium">{breakingNews[currentIndex]}</span>
          </div>
        </div>
      </div>
    </div>
  );
}



export default function HomePage() {
    const router = useRouter()

  const isActive = (path: string) => {
  const pathname = usePathname()
  return pathname === path
}
  
 const categories: Categorie[] = [
  {
   name: 'Politique',
   slug: 'politique',
   id: 'politique'
  }, 
   { id: "economie", name: "Économie", slug: "economie" },
  { id: "culture", name: "Culture", slug: "culture" },
  { id: "sport", name: "Sport", slug: "sport" },
  { id: "education", name: "Éducation", slug: "education" },
  { id: "sante", name: "Santé", slug: "sante" },
 ]
 
 
  const {posts: mockPosts} = usePosts({})

  const featuredPost = mockPosts[0];
  const latestPosts = mockPosts;
  return (
     <GlobalLayout>
      <SEO title={featuredPost?.title?.rendered || "Bienvenu sur Ouaké web. Votre plateforme d'infos en temps réel"} 
      description={featuredPost?.excerpt?.rendered || "Soyez informé "} />
    
      <BreakingNews />
      
      {/* Hero Section */}
      <HeroSection post={featuredPost} />
      
      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        
        {/* Section Trending */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <HiTrendingUp className="w-6 h-6 text-orange-500" />
              <h2 className="text-3xl font-bold text-gray-900">Tendances</h2>
            </div>
            <Link href="/actualites/tous" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-2">
              <span>Voir tout</span>
              <FaArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {latestPosts.map(post => (
                <PostCard key={post.id} post={post} />
              ))}
          </div>
        </section>

        {/* Filtres par catégorie */}
        <section className="mb-12">
          <div className="flex items-center justify-center mb-8">
            <div className="flex flex-wrap gap-3 bg-white rounded-2xl p-2 shadow-lg border">
              {categories.map(category => (
                <button
                  key={category.id}
                   onClick={() => {
                    router.push(`/actualites/${category.slug}`)

                  }}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 
                    cursor-pointer
                    ${
                      isActive(`/articles/${category.slug}`)
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Grille d'articles */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.slice(2).map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>

     

        {/* Newsletter CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative">
              <h2 className="text-3xl font-bold mb-4">Restez informé(e)</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Recevez notre newsletter quotidienne avec les actualités les plus importantes du Bénin et de l'Afrique
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Votre adresse email"
                  className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/25"
                />
                <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg">
                  S'abonner
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

    
     </GlobalLayout>
  );
}