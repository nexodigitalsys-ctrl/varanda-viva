"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Check, MapPin, Star, Layers, FileCheck } from "lucide-react";
import { CATEGORIES, PRODUCTS, TESTIMONIALS } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";

export default function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".section-reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const featuredProducts = PRODUCTS.filter((p) => p.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(45,90,61,0.7) 0%, rgba(26,26,26,0.5) 100%), url('https://kimi-web-img.moonshot.cn/img/sc04.alicdn.com/a9af27044f3f2cd918ddf8ac8f8a363b71da8f3e.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-offwhite/90" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/30">
              <span className="w-2 h-2 bg-terracota rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">
                Móveis outdoor em Uberaba e região
              </span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
              Móveis que resistem
              <br />
              ao tempo,
              <br />
              <span className="text-areia">valorizam seu espaço</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl leading-relaxed">
              Design autoral em fibra sintética e corda náutica. Durabilidade de 15+ anos para sua
              varanda, jardim ou área gourmet.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#produtos"
                className="bg-terracota text-white px-8 py-4 rounded-full font-semibold text-center flex items-center justify-center gap-2 hover:bg-terracota/90 transition-colors"
              >
                Ver Catálogo
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/contato"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-center hover:bg-white/10 transition-colors"
              >
                Solicitar Orçamento
              </Link>
            </div>

            <div className="flex items-center gap-8 mt-12 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <Shield size={18} />
                <span>Garantia 5 anos</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={18} />
                <span>Fibra premium</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Uberaba · MG</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section id="categorias" className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 section-reveal">
            <span className="text-terracota text-sm font-semibold uppercase tracking-widest">
              Coleções
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-verde mt-3 mb-4">
              Para cada espaço, um design
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Móveis em fibra sintética, corda náutica e alumínio anodizado. Resistentes ao sol,
              chuva e tempo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((category) => (
              <Link
                key={category.id}
                href={`/categorias/${category.slug}`}
                className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-gray-100 card-hover"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-verde/90 via-verde/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-2xl font-bold text-white mb-1">
                    {category.name}
                  </h3>
                  <p className="text-white/80 text-sm">{category.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-areia text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Explorar</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Layers size={28} className="text-verde" />,
                title: "Design Autoral",
                desc: "Peças exclusivas desenvolvidas por designers brasileiros",
              },
              {
                icon: <Shield size={28} className="text-verde" />,
                title: "Fibra Premium",
                desc: "Materiais de alta resistência UV e umidade",
              },
              {
                icon: <FileCheck size={28} className="text-verde" />,
                title: "Garantia 5 Anos",
                desc: "Garantia estrutural em toda nossa linha de produtos",
              },
              {
                icon: <MapPin size={28} className="text-verde" />,
                title: "Entrega Regional",
                desc: "Uberaba e região em até 250km de distância",
              },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-offwhite section-reveal">
                <div className="w-14 h-14 mx-auto mb-4 bg-verde/10 rounded-xl flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-verde mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produtos Destaque */}
      <section id="produtos" className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12 section-reveal">
            <div>
              <span className="text-terracota text-sm font-semibold uppercase tracking-widest">
                Destaques
              </span>
              <h2 className="font-serif text-4xl font-bold text-verde mt-2">Mais desejados</h2>
            </div>
            <Link
              href="/#produtos"
              className="hidden md:flex items-center gap-2 text-verde font-medium hover:text-terracota transition-colors"
            >
              Ver todos
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="product-card bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="product-img object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-terracota text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Mais vendido
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-verde mb-1">{product.name}</h3>
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
                    <Link
                      href={`/produtos/${product.slug}`}
                      className="bg-verde text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-verde/90 transition-colors"
                    >
                      Orçar
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="section-reveal">
              <span className="text-terracota text-sm font-semibold uppercase tracking-widest">
                Nossa História
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-verde mt-3 mb-6">
                Artesanalidade e design em cada trama
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Fundada em Uberaba, no coração do Triângulo Mineiro, a Varanda Viva Design nasceu
                da paixão por transformar áreas externas em verdadeiros refúgios. Cada peça é
                desenvolvida com atenção aos detalhes, utilizando materiais premium que resistem ao
                intenso calor da região.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Trabalhamos com fibra sintética de alta performance, corda náutica e alumínio
                anodizado, garantindo durabilidade de 15+ anos sem perder a beleza original. Nosso
                compromisso é com a excelência, a sustentabilidade e a satisfação de cada cliente.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-verde">6+</div>
                  <div className="text-sm text-gray-500">Anos de experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-verde">500+</div>
                  <div className="text-sm text-gray-500">Projetos entregues</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-verde">250km</div>
                  <div className="text-sm text-gray-500">Raio de entrega</div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-center text-gray-400 text-xs uppercase tracking-[0.3em] font-light">
                  Curadoria João Batista
                </p>
              </div>
            </div>
            <div className="relative section-reveal">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="https://kimi-web-img.moonshot.cn/img/cdn11.bigcommerce.com/7e6e107392c3f5ed89fc38fed4d94acf2d0fa200.jpg"
                  alt="Showroom Varanda Viva"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-verde text-white p-6 rounded-2xl shadow-xl hidden md:block">
                <div className="font-serif text-2xl font-bold">Uberaba · MG</div>
                <div className="text-white/80 text-sm mt-1">Showroom e fábrica própria</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 section-reveal">
            <span className="text-terracota text-sm font-semibold uppercase tracking-widest">
              Depoimentos
            </span>
            <h2 className="font-serif text-4xl font-bold text-verde mt-3">
              O que dizem nossos clientes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gradient-to-br from-white to-offwhite p-8 rounded-2xl section-reveal"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={18} className="fill-terracota text-terracota" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-verde/20 flex items-center justify-center text-verde font-bold">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-verde">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-verde relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1.5" fill="white" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#pattern)" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 section-reveal">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para transformar seu espaço?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Solicite um orçamento personalizado. Atendemos Uberaba e região do Triângulo Mineiro
            com entrega e montagem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5534999999999?text=Olá!%20Vi%20o%20site%20da%20Varanda%20Viva%20e%20gostaria%20de%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-terracota text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-terracota/90 transition-colors flex items-center justify-center gap-2"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              WhatsApp
            </a>
            <Link
              href="/#produtos"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Ver Catálogo Completo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}