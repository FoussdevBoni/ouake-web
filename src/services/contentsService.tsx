
import {
    collection,
    addDoc,
    getDocs,
    query,
    where,
    doc,
    updateDoc,
    deleteDoc,
    getDoc
    
  } from "firebase/firestore";
import { Content } from "../utils/database";
import { db } from "../utils/firebase";
  
  
  const contentsRef = collection(db, "contents");
  
  export const contentService = {
    // ➕ Créer un contenu
    async createContent(data: Content): Promise<Content> {
      try {
        const docRef = await addDoc(contentsRef, {
          ...data,
          createdAt: new Date().toISOString(),
        });
        return { id: docRef.id, ...data };
      } catch (error) {
        console.error("🔥 Erreur createContent:", error);
        throw error;
      }
    },
  
    // 📥 Récupérer tous les contenus
    async getContents(): Promise<Content[]> {
      try {
        const snapshot = await getDocs(contentsRef);
        return snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as Content[];
      } catch (error) {
        console.error("🔥 Erreur getContent:", error);
        throw error;
      }
    },

     
     // Récupérer les contents par un attribut donné
      async getContentsByAttribute(
        attribute?: string,
        value?: string | number,
      ): Promise<Content[]> {
        try {
          const contentsCollection = collection(db, 'contents');
          const contentsQuery = query(
            contentsCollection,
            where(attribute || '', '==', value),
          );
          const snapshot = await getDocs(contentsQuery);
    
          const contents: Content[] = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })) as Content[];
          return contents;
    
        } catch (error) {
          console.error(`Error fetching contents by ${attribute}:`, error);
          throw error;
        }
      },
  
    // 🔍 Rechercher un contenu par mot-clé
    async searchContents(keyword: string): Promise<Content[]> {
      try {
        const q = query(
          contentsRef,
          where("title", ">=", keyword),
          where("title", "<=", keyword + "\uf8ff")
        );
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as Content[];
      } catch (error) {
        console.error("🔥 Erreur searchContent:", error);
        throw error;
      }
    },
  
    // ✏️ Mettre à jour un contenu
    async updateContent(id: string, data: Partial<Content>): Promise<void> {
      try {
        const docRef = doc(db, "contents", id);
        await updateDoc(docRef, data);
      } catch (error) {
        console.error("🔥 Erreur updateContent:", error);
        throw error;
      }
    },
  
    // ❌ Supprimer un contenu
    async deleteContent(id: string): Promise<void> {
      try {
        const docRef = doc(db, "contents", id);
        await deleteDoc(docRef);
      } catch (error) {
        console.error("🔥 Erreur deleteContent:", error);
        throw error;
      }
    },
  
    // 🔍 (optionnel) Get un contenu spécifique
    async getContentById(id: string): Promise<Content | null> {
      try {
        const docRef = doc(db, "contents", id);
        const snapshot = await getDoc(docRef);
        if (snapshot.exists()) {
          return { id: snapshot.id, ...snapshot.data() } as Content;
        } else {
          return null;
        }
      } catch (error) {
        console.error("🔥 Erreur getContentById:", error);
        throw error;
      }
    },
  };
  