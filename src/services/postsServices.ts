import axios from 'axios'
import { WP_API } from '../utils/wpApi'
export const postsService = {
    async getPosts(){
        try {
          const response = await axios.get(`${WP_API}/posts`)
          return response.data
        } catch (error) {
            
        }
    },

    async getPostsByCategory(slug: string){

        try {
          const categoryRes = await axios.get(`${WP_API}/categories?slug=${slug}`)  
           const category = categoryRes.data
          if (!category[0]) return [];
            const posts = await axios.get(`${WP_API}/posts?categories=${category[0].id}&_embed`);
              return posts.data;
        } catch (error) {
            
        }
    },

    async getPostBySlug(slug: string){
     try {
     const res = await axios.get(`${WP_API}/posts?slug=${slug}&_embed`);
     const data = await res.data;
       return data[0];
     } catch (error) {
        
     }
    }
}