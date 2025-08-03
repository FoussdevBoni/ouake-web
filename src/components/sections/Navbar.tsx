"use client";

import { usePathname, useRouter } from "next/navigation";
import { decodeHtml } from "../../functions/decodeHtml";
import { Categorie } from "../../utils/database";

interface Props {
  navItems: Categorie[];
}

export default function Header({ navItems }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 backdrop-blur-lg shadow-xl sticky top-0 z-50 border-b border-slate-700/50">
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo avec gradient */}
            <a href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">O</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Ouaké-Web
              </h1>
            </a>

            {/* Navigation desktop */}
            <nav className="flex items-center space-x-1 bg-slate-800/50 rounded-2xl p-2 border border-slate-700/50">
              <button
                key={"home"}
                onClick={() => router.push("/")}
                className={`relative  px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 ${
                  
                  isActive("/") 
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25" 
                    : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                } cursor-pointer`}
              >
                Accueil
                {isActive("/") && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full"></div>
                )}
              </button>

              {navItems.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => router.push(`/actualites/${cat.slug}`)}
                  className={`relative px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 ${
                    isActive(`/actualites/${cat.slug}`)
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25"
                      : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                  }  cursor-pointer`}
                >
                  {decodeHtml(cat.name)}
                  {isActive(`/actualites/${cat.slug}`) && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full"></div>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Layout */}
      <div className="lg:hidden">
        {/* Header supérieur mobile */}
        <div className="px-6 py-4 border-b border-slate-700/30">
          <div className="flex items-center justify-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold">O</span>
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Ouaké-Web
            </h1>
          </div>
        </div>

        {/* Navigation mobile scrollable */}
        <div className="relative">
          <div className="overflow-x-auto scrollbar-hide">
            <nav className="flex space-x-3 px-6 py-4 min-w-max">
              {navItems.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => router.push(`/articles/${cat.slug}`)}
                  className={`relative flex-shrink-0 px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                    isActive(`/articles/${cat.slug}`)
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25 scale-105"
                      : "text-slate-300 bg-slate-800/50 hover:bg-slate-700/70 hover:text-white border border-slate-700/50"
                  }`}
                >
                  {decodeHtml(cat.name)}
                  {isActive(`/articles/${cat.slug}`) && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-lg opacity-30 -z-10"></div>
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* Gradient fade sur les côtés */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-slate-900 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-slate-900 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </header>
  );
}
