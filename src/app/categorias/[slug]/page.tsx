import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Filter } from "lucide-react";
import { CATEGORIES, PRODUCTS } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";

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
    title: `${category.name} | Varanda Viva - Uberaba`,
    description: `Confira nossa linha de ${category.name.toLowerCase()} para área externa. Móveis em fibra sintética e alumínio. Entrega em Uberaba e região.`,
  };
}

export default async function CategoriaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);
  if (!category) return notFound();

  const categoryProducts = PRODUCTS.filter((p) => p.category === slug);

  return (
    <div className="pt-20">
      {/* Breadcrumb + Hero */}
      <section className="py-16 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-verde">
              Home
            </Link>
            <span>/</span>
            <span className="text-verde font-medium">{category.name}</span>
          </nav>

          <h1 className="font-serif text-4xl md:text-5xl font-bold text-verde mb-4">
            {category.name}
          </h1>
          <p className="text-gray-600 max-w-2xl text-lg">{category.description}</p>
        </div>
      </section>

      {/* Produtos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filtros (visuais por enquanto) */}
          <div className="flex items-center gap-4 mb-8 pb-6 border-b">
            <div className="flex items-center gap-2 text-gray-600">
              <Filter size={18} />
              <span className="font-medium">Filtros:</span>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-full bg-verde text-white text-sm font-medium">
                Todos
              </button>
              <button className="px-4 py-2 rounded-full bg-offwhite text-gray-600 text-sm font-medium hover:bg-gray-100">
                Fibra sintética
              </button>
              <button className="px-4 py-2 rounded-full bg-offwhite text-gray-600 text-sm font-medium hover:bg-gray-100">
                Corda náutica
              </button>
              <button className="px-4 py-2 rounded-full bg-offwhite text-gray-600 text-sm font-medium hover:bg-gray-100">
                Alumínio
              </button>
            </div>
          </div>

          {categoryProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                Nenhum produto encontrado nesta categoria.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-terracota font-medium mt-4"
              >
                Voltar para home
                <ArrowRight size={16} />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/produtos/${product.slug}`}
                  className="product-card bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="relative aspect-square overflow-hidden bg-gray-100">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="product-img object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-verde mb-1">
                      {product.name}
                    </h3>
                    <p className="text-gray-500 text-sm mb-3">
                      {product.materials.join(" · ")}
                    </p>
                    <div className="flex items-center gap-2 mb-4">
                      {product.colors.map((color) => {
                        const colorMap: Record<string, string> = {
                          "Off-white": "#F5F5F0",
                          Areia: "#D4C4A8",
                          Marrom: "#8B6914",
                          Grafite: "#4A4A4A",
                          Preto: "#1A1A1A",
                          "Verde musgo": "#2D5A3D",
                          Terracota: "#C75B3A",
                          Azul: "#3B5998",
                          Branco: "#FFFFFF",
                        };
                        return (
                          <span
                            key={color}
                            className="w-4 h-4 rounded-full border border-gray-200"
                            style={{ backgroundColor: colorMap[color] || "#ccc" }}
                            title={color}
                          />
                        );
                      })}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-terracota font-bold text-lg">
                        {formatPrice(product.price)}
                      </span>
                      <span className="text-verde text-sm font-medium flex items-center gap-1">
                        Ver detalhes
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FAQ da categoria */}
      <section className="py-16 bg-offwhite">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-verde mb-8 text-center">
            Perguntas frequentes
          </h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-2xl">
              <h3 className="font-semibold text-verde mb-2">
                Quanto tempo duram os móveis de fibra sintética?
              </h3>
              <p className="text-gray-600">
                Móveis de fibra sintética de qualidade duram entre 15 e 20 anos com os cuidados
                adequados. Oferecemos garantia estrutural de 5 anos.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl">
              <h3 className="font-semibold text-verde mb-2">
                Vocês entregam em Uberlândia?
              </h3>
              <p className="text-gray-600">
                Sim! Entregamos em toda a região do Triângulo Mineiro, incluindo Uberlândia, Araxá,
                Frutal e cidades em um raio de 250km de Uberaba.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl">
              <h3 className="font-semibold text-verde mb-2">
                Posso personalizar as cores?
              </h3>
              <p className="text-gray-600">
                Sim, trabalhamos com diversas cores de fibra. Entre em contato para ver as opções
                disponíveis e solicitar uma peça personalizada.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}