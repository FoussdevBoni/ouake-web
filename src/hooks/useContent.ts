"use client"

import  { useEffect, useState } from 'react'
import { Content } from '../utils/database'
import { contentService } from '../services/contentsService'

interface Props {
   
    contentId?: string, 
}

export default function useContent({contentId}: Props) {
    const [content , setContent] = useState<Content | null>(null)
    const [loading , setLoading] = useState(true)
   const [error , setError] = useState<any>()

    const getContent = async ()=>{
        try {
          
           if (contentId) {
                const contentData = await contentService.getContentById(contentId)
                setContent(contentData)
            }
          setLoading(false)

        } catch (error) {
          setError(error)
        }
    }


    useEffect(()=>{
        getContent()
    } , [contentId ])

  return {content , loading , error , getContent}
}
