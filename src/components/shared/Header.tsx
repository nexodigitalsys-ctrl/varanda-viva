"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/#categorias", label: "Categorias" },
  { href: "/#produtos", label: "Produtos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed w-full top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-verde flex items-center justify-center group-hover:scale-105 transition-transform">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21h18"/>
                  <path d="M5 21V7l8-4 8 4v14"/>
                  <path d="M9 21v-6h6v6"/>
                  <path d="M10 9h4"/>
                  <path d="M10 13h4"/>
                </svg>
              </div>
              <div>
                <span className="font-serif text-xl font-bold text-verde tracking-tight">Varanda Viva</span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-terracota font-medium">Design</span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link text-sm font-medium text-gray-700 hover:text-verde transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Link
                href="/contato"
                className="hidden md:inline-flex bg-terracota text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-terracota/90 transition-colors"
              >
                Orçamento
              </Link>
              <button
                className="md:hidden p-2"
                onClick={() => setMobileOpen(true)}
                aria-label="Abrir menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu — full screen overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex justify-between items-center h-20">
              <Link href="/" className="flex items-center gap-3 group" onClick={() => setMobileOpen(false)}>
                <div className="w-10 h-10 rounded-lg bg-verde flex items-center justify-center group-hover:scale-105 transition-transform">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21h18"/>
                    <path d="M5 21V7l8-4 8 4v14"/>
                    <path d="M9 21v-6h6v6"/>
                    <path d="M10 9h4"/>
                    <path d="M10 13h4"/>
                  </svg>
                </div>
                <div>
                  <span className="font-serif text-xl font-bold text-verde tracking-tight">Varanda Viva</span>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-terracota font-medium">Design</span>
                </div>
              </Link>
              <button
                className="p-2"
                onClick={() => setMobileOpen(false)}
                aria-label="Fechar menu"
              >
                <X size={28} />
              </button>
            </div>
          </div>

          <nav className="flex flex-col items-center justify-center flex-1 gap-2 px-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-xl font-medium text-gray-800 hover:text-verde py-4 w-full text-center transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contato"
              onClick={() => setMobileOpen(false)}
              className="bg-terracota text-white text-center px-8 py-4 rounded-full font-semibold text-lg mt-6 hover:bg-terracota/90 transition-colors w-full max-w-xs"
            >
              Solicitar Orçamento
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
