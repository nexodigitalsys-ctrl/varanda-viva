"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/lib/supabase";

interface ProdutoClientProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProdutoClient({ product, relatedProducts }: ProdutoClientProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/5534999999999?text=Olá!%20Tenho%20interesse%20no%20${encodeURIComponent(
    product.name
  )}%20-%20${encodeURIComponent(selectedColor)}`;

  return (
    <div className="pt-20">
      <section className="py-8 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-verde">Home</Link>
            <span>/</span>
            <Link href={`/categorias/${product.category}`} className="hover:text-verde">
              {product.category === "sofas-externos"
                ? "Sofás Externos"
                : product.category === "espreguicadeiras"
                ? "Espreguiçadeiras"
                : product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </Link>
            <span>/</span>
            <span className="text-verde font-medium">{product.name}</span>
          </nav>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 mb-4">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {product.images.length > 1 && (
                <div className="flex gap-2">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`relative w-20 h-20 rounded-lg overflow-hidden ${
                        i === selectedImage ? "ring-2 ring-verde" : "opacity-60"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-verde mb-4">
                {product.name}
              </h1>
              <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>
              <div className="text-3xl font-bold text-terracota mb-6">
                {formatPrice(product.price)}
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-verde mb-3">Cores disponíveis</h3>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-full border-2 transition-all ${
                        selectedColor === color ? "border-verde scale-110" : "border-gray-200"
                      }`}
                      style={{ backgroundColor: colorMap[color] || "#ccc" }}
                      title={color}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-2">Selecionado: {selectedColor}</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-verde mb-2">Materiais</h3>
                <ul className="space-y-1">
                  {product.materials.map((material) => (
                    <li key={material} className="flex items-center gap-2 text-gray-600">
                      <Check size={16} className="text-verde" />
                      {material}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-terracota text-white py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-terracota/90 transition-colors"
                >
                  <MessageCircle size={20} />
                  Pedir orçamento no WhatsApp
                </a>
                <Button
                  onClick={() => setShowForm(!showForm)}
                  variant="outline"
                  className="w-full py-4 rounded-full font-semibold border-2 border-verde text-verde hover:bg-verde hover:text-white"
                >
                  {showForm ? "Fechar formulário" : "Solicitar orçamento por email"}
                </Button>
              </div>

              {showForm && (
                <div className="mt-6 p-6 bg-offwhite rounded-2xl">
                  {submitted ? (
                    <div className="text-center py-4">
                      <Check size={48} className="mx-auto text-verde mb-2" />
                      <h3 className="font-semibold text-verde">Orçamento enviado!</h3>
                      <p className="text-gray-600">Entraremos em contato em breve.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="nome">Nome</Label>
                        <Input
                          id="nome"
                          placeholder="Seu nome"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email-produto">Email</Label>
                        <Input
                          id="email-produto"
                          type="email"
                          placeholder="seu@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="telefone">Telefone</Label>
                        <Input
                          id="telefone"
                          placeholder="(34) 99999-9999"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="cidade">Cidade</Label>
                        <Input
                          id="cidade"
                          placeholder="Uberaba"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="mensagem">Mensagem</Label>
                        <Textarea
                          id="mensagem"
                          placeholder="Descreva o que você precisa..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          rows={3}
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-verde hover:bg-verde/90 text-white py-3 rounded-full"
                      >
                        Enviar orçamento
                      </Button>
                    </form>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="py-16 bg-offwhite">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-bold text-verde mb-8">
              Produtos relacionados
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <Link
                  key={p.id}
                  href={`/produtos/${p.slug}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="relative aspect-square overflow-hidden bg-gray-100">
                    <Image
                      src={p.images[0]}
                      alt={p.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 25vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-verde mb-1">{p.name}</h3>
                    <p className="text-terracota font-bold">{formatPrice(p.price)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-verde mb-8 text-center">
            Perguntas sobre este produto
          </h2>
          <div className="space-y-4">
            <div className="bg-offwhite p-6 rounded-2xl">
              <h3 className="font-semibold text-verde mb-2">Qual o prazo de entrega?</h3>
              <p className="text-gray-600">
                O prazo de produção é de 15 a 30 dias úteis. A entrega em Uberaba é feita em até
                3 dias após a produção.
              </p>
            </div>
            <div className="bg-offwhite p-6 rounded-2xl">
              <h3 className="font-semibold text-verde mb-2">Preciso fazer manutenção?</h3>
              <p className="text-gray-600">
                A manutenção é mínima. Recomendamos limpar com água e sabão neutro a cada 3 meses.
              </p>
            </div>
            <div className="bg-offwhite p-6 rounded-2xl">
              <h3 className="font-semibold text-verde mb-2">Posso ver pessoalmente?</h3>
              <p className="text-gray-600">
                Sim! Visite nosso showroom em Uberaba. Agende pelo WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
