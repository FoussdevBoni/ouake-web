import { Post } from "../utils/database";

export const mockPosts: Post[] = [
  {
    id: 1,
    date: "2025-05-27T10:00:00",
    slug: "benin-cooperation-france",
    title: {
      rendered: "Le Bénin renforce sa coopération économique avec la France",
    },
    excerpt: {
      rendered:
        "Une délégation française de haut niveau s'est rendue à Cotonou pour discuter de nouveaux accords commerciaux et d'investissements dans les secteurs clés de l'économie béninoise.",
    },
    content: {
      rendered: `<p>Une délégation française de haut niveau s'est rendue à Cotonou pour discuter de nouveaux accords commerciaux et d'investissements dans les secteurs clés de l'économie béninoise. Ces accords visent à renforcer la coopération bilatérale et stimuler la croissance économique locale.</p>`,
    },
    _embedded: {
      "wp:featuredmedia": [
        {
          id: 101,
          source_url:
            "https://images.unsplash.com/photo-1581091012184-7f3c1b0b0f5e?w=800&h=600&fit=crop",
          alt_text: "Délégation économique en réunion",
        },
      ],
      author: [
        {
          id: 10,
          name: "Jean Dupont",
          avatar_urls: {
            "24": "https://randomuser.me/api/portraits/thumb/men/10.jpg",
            "48": "https://randomuser.me/api/portraits/men/10.jpg",
            "96": "https://randomuser.me/api/portraits/men/10.jpg",
          },
        },
      ],
      "wp:term": [
        [
          {
            id: 201,
            name: "Économie",
            taxonomy: "category",
            slug: "economie",
          },
        ],
      ],
    },
  },
  {
    id: 2,
    date: "2025-05-27T08:30:00",
    slug: "festival-arts-culture-ouake",
    title: {
      rendered: "Festival des Arts et de la Culture : Ouaké à l'honneur",
    },
    excerpt: {
      rendered:
        "La commune de Ouaké accueille la 15ème édition du Festival National des Arts et de la Culture avec des représentations exceptionnelles venues de tout le pays.",
    },
    content: {
      rendered: `<p>La commune de Ouaké accueille la 15ème édition du Festival National des Arts et de la Culture avec des représentations exceptionnelles venues de tout le pays. Cet événement met en lumière la richesse culturelle béninoise.</p>`,
    },
    _embedded: {
      "wp:featuredmedia": [
        {
          id: 102,
          source_url:
            "https://images.unsplash.com/photo-1564865883734-7163a09f0f13?w=800&h=600&fit=crop",
          alt_text: "Spectacle du festival à Ouaké",
        },
      ],
      author: [
        {
          id: 11,
          name: "Fatou B.",
          avatar_urls: {
            "24": "https://randomuser.me/api/portraits/thumb/women/11.jpg",
            "48": "https://randomuser.me/api/portraits/women/11.jpg",
            "96": "https://randomuser.me/api/portraits/women/11.jpg",
          },
        },
      ],
      "wp:term": [
        [
          {
            id: 202,
            name: "Culture",
            taxonomy: "category",
            slug: "culture",
          },
        ],
      ],
    },
  },
  
];
