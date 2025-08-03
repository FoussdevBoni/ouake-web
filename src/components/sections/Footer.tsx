"use client"
import { Categorie } from "@/utils/database";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

export default function Footer() {
  const categories = [
    "Monde", "Afrique", "Culture", "Bénin", "Ouaké",
  ];

  const navItems: Categorie[] = [
   {
     name: 'Ouaké',
     slug: 'ouake',
     id: 'auake'
   } , 
   {
     name: 'Bénin',
     slug: 'benin',
     id: ''
   },
   {
       name: 'Afrique',
     slug: 'afrique',
     id: 'afrique'
   },
  
   {
       name: 'International',
     slug: 'international',
     id: 'international'
   },
  ]

  const socialLinks = [
    { icon: FaFacebook, href: "#", label: "Facebook", color: "hover:text-blue-500" },
    { icon: FaTwitter, href: "#", label: "Twitter", color: "hover:text-sky-400" },
    { icon: FaInstagram, href: "#", label: "Instagram", color: "hover:text-pink-500" },
    { icon: FaYoutube, href: "#", label: "YouTube", color: "hover:text-red-500" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-600" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-200 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600"></div>

      <div className="relative container mx-auto px-6 py-16">
        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* À propos - Section élargie */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">O</span>
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Ouaké-Infos
              </h2>
            </div>
            
            <p className="text-slate-400 leading-relaxed mb-8 text-lg">
              Votre source d'actualités de référence au Bénin. Nous vous apportons l'information en temps réel 
              sur le Bénin, l'Afrique et le monde avec rigueur et transparence.
            </p>

            {/* Contact info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer">
                <HiMail className="w-5 h-5 text-cyan-400" />
                <span className="text-sm">contact@ouake-infos.com</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer">
                <HiPhone className="w-5 h-5 text-cyan-400" />
                <span className="text-sm">+229 XX XX XX XX</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer">
                <HiLocationMarker className="w-5 h-5 text-cyan-400" />
                <span className="text-sm">Ouaké, Bénin</span>
              </div>
            </div>
          </div>

          {/* Navigation rapide */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Navigation</h3>
            <div className="grid grid-cols-1 gap-3">
              {navItems.slice(0, 5).map((cat) => (
                <Link
                  key={cat.id}
                  href={`/actualites/${cat.slug}`} 
                  className="group flex items-center space-x-2 text-slate-400 hover:text-cyan-400 transition-all duration-300 py-1"
                >
                  <div className="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="text-sm font-medium">{cat.name}</span>
                </Link>
              ))}
            </div>
            
          
          </div>

          {/* Liens et réseaux sociaux */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Suivez-nous</h3>
            
            {/* Réseaux sociaux */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <a 
                  key={label}
                  href={href} 
                  aria-label={label}
                  className={`group flex items-center space-x-3 p-3 bg-slate-800/50 rounded-xl border border-slate-700/50 ${color} transition-all duration-300 hover:bg-slate-700/50 hover:border-slate-600 hover:scale-105`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{label}</span>
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-6 border border-slate-700/50">
              <h4 className="text-lg font-semibold mb-3 text-white">Newsletter</h4>
              <p className="text-slate-400 text-sm mb-4">Recevez nos dernières actualités</p>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Votre email"
                  className="flex-1 px-4 py-2 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-sm"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-sm">
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Liens légaux */}
        <div className="mt-16 pt-8 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center space-x-6 text-sm text-slate-400">
              <a href="/mentions-legales" className="hover:text-cyan-400 transition-colors">Mentions légales</a>
              <a href="/politique-confidentialite" className="hover:text-cyan-400 transition-colors">Confidentialité</a>
              <a href="/contact" className="hover:text-cyan-400 transition-colors">Contact</a>
              <a href="/apropos" className="hover:text-cyan-400 transition-colors">À propos</a>
            </div>
            
            <div className="text-slate-400 text-sm">
              © {new Date().getFullYear()} <span className="text-cyan-400 font-semibold">Ouaké-Infos</span>. Tous droits réservés.
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
    </footer>
  );
}