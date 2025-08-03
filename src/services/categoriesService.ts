import axios from "axios";
import { WP_API } from "../utils/wpApi";

export const categoriesServices = {
     async getCategories(){

        try {
          const categoryRes = await axios.get(`${WP_API}/categories`)  
           const categories = categoryRes.data
           return categories
        } catch (error) {
            
        }
    },
    
       async getCategorie(slug: string){

       try {
          const categoryRes = await axios.get(`${WP_API}/categories?slug=${slug}`)  
           const category = categoryRes.data[0]
           return category
        } catch (error) {
            
        }
    },


}