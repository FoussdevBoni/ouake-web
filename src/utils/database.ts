export interface Post {
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  _embedded?: {
    "wp:featuredmedia"?: {
      id: number;
      source_url: string;
      alt_text: string;
    }[];
    author?: {
      id: number;
      name: string;
      avatar_urls: {
        [key: string]: string;
      };
    }[];
    "wp:term"?: Array<
      {
        id: number;
        name: string;
        taxonomy: string;
        slug: string;
      }[]
    >;
  };
}

export interface Categorie {
  name: string,
  slug: string,
  id: string
}

export type ContentCategorie = 'Musique' | 'Danse' |    'Conte' |  'Comédie'| 'Chanson'
export type Type = 'video' |  'audio'
export interface Content {
  title: string,
  description: '',
  fileUrl?: any,
  type: Type,
  category: ContentCategorie,
  id?: string,
  author: string,
  createdAt?: string,
  size?: number, 
}
