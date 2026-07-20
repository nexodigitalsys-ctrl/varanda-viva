export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  category: string;
  materials: string[];
  colors: string[];
  images: string[];
  featured: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  initials: string;
  city: string;
  rating: number;
  text: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
}

export const CATEGORIES: Category[] = [
  {
    id: "1",
    name: "Sofás Externos",
    slug: "sofas-externos",
    description: "Conforto e design para sua varanda gourmet",
    image: "https://kimi-web-img.moonshot.cn/img/modway.com/c333c06813fca1780eaa887d005f69147a928b9f.jpg",
  },
  {
    id: "2",
    name: "Cadeiras",
    slug: "cadeiras",
    description: "Design e ergonomia para área externa",
    image: "https://kimi-web-img.moonshot.cn/img/www.gardentrends.co.uk/01ef027d9d27f381d91c807a3bcdf8256db70330.jpg",
  },
  {
    id: "3",
    name: "Mesas",
    slug: "mesas",
    description: "Do bistrô ao jantar ao ar livre",
    image: "https://kimi-web-img.moonshot.cn/img/ak1.ostkcdn.com/061dc54d323c3332b994076dc7f4bdc542692726.jpg",
  },
  {
    id: "4",
    name: "Espreguiçadeiras",
    slug: "espreguicadeiras",
    description: "Relaxamento para sua área de lazer",
    image: "https://kimi-web-img.moonshot.cn/img/www.mcgeeandco.com/2caf5327909f83cb7e4629355d6c4d271a5d8411.jpg",
  },
  {
    id: "5",
    name: "Conjuntos",
    slug: "conjuntos",
    description: "Soluções completas para seu espaço",
    image: "https://kimi-web-img.moonshot.cn/img/cdn11.bigcommerce.com/7e6e107392c3f5ed89fc38fed4d94acf2d0fa200.jpg",
  },
  {
    id: "6",
    name: "Acessórios",
    slug: "acessorios",
    description: "Almofadas, puffs e mesas de apoio",
    image: "https://kimi-web-img.moonshot.cn/img/www.whitestores.co.uk/d9e83ba050aac3b3d718bbf15449a55456ca2314.png",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Sofá Modular Tramado",
    slug: "sofa-modular-tramado",
    description: "Sofá para área externa em alumínio e fibra sintética tramada. Resistente à chuva e sol intenso. Design autoral exclusivo.",
    price: 2890,
    category: "sofas-externos",
    materials: ["Fibra sintética", "Alumínio anodizado"],
    colors: ["Areia", "Verde musgo", "Preto"],
    images: [
      "https://kimi-web-img.moonshot.cn/img/m.media-amazon.com/5f51543073d2a2022478497a130b66439a84cbd1.jpg",
    ],
    featured: true,
  },
  {
    id: "2",
    name: "Sofá Box 2 Lugares",
    slug: "sofa-box-2-lugares",
    description: "Sofá compacto em fibra sintética e alumínio. Ideal para varandas menores e áreas gourmet.",
    price: 1950,
    category: "sofas-externos",
    materials: ["Fibra sintética", "Alumínio"],
    colors: ["Marrom", "Areia"],
    images: [
      "https://kimi-web-img.moonshot.cn/img/www.neptune.com/73cc69180f0c10faef1c01f27996fd8163f79a83.webp",
    ],
    featured: false,
  },
  {
    id: "3",
    name: "Cadeira de Balanço",
    slug: "cadeira-balanco",
    description: "Cadeira pendente em corda náutica e alumínio. Conforto único para relaxar na varanda.",
    price: 1450,
    category: "cadeiras",
    materials: ["Corda náutica", "Alumínio anodizado"],
    colors: ["Areia", "Terracota"],
    images: [
      "https://kimi-web-img.moonshot.cn/img/quatropi.com/9c648955dfec3df273d9fbed39cde11fb9abc71d.jpg",
    ],
    featured: true,
  },
  {
    id: "4",
    name: "Cadeira de Jantar Tramada",
    slug: "cadeira-jantar-tramada",
    description: "Cadeira para área externa com assento tramado em fibra sintética. Elegância e durabilidade.",
    price: 680,
    category: "cadeiras",
    materials: ["Fibra sintética", "Alumínio"],
    colors: ["Azul", "Marrom", "Preto"],
    images: [
      "https://kimi-web-img.moonshot.cn/img/www.mcgeeandco.com/a98299596cc5cc7c28fad1f82d77353916d807c9.jpg",
    ],
    featured: false,
  },
  {
    id: "5",
    name: "Mesa de Centro Tramada",
    slug: "mesa-centro-tramada",
    description: "Mesa de centro em fibra sintética com tampo de vidro. Design moderno para área externa.",
    price: 1200,
    category: "mesas",
    materials: ["Fibra sintética", "Vidro temperado", "Alumínio"],
    colors: ["Areia"],
    images: [
      "https://kimi-web-img.moonshot.cn/img/hauserstores.com/4652d59da69fbee94750e726b64df649d202cded.png",
    ],
    featured: true,
  },
  {
    id: "6",
    name: "Mesa Bistrô Fibra",
    slug: "mesa-bistro-fibra",
    description: "Mesa bistrô redonda em fibra sintética com tampo de vidro. Perfeita para cantinhos externos.",
    price: 890,
    category: "mesas",
    materials: ["Fibra sintética", "Vidro", "Alumínio"],
    colors: ["Marrom", "Areia"],
    images: [
      "https://kimi-web-img.moonshot.cn/img/images.thdstatic.com/43d4ea156a929da68e39abde5564cd3b863fb5ca.jpg",
    ],
    featured: false,
  },
  {
    id: "7",
    name: "Espreguiçadeira Premium",
    slug: "espreguicadeira-premium",
    description: "Espreguiçadeira em fibra sintética para piscina. Design ergonômico e resistente à água clorada.",
    price: 1980,
    category: "espreguicadeiras",
    materials: ["Fibra sintética", "Alumínio"],
    colors: ["Branco", "Areia"],
    images: [
      "https://kimi-web-img.moonshot.cn/img/www.mcgeeandco.com/2caf5327909f83cb7e4629355d6c4d271a5d8411.jpg",
    ],
    featured: true,
  },
  {
    id: "8",
    name: "Espreguiçadeira Piscina",
    slug: "espreguicadeira-piscina",
    description: "Espreguiçadeira fixa em fibra sintética e alumínio. Ideal para áreas de piscina e spa.",
    price: 1650,
    category: "espreguicadeiras",
    materials: ["Fibra sintética", "Alumínio"],
    colors: ["Marrom", "Areia"],
    images: [
      "https://kimi-web-img.moonshot.cn/img/aquaoutdoors.com/2df637cf51728e63c2a6cbcd724427b554b75e3b.jpg",
    ],
    featured: false,
  },
  {
    id: "9",
    name: "Conjunto Porto Belo",
    slug: "conjunto-porto-belo",
    description: "Conjunto 4 lugares em corda sintética e alumínio. Mesa com tampo de vidro e cadeiras tramadas.",
    price: 3200,
    category: "conjuntos",
    materials: ["Corda sintética", "Vidro", "Alumínio epóxi"],
    colors: ["Azul", "Marrom"],
    images: [
      "https://kimi-web-img.moonshot.cn/img/www.outdoorinteriors.com/b0cdf062e71ce9a69af7636ff22257096571c17f.jpg",
    ],
    featured: true,
  },
  {
    id: "10",
    name: "Conjunto Arcobalena",
    slug: "conjunto-arcobalena",
    description: "Conjunto 4 poltronas + mesa em fibra sintética. Tecido em corda náutica com estampas exclusivas.",
    price: 2800,
    category: "conjuntos",
    materials: ["Fibra sintética", "Corda náutica", "Alumínio"],
    colors: ["Marrom", "Areia"],
    images: [
      "https://kimi-web-img.moonshot.cn/img/www.gardenesque.com/e44117ea3e25848516baf7a68ee871484c303af0.jpg",
    ],
    featured: false,
  },
  {
    id: "11",
    name: "Puff Redondo Fibra",
    slug: "puff-redondo-fibra",
    description: "Puff redondo em fibra sintética. Versátil e confortável para áreas externas.",
    price: 450,
    category: "acessorios",
    materials: ["Fibra sintética", "Alumínio"],
    colors: ["Areia", "Marrom", "Preto"],
    images: [
      "https://kimi-web-img.moonshot.cn/img/hauserstores.com/4652d59da69fbee94750e726b64df649d202cded.png",
    ],
    featured: false,
  },
  {
    id: "12",
    name: "Mesa de Apoio Tramada",
    slug: "mesa-apoio-tramada",
    description: "Mesa lateral tramada em fibra sintética. Complemento perfeito para sofás externos.",
    price: 580,
    category: "acessorios",
    materials: ["Fibra sintética", "Alumínio"],
    colors: ["Areia", "Marrom"],
    images: [
      "https://kimi-web-img.moonshot.cn/img/cdn11.bigcommerce.com/c8d0be1a2897850dabfc5af9f513c72b22ffe9b4.jpg",
    ],
    featured: false,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Mariana F.",
    initials: "MF",
    city: "Uberaba, MG",
    rating: 5,
    text: "O sofá modular transformou nossa varanda gourmet. A qualidade da fibra é impressionante, depois de 2 anos no sol intenso de Uberaba está como novo.",
  },
  {
    id: "2",
    name: "Ricardo S.",
    initials: "RS",
    city: "Uberlândia, MG",
    rating: 5,
    text: "Atendimento excelente e entrega pontual em Uberlândia. O conjunto de mesa e cadeiras para nossa área de churrasqueira ficou perfeito.",
  },
  {
    id: "3",
    name: "Ana L.",
    initials: "AL",
    city: "Araxá, MG",
    rating: 5,
    text: "Compramos as espreguiçadeiras para a área da piscina. Design lindo, conforto incrível e realmente resistente à água clorada.",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "como-escolher-moveis-area-externa-uberaba",
    title: "Como escolher móveis para área externa no calor de Uberaba",
    excerpt: "Guia completo para selecionar móveis outdoor que resistam ao clima quente do Triângulo Mineiro.",
    date: "2026-07-15",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
  {
    id: "2",
    slug: "fibra-sintetica-vs-corda-nautica",
    title: "Fibra sintética vs corda náutica: qual escolher?",
    excerpt: "Entenda as diferenças entre os materiais mais populares para móveis de área externa.",
    date: "2026-07-10",
    readTime: "4 min",
    image: "https://kimi-web-img.moonshot.cn/img/modway.com/c333c06813fca1780eaa887d005f69147a928b9f.jpg",
  },
  {
    id: "3",
    slug: "10-ideias-decorar-varanda-gourmet",
    title: "10 ideias para decorar sua varanda gourmet",
    excerpt: "Inspire-se com tendências de design para transformar sua varanda em um espaço convidativo.",
    date: "2026-07-05",
    readTime: "6 min",
    image: "https://kimi-web-img.moonshot.cn/img/cdn11.bigcommerce.com/7e6e107392c3f5ed89fc38fed4d94acf2d0fa200.jpg",
  },
];

export const COLORS = [
  { name: "Off-white", hex: "#F5F5F0" },
  { name: "Areia", hex: "#D4C4A8" },
  { name: "Marrom", hex: "#8B6914" },
  { name: "Grafite", hex: "#4A4A4A" },
  { name: "Preto", hex: "#1A1A1A" },
  { name: "Verde musgo", hex: "#2D5A3D" },
  { name: "Terracota", hex: "#C75B3A" },
];