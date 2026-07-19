import { notFound } from "next/navigation";
import { PRODUCTS } from "@/lib/constants";
import ProdutoClient from "./ProdutoClient";

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return { title: "Produto não encontrado" };

  return {
    title: `${product.name} | Varanda Viva`,
    description: `${product.name} em ${product.materials.join(", ")}. Entrega em Uberaba/MG. Garantia 5 anos. Solicite orçamento!`,
  };
}

export default async function ProdutoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return notFound();

  return (
    <ProdutoClient
      product={product}
      relatedProducts={PRODUCTS.filter(
        (p) => p.category === product.category && p.id !== product.id
      ).slice(0, 4)}
    />
  );
}
