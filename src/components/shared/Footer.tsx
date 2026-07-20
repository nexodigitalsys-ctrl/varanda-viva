import Link from "next/link";
import Image from "next/image";

const WHATSAPP = "https://wa.me/5534998992309?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento.";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-text pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image src="/images/logo_md_joao.png" alt="MD" width={40} height={40} className="h-10 w-10" />
              <div>
                <span className="font-serif text-lg font-bold text-text tracking-[0.15em]">MENDES</span>
                <span className="block text-[10px] uppercase tracking-[0.3em] text-gold font-medium">Design</span>
              </div>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              Móveis para Áreas Externas. Reformas e revitalização com qualidade e sofisticação.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gold">Categorias</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><Link href="/categorias/sofas-externos" className="hover:text-gold transition-colors">Sofás Externos</Link></li>
              <li><Link href="/categorias/cadeiras" className="hover:text-gold transition-colors">Cadeiras</Link></li>
              <li><Link href="/categorias/mesas" className="hover:text-gold transition-colors">Mesas</Link></li>
              <li><Link href="/categorias/espreguicadeiras" className="hover:text-gold transition-colors">Espreguiçadeiras</Link></li>
              <li><Link href="/categorias/conjuntos" className="hover:text-gold transition-colors">Conjuntos</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gold">Institucional</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><Link href="/sobre" className="hover:text-gold transition-colors">Sobre nós</Link></li>
              <li><Link href="/como-comprar" className="hover:text-gold transition-colors">Como comprar</Link></li>
              <li><Link href="/blog" className="hover:text-gold transition-colors">Blog</Link></li>
              <li><Link href="/contato" className="hover:text-gold transition-colors">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gold">Contato</h4>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Uberaba, MG
              </li>
              <li className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                (34) 99899-2309
              </li>
              <li>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center items-center gap-2 mb-4">
          <div className="h-px w-12 bg-white/10" />
          <span className="text-text-secondary text-xs uppercase tracking-[0.3em] font-light">
            Mendes Design
          </span>
          <div className="h-px w-12 bg-white/10" />
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary text-sm">© 2026 Mendes Design. Todos os direitos reservados.</p>
          <p className="text-text-secondary text-sm">Atendimento em Uberaba e região</p>
        </div>
      </div>
    </footer>
  );
}
