import { Truck, CreditCard, Shield, Wrench } from "lucide-react";

export const metadata = {
  title: "Como Comprar | Mendes Design - Entrega e Pagamento",
  description: "Entenda como comprar móveis outdoor na Mendes Design. Prazos de entrega em Uberaba e região. Formas de pagamento.",
};

export default function ComoComprarPage() {
  const steps = [
    {
      number: "01",
      title: "Escolha",
      description: "Navegue pelo catálogo e escolha os móveis que mais combinam com seu espaço.",
    },
    {
      number: "02",
      title: "Orçamento",
      description: "Solicite um orçamento personalizado via WhatsApp ou formulário de contato.",
    },
    {
      number: "03",
      title: "Produção",
      description: "Após aprovação, iniciamos a produção artesanal da sua peça com prazo de 15-30 dias.",
    },
    {
      number: "04",
      title: "Entrega",
      description: "Entregamos e montamos os móveis no seu endereço em Uberaba e região.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold-light text-sm font-semibold uppercase tracking-widest">
            Como Comprar
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mt-4 mb-6">
            Simples e seguro
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Do orçamento à entrega, acompanhamos cada etapa para garantir sua satisfação.
          </p>
        </div>
      </section>

      {/* Passo a passo */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="text-6xl font-bold text-gold/20 mb-4">{step.number}</div>
                <h3 className="font-serif text-xl font-bold text-gold mb-3">{step.title}</h3>
                <p className="text-text-secondary">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Informações */}
      <section className="py-24 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card p-6 rounded-2xl text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-gold/10 rounded-xl flex items-center justify-center">
                <Truck size={28} className="text-gold" />
              </div>
              <h3 className="font-semibold text-gold mb-2">Prazos de Entrega</h3>
              <p className="text-text-secondary text-sm">
                Uberaba: 15 dias
                <br />
                Região 250km: 20-30 dias
              </p>
            </div>
            <div className="bg-card p-6 rounded-2xl text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-gold/10 rounded-xl flex items-center justify-center">
                <CreditCard size={28} className="text-gold" />
              </div>
              <h3 className="font-semibold text-gold mb-2">Formas de Pagamento</h3>
              <p className="text-text-secondary text-sm">
                Pix, transferência
                <br />
                Cartão (até 12x)
              </p>
            </div>
            <div className="bg-card p-6 rounded-2xl text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-gold/10 rounded-xl flex items-center justify-center">
                <Shield size={28} className="text-gold" />
              </div>
              <h3 className="font-semibold text-gold mb-2">Garantia</h3>
              <p className="text-text-secondary text-sm">
                5 anos de garantia
                <br />
                estrutural em todos os produtos
              </p>
            </div>
            <div className="bg-card p-6 rounded-2xl text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-gold/10 rounded-xl flex items-center justify-center">
                <Wrench size={28} className="text-gold" />
              </div>
              <h3 className="font-semibold text-gold mb-2">Manutenção</h3>
              <p className="text-text-secondary text-sm">
                Limpe com água e sabão neutro.
                <br />
                Evite produtos abrasivos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}