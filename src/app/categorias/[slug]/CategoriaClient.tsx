"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Filter } from "lucide-react";
import type { Product } from "@/lib/supabase";

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

interface CategoriaClientProps {
  category: Category;
  products: Product[];
}

const MATERIALS = ["Fibra sintética", "Corda náutica", "Alumínio"];

function normalize(str: string): string {
  return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export default function CategoriaClient({ category, products }: CategoriaClientProps) {
  const [selected, setSelected] = useState("todos");

  const filtered = selected === "todos"
    ? products
    : products.filter((p) => p.materials.some((m) => normalize(m) === normalize(selected)));

  return (
    <div className="pt-20">
      <section className="py-16 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-text-secondary mb-6">
            <Link href="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <span className="text-gold font-medium">{category.name}</span>
          </nav>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-text mb-4">{category.name}</h1>
          <p className="text-text-secondary max-w-2xl text-lg">{category.description}</p>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-8 pb-6 border-b border-card-border">
            <div className="flex items-center gap-2 text-text-secondary shrink-0">
              <Filter size={18} />
              <span className="font-medium">Filtros:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button onClick={() => setSelected("todos")}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selected === "todos" ? "bg-gold text-black" : "bg-card text-text-secondary hover:bg-card-border"
                }`}>
                Todos
              </button>
              {MATERIALS.map((mat) => (
                <button key={mat} onClick={() => setSelected(mat)}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    selected === mat ? "bg-gold text-black" : "bg-card text-text-secondary hover:bg-card-border"
                  }`}>
                  {mat}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-text-secondary text-lg">Nenhum produto encontrado com este material.</p>
              <button onClick={() => setSelected("todos")}
                className="inline-flex items-center gap-2 text-gold font-medium mt-4 hover:underline">
                Ver todos os produtos <ArrowRight size={16} />
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((product) => (
                <Link key={product.id} href={`/produtos/${product.slug}`}
                  className="product-card bg-card border border-card-border rounded-2xl overflow-hidden hover:border-gold/30 transition-colors">
                  <div className="relative aspect-square overflow-hidden bg-surface">
                    <Image src={product.images[0]} alt={product.name} fill
                      className="product-img object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-text mb-1">{product.name}</h3>
                    <p className="text-text-secondary text-sm mb-3">{product.materials.join(" · ")}</p>
                    <div className="flex items-center gap-2 mb-4">
                      {product.colors.map((color) => {
                        const colorMap: Record<string, string> = {
                          "Off-white": "#F5F5F0", Areia: "#D4C4A8", Marrom: "#8B6914",
                          Grafite: "#4A4A4A", Preto: "#1A1A1A", "Verde musgo": "#2D5A3D",
                          Terracota: "#C75B3A", Azul: "#3B5998", Branco: "#FFFFFF",
                        };
                        return <span key={color} className="w-4 h-4 rounded-full border border-card-border"
                          style={{ backgroundColor: colorMap[color] || "#ccc" }} title={color} />;
                      })}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gold font-semibold text-sm">Orçar</span>
                      <span className="text-gold text-sm font-medium flex items-center gap-1">Ver detalhes <ArrowRight size={14} /></span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-surface-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-text mb-8 text-center">Perguntas frequentes</h2>
          <div className="space-y-4">
            {[
              { q: "Quanto tempo duram os móveis de fibra sintética?", a: "Móveis de fibra sintética de qualidade duram entre 15 e 20 anos com os cuidados adequados. Oferecemos garantia estrutural de 5 anos." },
              { q: "Vocês entregam em Uberlândia?", a: "Sim! Atendemos em toda a região do Triângulo Mineiro, incluindo Uberlândia, Araxá e cidades em um raio de 250km de Uberaba." },
              { q: "Posso personalizar as cores?", a: "Sim, trabalhamos com diversas cores de fibra. Entre em contato para ver as opções disponíveis e solicitar uma peça personalizada." },
            ].map((faq) => (
              <div key={faq.q} className="bg-card border border-card-border p-6 rounded-2xl">
                <h3 className="font-semibold text-gold mb-2">{faq.q}</h3>
                <p className="text-text-secondary">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
