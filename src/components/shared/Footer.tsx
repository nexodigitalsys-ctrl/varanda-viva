import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-verde flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M3 21h18"/>
                  <path d="M5 21V7l8-4 8 4v14"/>
                  <path d="M9 21v-6h6v6"/>
                  <path d="M10 9h4"/>
                  <path d="M10 13h4"/>
                </svg>
              </div>
              <div>
                <span className="font-serif text-xl font-bold">Varanda Viva</span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-terracota">Design</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Móveis outdoor de fibra sintética e corda náutica. Design autoral, durabilidade e conforto para sua área externa.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4 text-areia">Categorias</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/categorias/sofas-externos" className="hover:text-white transition-colors">Sofás Externos</Link></li>
              <li><Link href="/categorias/cadeiras" className="hover:text-white transition-colors">Cadeiras</Link></li>
              <li><Link href="/categorias/mesas" className="hover:text-white transition-colors">Mesas</Link></li>
              <li><Link href="/categorias/espreguicadeiras" className="hover:text-white transition-colors">Espreguiçadeiras</Link></li>
              <li><Link href="/categorias/conjuntos" className="hover:text-white transition-colors">Conjuntos</Link></li>
            </ul>
          </div>

          {/* Institutional */}
          <div>
            <h4 className="font-semibold mb-4 text-areia">Institucional</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/sobre" className="hover:text-white transition-colors">Sobre nós</Link></li>
              <li><Link href="/como-comprar" className="hover:text-white transition-colors">Como comprar</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contato" className="hover:text-white transition-colors">Política de privacidade</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-areia">Contato</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Uberaba, MG
              </li>
              <li className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                (34) 99999-9999
              </li>
              <li className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                contato@varandavivadesign.com.br
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center items-center gap-2 mb-4">
          <div className="h-px w-12 bg-gray-600" />
          <span className="text-gray-500 text-xs uppercase tracking-[0.3em] font-light">
            Curadoria João Batista
          </span>
          <div className="h-px w-12 bg-gray-600" />
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2026 Varanda Viva Design. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="https://instagram.com/varandaviva" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-verde transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="https://facebook.com/varandaviva" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-verde transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}