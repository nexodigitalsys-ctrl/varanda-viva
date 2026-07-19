"use client";

import { useState } from "react";
import { Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      <section className="py-20 bg-verde">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-areia text-sm font-semibold uppercase tracking-widest">
            Contato
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mt-4 mb-6">
            Vamos conversar
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Solicite um orçamento personalizado ou tire suas dúvidas. Atendemos Uberaba e região do
            Triângulo Mineiro.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-serif text-3xl font-bold text-verde mb-8">
                Fale conosco
              </h2>

              <div className="space-y-6 mb-10">
                <a
                  href="https://wa.me/5534999999999?text=Olá!%20Gostaria%20de%20um%20orçamento."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-offwhite rounded-2xl hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center">
                    <MessageCircle size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-verde">WhatsApp</div>
                    <div className="text-gray-500 text-sm">(34) 99999-9999</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-offwhite rounded-2xl">
                  <div className="w-12 h-12 bg-verde/10 rounded-xl flex items-center justify-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#2D5A3D"
                      strokeWidth="2"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-verde">Email</div>
                    <div className="text-gray-500 text-sm">contato@varandavivadesign.com.br</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-offwhite rounded-2xl">
                  <div className="w-12 h-12 bg-verde/10 rounded-xl flex items-center justify-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#2D5A3D"
                      strokeWidth="2"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-verde">Endereço</div>
                    <div className="text-gray-500 text-sm">Uberaba, MG</div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-offwhite rounded-2xl">
                <h3 className="font-semibold text-verde mb-2">Horário de atendimento</h3>
                <p className="text-gray-600 text-sm">
                  Segunda a sexta: 09h às 18h
                  <br />
                  Sábado: 09h às 13h
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-3xl font-bold text-verde mb-8">
                Solicite seu orçamento
              </h2>

              {submitted ? (
                <div className="text-center py-16 bg-offwhite rounded-2xl">
                  <Send size={48} className="mx-auto text-verde mb-4" />
                  <h3 className="font-serif text-2xl font-bold text-verde mb-2">
                    Mensagem enviada!
                  </h3>
                  <p className="text-gray-600">
                    Entraremos em contato em breve. Obrigado!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="nome">Nome *</Label>
                    <Input
                      id="nome"
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="telefone">Telefone *</Label>
                      <Input
                        id="telefone"
                        placeholder="(34) 99999-9999"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="cidade">Cidade *</Label>
                      <Input
                        id="cidade"
                        placeholder="Uberaba"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="mensagem">Mensagem *</Label>
                    <Textarea
                      id="mensagem"
                      placeholder="Descreva o que você precisa..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-terracota hover:bg-terracota/90 text-white py-4 rounded-full font-semibold text-lg"
                  >
                    <Send size={18} />
                    Enviar mensagem
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
