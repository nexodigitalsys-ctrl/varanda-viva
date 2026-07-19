import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

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
  created_at?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export interface Orcamento {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  product_id?: string;
  message: string;
  status: "pending" | "contacted" | "closed";
  created_at: string;
}

export interface Newsletter {
  id: string;
  email: string;
  created_at: string;
}