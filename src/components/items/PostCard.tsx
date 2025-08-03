// components/PostCard.tsx
import useCategorie from "@/hooks/useCategorie";
import { getImg } from "../../functions/extractImageUrlFromContent";
import { formatDate } from "../../functions/formatDate";
import { Post } from "../../utils/database";
import Link from "next/link";

export default function PostCard({ post }: { post: Post }) {
  if (!post) {
    return null;
  }


  return (
    <Link href={`/actualites/tous/${post.slug}`}  className="group relative bg-white  shadow-lg 
    hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 
    hover:border-blue-200/50 transform hover:-translate-y-2">
      {/* Image avec overlay gradient */}
      <div className="relative overflow-hidden">
        <img 
          src={getImg(post.content.rendered) || "/default.jpg"} 
          className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110" 
          alt={post.title.rendered} 
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Badge catégorie (optionnel) */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-semibold rounded-full shadow-lg">
          Actualité
        </div>
        
        {/* Date overlay */}
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-1 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
          <span className="text-xs font-medium text-gray-700">{formatDate(post.date)}</span>
        </div>
      </div>

      {/* Contenu */}
      <div className="p-6">
        {/* Titre */}
        <h2 
          className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 
          leading-tight group-hover:text-blue-700 transition-colors duration-300" 
          dangerouslySetInnerHTML={{ __html: post.title.rendered }} 
        />
        
        {/* Métadonnées */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            {/* Avatar auteur */}
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-semibold">OI</span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Ouaké-Infos</p>
              <p className="text-xs text-gray-500 md:hidden">{formatDate(post.date)}</p>
            </div>
          </div>
          
          {/* Date (masquée sur mobile) */}
          <time className="hidden md:block text-sm text-gray-500 font-medium">
            {formatDate(post.date)}
          </time>
        </div>

        {/* Extrait (si disponible) */}
        {post.excerpt?.rendered && (
          <div 
            className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2"
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered.replace(/<[^>]*>/g, '') }}
          />
        )}

      
      </div>

      {/* Shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
      </div>
    </Link>
  );
}