import { HiTrendingUp } from "react-icons/hi";
import { Post } from "../../../utils/database";
import { FaArrowRight, FaClock, FaEye } from "react-icons/fa";
import { getTimeAgo } from "../../../functions/getTimeAgo";
import Loading from "../../ui/Loading";
import { formatDate } from "../../../functions/formatDate";
import { decodeHtml } from "../../../functions/decodeHtml";

// Composant Hero Section
interface HeroProp{
  post: Post
}

function extractImageUrlFromContent(content: string): string | null {
  const match = content.match(/<img [^>]*src="([^"]+)"[^>]*>/);
  return match ? match[1] : null;
}

export function HeroSection({ post }: HeroProp) {
    if (!post) {
      return (
        <Loading />
      )  
    }

    console.log(post)
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/40"></div>
      <img 
          src={extractImageUrlFromContent(post.content.rendered)|| "/default.jpg"} 
        alt={post.title.rendered}
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
      />
      
      <div className="relative container mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-2 mb-6">
            <HiTrendingUp className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-semibold">À la Une</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            {decodeHtml(post.title.rendered)}
          </h1>
          
          <div dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl" />
          
         
          
          <div className="flex flex-wrap items-center gap-6 mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">OI</span>
              </div>
              <div>
                <p className="font-semibold">Ouaké-Infos</p>
                <p className="text-gray-400 text-sm">{formatDate(post.date)}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-gray-400">
              <span className="flex items-center space-x-1">
                <FaClock className="w-4 h-4" />
                <span>{getTimeAgo(post.date)}</span>
              </span>
              <span className="flex items-center space-x-1">
                <FaEye className="w-4 h-4" />
                <span>789 vues</span>
              </span>
            </div>
          </div>
          
          <a 
            href={`/${post.slug}`}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105"
          >
            <span>Lire l'article complet</span>
            <FaArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
;