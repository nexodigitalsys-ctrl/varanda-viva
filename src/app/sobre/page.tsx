import { Shield, Heart, Truck, Award } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Sobre Nós | Varanda Viva Design - Uberaba",
  description:
    "Conheça a Varanda Viva Design. Artesanalidade, design autoral e materiais premium para móveis de área externa em Uberaba e região.",
};

export default function SobrePage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-verde relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="15" cy="15" r="1" fill="white" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-areia text-sm font-semibold uppercase tracking-widest">
            Nossa História
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mt-4 mb-6">
            Artesanalidade em cada trama
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Fundada em Uberaba, no coração do Triângulo Mineiro, a Varanda Viva Design nasceu da
            paixão por transformar áreas externas em verdadeiros refúgios.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-terracota text-sm font-semibold uppercase tracking-widest">
                Quem Somos
              </span>
              <h2 className="font-serif text-4xl font-bold text-verde mt-3 mb-6">
                Design que resiste ao tempo
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Cada peça é desenvolvida com atenção aos detalhes, utilizando materiais premium que
                resistem ao intenso calor da região. Trabalhamos com fibra sintética de alta
                performance, corda náutica e alumínio anodizado.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Nosso compromisso é com a excelência, a sustentabilidade e a satisfação de cada
                cliente. Garantimos durabilidade de 15+ anos sem perder a beleza original.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Do projeto à entrega, cada etapa é cuidadosamente planejada para superar as
                expectativas. Atendemos Uberaba e toda a região do Triângulo Mineiro.
              </p>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80"
                  alt="Showroom Varanda Viva"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-terracota text-white p-5 rounded-2xl shadow-xl hidden md:block">
                <div className="font-serif text-xl font-bold">6+ anos</div>
                <div className="text-white/80 text-sm mt-1">de experiência</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-terracota text-sm font-semibold uppercase tracking-widest">
              Valores
            </span>
            <h2 className="font-serif text-4xl font-bold text-verde mt-3">
              O que nos guia
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield size={28} className="text-verde" />,
                title: "Durabilidade",
                desc: "Materiais que resistem a 15+ anos de sol, chuva e uso intenso.",
              },
              {
                icon: <Heart size={28} className="text-verde" />,
                title: "Artesanalidade",
                desc: "Cada peça é produzida com cuidado artesanal por nossa equipe.",
              },
              {
                icon: <Truck size={28} className="text-verde" />,
                title: "Entrega Regional",
                desc: "Uberaba e região em até 250km de distância com montagem.",
              },
              {
                icon: <Award size={28} className="text-verde" />,
                title: "Garantia 5 Anos",
                desc: "Garantia estrutural em toda nossa linha de produtos.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center p-6 rounded-2xl bg-white">
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

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-verde">6+</div>
              <div className="text-gray-500 mt-1">Anos de experiência</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-verde">500+</div>
              <div className="text-gray-500 mt-1">Projetos entregues</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-verde">250km</div>
              <div className="text-gray-500 mt-1">Raio de entrega</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-verde">15+</div>
              <div className="text-gray-500 mt-1">Anos de durabilidade</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
