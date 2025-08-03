"use client"

import  { useEffect, useState } from 'react'
import { Post } from '../utils/database'
import { postsService } from '../services/postsServices'


interface Props {
 slug?: string
}
export default function usePost({ slug} : Props) {
  const [post , setPost ]= useState<Post>()
  const [error , setError] = useState()
  const [loading , setLoading] = useState(true)

 const getPost = async ()=>{
    try {
        if (slug) {
            const post = await postsService.getPostBySlug(slug)
            setPost(post)
        }
        setLoading(false)
    } catch (error: any) {
       setError(error)
    }
 }



  useEffect(()=>{
    getPost()
  } , [])

  return {post , loading , error , getPost}
}
