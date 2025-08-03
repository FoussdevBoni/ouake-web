"use client"

import { useEffect, useState } from 'react'
import { Post } from '../utils/database'
import { postsService } from '../services/postsServices'

interface Props {
  category?: string
}

export default function usePosts({ category }: Props) {
  const [posts, setPosts] = useState<Post[]>([])
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  const getPosts = async () => {
    setLoading(true)
    setError(null)
    try {
      const postsData = category
        ? await postsService.getPostsByCategory(category)
        : await postsService.getPosts()
      setPosts(postsData)
    } catch (err) {
      setError(err as Error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getPosts()
  }, [category])

  return { posts, loading, error, refetch: getPosts }
}
