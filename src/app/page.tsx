"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Check, MapPin, Star, Layers, FileCheck, Wrench, Paintbrush, RefreshCw } from "lucide-react";
import { CATEGORIES, PRODUCTS, TESTIMONIALS } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";

const WHATSAPP = "https://wa.me/5534998992309?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento.";

export default function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
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
            backgroundImage: `linear-gradient(135deg, rgba(10,10,10,0.92) 0%, rgba(20,20,20,0.85) 100%), url('https://kimi-web-img.moonshot.cn/img/sc04.alicdn.com/a9af27044f3f2cd918ddf8ac8f8a363b71da8f3e.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface/90" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              <span className="text-gold-light text-sm font-medium">Atendimento em Uberaba e região</span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl font-bold text-text leading-[1.1] mb-6">
              MENDES
              <br />
              <span className="text-gold">DESIGN</span>
            </h1>

            <p className="text-lg md:text-xl text-text-secondary mb-4 max-w-xl leading-relaxed">
              Móveis para Áreas Externas
            </p>
            <p className="text-base text-text-secondary/70 mb-10 max-w-xl leading-relaxed">
              Reformas e revitalização com qualidade e sofisticação. Troca de cordas náuticas, reforma em alumínio e revitalização completa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-black px-8 py-4 rounded-full font-semibold text-center flex items-center justify-center gap-2 hover:bg-gold-hover transition-colors"
              >
                Solicitar Orçamento
                <ArrowRight size={20} />
              </a>
              <Link
                href="/#servicos"
                className="border-2 border-gold/30 text-gold px-8 py-4 rounded-full font-semibold text-center hover:bg-gold/10 transition-colors"
              >
                Nossos Serviços
              </Link>
            </div>

            <div className="flex items-center gap-8 mt-12 text-text-secondary text-sm">
              <div className="flex items-center gap-2">
                <Shield size={18} className="text-gold" />
                <span>Garantia 5 anos</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={18} className="text-gold" />
                <span>Materiais premium</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-gold" />
                <span>Uberaba · MG</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-24 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 section-reveal">
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">Serviços</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-text mt-3 mb-4">
              Transformamos seu espaço
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Especialistas em reformas e revitalização de móveis para áreas externas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Wrench size={32} className="text-gold" />,
                title: "Troca de Cordas Náuticas",
                desc: "Renovamos o acabamento em corda náutica dos seus móveis. Acabamento premium com materiais de alta durabilidade.",
              },
              {
                icon: <Paintbrush size={32} className="text-gold" />,
                title: "Reformas em Alumínio",
                desc: "Pintura, restauração e reparo de estruturas em alumínio anodizado. Acabamento como novo.",
              },
              {
                icon: <RefreshCw size={32} className="text-gold" />,
                title: "Revitalização Completa",
                desc: "Renovação total do móvel: estrutura, acabamento, tecidos e detalhes. Seu móvel fica como novo.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-card-border rounded-2xl p-8 text-center section-reveal hover:border-gold/30 transition-colors">
                <div className="w-16 h-16 mx-auto mb-6 bg-gold/10 rounded-2xl flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-gold mb-3">{item.title}</h3>
                <p className="text-text-secondary text-sm mb-6 leading-relaxed">{item.desc}</p>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gold text-black px-6 py-3 rounded-full font-semibold text-sm hover:bg-gold-hover transition-colors"
                >
                  Pedir orçamento
                  <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section id="categorias" className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 section-reveal">
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">Coleções</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-text mt-3 mb-4">
              Para cada espaço, um design
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Móveis em fibra sintética, corda náutica e alumínio anodizado. Resistentes ao sol, chuva e tempo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((category) => (
              <Link
                key={category.id}
                href={`/categorias/${category.slug}`}
                className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-card card-hover"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-2xl font-bold text-text mb-1">{category.name}</h3>
                  <p className="text-text-secondary text-sm">{category.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Explorar</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Produtos Destaque */}
      <section id="produtos" className="py-24 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12 section-reveal">
            <div>
              <span className="text-gold text-sm font-semibold uppercase tracking-widest">Destaques</span>
              <h2 className="font-serif text-4xl font-bold text-text mt-2">Mais desejados</h2>
            </div>
            <Link
              href="/#produtos"
              className="hidden md:flex items-center gap-2 text-gold font-medium hover:text-gold-hover transition-colors"
            >
              Ver todos
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="product-card bg-card border border-card-border rounded-2xl overflow-hidden hover:border-gold/30 transition-colors"
              >
                <div className="relative aspect-square overflow-hidden bg-surface">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="product-img object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 bg-gold text-black text-xs font-semibold px-3 py-1 rounded-full">
                    Mais vendido
                  </div>
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
                      return (
                        <span key={color} className="w-4 h-4 rounded-full border border-card-border"
                          style={{ backgroundColor: colorMap[color] || "#ccc" }} title={color} />
                      );
                    })}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gold font-bold text-lg">{formatPrice(product.price)}</span>
                    <Link href={`/produtos/${product.slug}`}
                      className="bg-gold text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gold-hover transition-colors">
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
      <section id="sobre" className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="section-reveal">
              <span className="text-gold text-sm font-semibold uppercase tracking-widest">Nossa História</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-text mt-3 mb-6">
                Qualidade e sofisticação
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                Com atendimento em Uberaba e região, a Mendes Design é referência em reformas e revitalização de móveis para áreas externas. Cada peça é tratada com atenção aos detalhes e materiais premium.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                Nosso compromisso é devolver a beleza e funcionalidade dos seus móveis, garantindo durabilidade e acabamento impecável.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold">5+</div>
                  <div className="text-sm text-text-secondary">Anos de experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold">300+</div>
                  <div className="text-sm text-text-secondary">Projetos entregues</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold">250km</div>
                  <div className="text-sm text-text-secondary">Raio de atendimento</div>
                </div>
              </div>
            </div>
            <div className="relative section-reveal">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-card-border">
                <Image
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80"
                  alt="Mendes Design Showroom"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-gold text-black p-6 rounded-2xl shadow-xl hidden md:block">
                <div className="font-serif text-xl font-bold">Uberaba · MG</div>
                <div className="text-black/70 text-sm mt-1">Atendimento regional</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-24 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 section-reveal">
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">Depoimentos</span>
            <h2 className="font-serif text-4xl font-bold text-text mt-3">O que dizem nossos clientes</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="bg-card border border-card-border p-8 rounded-2xl section-reveal">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={18} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-text-secondary mb-6 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold font-bold text-sm">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-text">{testimonial.name}</div>
                    <div className="text-sm text-text-secondary">{testimonial.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gold relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1.5" fill="black" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#pattern)" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 section-reveal">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-6">
            Pronto para renovar seu espaço?
          </h2>
          <p className="text-black/70 text-lg mb-10 max-w-2xl mx-auto">
            Solicite um orçamento personalizado. Atendemos Uberaba e região com qualidade e sofisticação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-gold px-8 py-4 rounded-full font-semibold text-lg hover:bg-black/80 transition-colors flex items-center justify-center gap-2"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              WhatsApp
            </a>
            <Link
              href="/#servicos"
              className="border-2 border-black/20 text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-black/10 transition-colors"
            >
              Ver Serviços
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
