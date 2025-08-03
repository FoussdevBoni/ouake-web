"use client"

import  { useEffect, useState } from 'react'
import { Categorie } from '../utils/database'
import { categoriesServices } from '../services/categoriesService'



export default function useCategories() {
  const [categories , setCategories ]= useState<Categorie[]>([])
  const [error , setError] = useState()
  const [loading , setLoading] = useState(true)

 const getCategories = async ()=>{
    try {
       
           const categories = await categoriesServices.getCategories()
           setCategories(categories)
        setLoading(false)
    } catch (error: any) {
       setError(error)
    }
 }



  useEffect(()=>{
    getCategories()
  } , [])

  return {categories , loading , error , getCategories}
}
