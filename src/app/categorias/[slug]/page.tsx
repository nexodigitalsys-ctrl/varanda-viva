import { notFound } from "next/navigation";
import { CATEGORIES, PRODUCTS } from "@/lib/constants";
import CategoriaClient from "./CategoriaClient";

export async function generateStaticParams() {
  return CATEGORIES.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);
  if (!category) return { title: "Categoria não encontrada" };

  return {
    title: `${category.name} | Mendes Design - Uberaba`,
    description: `Confira nossa linha de ${category.name.toLowerCase()} para área externa. Móveis em fibra sintética e alumínio. Entrega em Uberaba e região.`,
  };
}

export default async function CategoriaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);
  if (!category) return notFound();

  const categoryProducts = PRODUCTS.filter((p) => p.category === slug);

  return (
    <CategoriaClient category={category} products={categoryProducts} />
  );
}
