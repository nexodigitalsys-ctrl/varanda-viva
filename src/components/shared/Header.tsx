"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/#categorias", label: "Categorias" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/#produtos", label: "Produtos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const close = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      setMounted(true);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    if (mobileOpen) {
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    }
  }, [mobileOpen, close]);

  return (
    <>
      <header className="fixed w-full top-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/5 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full border-2 border-gold flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="font-serif text-sm font-bold text-gold leading-none">MD</span>
              </div>
              <div>
                <span className="font-serif text-lg font-bold text-gold tracking-[0.15em]">MENDES</span>
                <span className="block text-[10px] uppercase tracking-[0.3em] text-gold-light font-medium">Design</span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link text-sm font-medium text-text-secondary hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/5534998992309?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento."
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex bg-gold text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gold-hover transition-colors"
              >
                Orçamento
              </a>
              <button
                className="md:hidden p-2"
                onClick={() => setMobileOpen(true)}
                aria-label="Abrir menu"
                aria-expanded={mobileOpen}
              >
                <Menu size={24} className="text-gold" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={close}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[80%] max-w-sm bg-[#141414]/95 backdrop-blur-xl border-l border-gold/20 shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-20 border-b border-white/10 shrink-0">
          <Link href="/" className="flex items-center gap-3 group" onClick={close}>
            <div className="w-10 h-10 rounded-full border-2 border-gold flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="font-serif text-sm font-bold text-gold leading-none">MD</span>
            </div>
            <div>
              <span className="font-serif text-lg font-bold text-gold tracking-[0.15em]">MENDES</span>
              <span className="block text-[10px] uppercase tracking-[0.3em] text-gold-light font-medium">Design</span>
            </div>
          </Link>
          <button
            className="p-2 rounded-lg hover:bg-white/5 transition-colors"
            onClick={close}
            aria-label="Fechar menu"
          >
            <X size={24} className="text-gold" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              className={`block px-6 py-4 text-lg font-medium text-text hover:bg-gold/5 hover:text-gold transition-all duration-200 ${
                mounted && mobileOpen
                  ? "translate-x-0 opacity-100"
                  : "translate-x-4 opacity-0"
              }`}
              style={{ transitionDelay: mounted && mobileOpen ? `${i * 50}ms` : "0ms" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="px-6 pb-6 pt-4 border-t border-white/10 shrink-0">
          <a
            href="https://wa.me/5534998992309?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className={`block text-center bg-gold text-black px-6 py-4 rounded-full font-semibold text-lg hover:bg-gold-hover transition-all duration-200 ${
              mounted && mobileOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: mounted && mobileOpen ? `${navLinks.length * 50}ms` : "0ms" }}
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </>
  );
}
