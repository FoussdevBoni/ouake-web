"use client"
import { decodeHtml } from '@/functions/decodeHtml';
import { getTimeAgo } from '@/functions/getTimeAgo';
import usePosts from '@/hooks/usePosts';
import { Post } from '@/utils/database'
import React, { useState } from 'react'
import { FaBookmark, FaCalendarAlt, FaEnvelope, FaFacebook, FaLinkedin, FaPrint, FaShare, FaTags, FaTwitter, FaUser } from 'react-icons/fa';

interface Props {
 post: Post
}
export default function PostDetails({post}: Props) {

 


  const [showShareMenu, setShowShareMenu] = useState(false);
  const [fontSize, setFontSize] = useState('normal');
  const [isBookmarked, setIsBookmarked] = useState(false);


 

  const contentHTML = post?.content.rendered || "";
  const titleHTML = post?.title.rendered || "";
  const excerptHTML = post?.excerpt.rendered || "";

  const featuredMedia = post?._embedded?.["wp:featuredmedia"]?.[0];
  const imageUrl = featuredMedia?.source_url || "";
  const imageAlt = featuredMedia?.alt_text || post?.title.rendered;

  const authorName = post?._embedded?.author?.[0]?.name || "Anonyme";
  const categories = post?._embedded?.["wp:term"]?.[0]?.map((cat) => cat.name) || [];
   const {posts , loading: postsLoading} = usePosts({category: categories[0] || ''})
   const similaires = posts.filter(item=>(item.id!==post?.id))

  const shareUrl = window.location.href;
  const shareTitle = post?.title.rendered;

  
  return (
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Contenu principal */}
          <article className="lg:col-span-3">
            {/* En-tête de l'article */}
            <header className="mb-8">
              {categories.length > 0 && (
                <div className="mb-6">
                  <span className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-wide shadow-lg shadow-blue-500/25">
                    {categories[0]}
                  </span>
                </div>
              )}
              
              <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent leading-tight mb-6">
                {post.title.rendered}
              </h1>
              
              <div className="text-xl text-slate-700 font-light leading-relaxed mb-8 border-l-4 border-gradient-to-b from-blue-500 to-cyan-400 bg-gradient-to-r from-blue-50 to-cyan-50 pl-6 py-4 rounded-r-lg">
                <div dangerouslySetInnerHTML={{ __html: excerptHTML }} />
              </div>

              {/* Métadonnées avec style harmonisé */}
              <div className="flex flex-wrap items-center justify-between py-6 border-t border-b border-slate-200/70 bg-gradient-to-r from-slate-50/50 to-transparent rounded-lg px-6">
                <div className="flex items-center space-x-6 text-sm text-slate-600 mb-4 lg:mb-0">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg">
                      <FaUser className="text-white text-sm" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{authorName}</div>
                      <div className="text-xs text-slate-500">Journaliste</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaCalendarAlt className="text-slate-400" />
                    <time dateTime={post.date} className="font-medium text-slate-700">
                      {new Date(post.date).toLocaleDateString("fr-FR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit"
                      })}
                    </time>
                  </div>
                </div>

                {/* Actions de l'article avec style harmonisé */}
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setFontSize(fontSize === 'normal' ? 'large' : 'normal')}
                    className="px-3 py-2 text-slate-600 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 text-sm font-medium transition-all duration-300 rounded-lg border border-slate-200 hover:border-transparent hover:shadow-lg"
                  >
                    A+
                  </button>
                  <button
                    onClick={() => window.print()}
                    className="p-2 text-slate-600 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 rounded-lg border border-slate-200 hover:border-transparent hover:shadow-lg"
                  >
                    <FaPrint />
                  </button>
                  <button
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    className={`p-2 transition-all duration-300 rounded-lg border hover:shadow-lg ${
                      isBookmarked 
                        ? 'text-white bg-gradient-to-r from-blue-600 to-cyan-500 border-transparent shadow-lg shadow-blue-500/25' 
                        : 'text-slate-600 border-slate-200 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 hover:border-transparent'
                    }`}
                  >
                    <FaBookmark />
                  </button>
                  <div className="relative">
                    <button
                      onClick={() => setShowShareMenu(!showShareMenu)}
                      className="p-2 text-slate-600 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 rounded-lg border border-slate-200 hover:border-transparent hover:shadow-lg"
                    >
                      <FaShare />
                    </button>
                    {showShareMenu && (
                      <div className="absolute right-0 top-full mt-2 bg-white/90 backdrop-blur-lg border border-slate-200/50 rounded-xl shadow-xl p-4 w-48 z-10">
                        <div className="text-sm font-semibold text-slate-900 mb-3">Partager</div>
                        <div className="space-y-1">
                          <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`} 
                             className="flex items-center space-x-3 p-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 rounded-lg text-sm transition-all duration-200">
                            <FaTwitter className="text-blue-400" />
                            <span className="text-slate-700">Twitter</span>
                          </a>
                          <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                             className="flex items-center space-x-3 p-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 rounded-lg text-sm transition-all duration-200">
                            <FaFacebook className="text-blue-600" />
                            <span className="text-slate-700">Facebook</span>
                          </a>
                          <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                             className="flex items-center space-x-3 p-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 rounded-lg text-sm transition-all duration-200">
                            <FaLinkedin className="text-blue-700" />
                            <span className="text-slate-700">LinkedIn</span>
                          </a>
                          <a href={`mailto:?subject=${shareTitle}&body=${shareUrl}`}
                             className="flex items-center space-x-3 p-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 rounded-lg text-sm transition-all duration-200">
                            <FaEnvelope className="text-slate-600" />
                            <span className="text-slate-700">Email</span>
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </header>

            {/* Image principale */}
            {imageUrl && (
              <figure className="mb-8">
                <div className="relative overflow-hidden rounded-xl shadow-xl">
                  <img
                    src={imageUrl}
                    alt={imageAlt}
                    className="w-full h-auto transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <figcaption className="mt-4 text-sm text-slate-600 italic text-center">
                  {imageAlt}
                </figcaption>
              </figure>
            )}

            {/* Contenu de l'article */}
            <div className={`prose prose-lg max-w-none prose-slate ${fontSize === 'large' ? 'prose-xl' : ''}`}>
              <div className="prose-headings:bg-gradient-to-r prose-headings:from-slate-900 prose-headings:to-slate-700 prose-headings:bg-clip-text prose-headings:text-transparent prose-a:text-blue-600 prose-a:hover:text-cyan-500 prose-a:transition-colors">
                <div
                  className="article-content"
                  dangerouslySetInnerHTML={{ __html: contentHTML }}
                />
              </div>
            </div>

            {/* Tags avec style harmonisé */}
            {categories.length > 0 && (
              <div className="mt-12 pt-8 border-t border-slate-200">
                <div className="flex items-center space-x-2 mb-4">
                  <FaTags className="text-slate-400" />
                  <span className="text-sm font-semibold text-slate-700">Mots-clés :</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {categories.map((category, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-slate-100 to-slate-50 text-slate-700 px-4 py-2 rounded-full text-sm font-medium hover:from-blue-50 hover:to-cyan-50 hover:text-blue-700 transition-all duration-300 cursor-pointer border border-slate-200/50 hover:border-blue-200 hover:shadow-lg"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Sidebar harmonisée */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Articles similaires */}
              <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border border-slate-200/50 shadow-lg">
                <h3 className="text-lg font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4">À lire aussi</h3>
                <div className="space-y-4">
                  {similaires.map((post) => (
                    <article onClick={()=>{
                      window.location.href=`/article/${post.slug}`
                    }} key={post.id} className="group cursor-pointer p-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-300">
                      <h4 className="text-sm font-semibold line-clamp-2 
                       leading-tight text-slate-900 group-hover:bg-gradient-to-r 
                       group-hover:from-blue-600 group-hover:to-cyan-500 
                       group-hover:bg-clip-text group-hover:text-transparent transition-all 
                       duration-300 leading-tight mb-2">
                        {decodeHtml(post.title.rendered)}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {getTimeAgo(post.date)}
                      </p>
                    </article>
                  ))}
                </div>
              </div>

              {/* Newsletter harmonisée */}
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white p-6 rounded-xl shadow-xl">
                <h3 className="text-lg font-bold mb-3">Newsletter</h3>
                <p className="text-sm mb-4 opacity-90">
                  Recevez l'essentiel de l'actualité chaque matin
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="w-full px-4 py-3 rounded-lg text-slate-900 text-sm placeholder-slate-500 border-0 focus:ring-2 focus:ring-white/50 transition-all duration-300"
                  />
                  <button className="w-full bg-white/90 backdrop-blur-sm text-blue-600 font-semibold py-3 rounded-lg text-sm hover:bg-white hover:shadow-lg transition-all duration-300">
                    S'abonner
                  </button>
                </div>
              </div>

              {/* Publicité avec style harmonisé */}
              <div className="bg-gradient-to-br from-slate-100 to-slate-50 p-6 rounded-xl text-center border border-slate-200/50">
                <div className="text-xs text-slate-500 mb-3 font-semibold">PUBLICITÉ</div>
                <div className="h-64 bg-gradient-to-br from-slate-200 to-slate-100 rounded-lg flex items-center justify-center">
                  <span className="text-slate-400 text-sm font-medium">Espace publicitaire</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
  )
}
