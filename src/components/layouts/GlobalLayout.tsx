"use client"
import { ReactNode } from 'react'
import Header from '../sections/Navbar'
import Footer from '../sections/Footer'
import useCategories from '../../hooks/useCategories'
import { LoadingPage } from '../ui/Loading'
import { Categorie } from '../../utils/database'

interface Props {
    children: ReactNode,
    className?: string
}
export default function GlobalLayout({children , className}:Props) {

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



  return (
    <div className={`min-h-screen flex flex-col bg-gray-50 ${className}`}>
        <Header navItems={navItems}/>
         {children}
         <Footer />
    </div>
  )
}
