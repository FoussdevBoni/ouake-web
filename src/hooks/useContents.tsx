"use client"

import { useEffect, useState } from "react"
import { Content } from "../utils/database"
import { contentService } from "../services/contentsService"



interface Props {
  attribute?: keyof Content,
  value?: any
}
export default function useContents({attribute , value}: Props) {
    const [loading , setLoading] = useState(true)
    const [error , setError] = useState(null)
    const [contents , setContents] = useState<Content[]>([])

    const getContents = async ()=>{
      try {
      
          const data = attribute && value ? await  contentService.
          getContentsByAttribute(attribute , value): 
          await  contentService.getContents()
          setContents(data)
      

       setLoading(false)
      } catch (error: any) {
        setError(error)
      }
   }

   const handleEdit = async(newContent: Content): Promise<void>=>{
     try {
      await contentService.updateContent(newContent?.id || "" , {
        ...newContent
      })
     } catch (error) {
      
     }
   }

   const handleCreate = async(newContent: Content): Promise<void>=>{
     try {
      await contentService.createContent({
        ...newContent
      })
     } catch (error) {
      
     }
   }

    const handleDelete = async(content: Content)=>{
     try {
      await contentService.deleteContent(content.id || "")
     } catch (error) {
      
     }
   }



    useEffect(()=>{
    

     getContents()
    } , [attribute , value])

  return {error , contents , loading , getContents , handleDelete , handleEdit , 
    handleCreate}
}

