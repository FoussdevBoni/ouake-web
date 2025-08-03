"use client"

import  { useEffect, useState } from 'react'
import { Categorie } from '../utils/database'
import { categoriesServices } from '../services/categoriesService'


interface Props {
 slug?: string
}
export default function useCategorie({ slug} : Props) {
  const [categorie , setCategorie ]= useState<Categorie>()
  const [error , setError] = useState()
  const [loading , setLoading] = useState(true)

 const getCategorie = async ()=>{
    try {
        if (slug) {
            const categorie = await categoriesServices.getCategorie(slug)
            setCategorie(categorie)
        }
        setLoading(false)
    } catch (error: any) {
       setError(error)
    }
 }



  useEffect(()=>{
    getCategorie()
  } , [slug])

  return {categorie , loading , error , getCategorie}
}
