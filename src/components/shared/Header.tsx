"use client";

import { useState, useEffect, useCallback } from "react";
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
                aria-expanded={mobileOpen}
              >
                <Menu size={24} />
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
        className={`fixed top-0 right-0 z-50 h-full w-[80%] max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 h-20 border-b border-gray-100 shrink-0">
          <Link href="/" className="flex items-center gap-3 group" onClick={close}>
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
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={close}
            aria-label="Fechar menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Drawer nav */}
        <nav className="flex-1 overflow-y-auto py-4">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              className={`block px-6 py-4 text-lg font-medium text-gray-800 hover:bg-verde/5 hover:text-verde transition-all duration-200 ${
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

        {/* Drawer footer */}
        <div className="px-6 pb-6 pt-4 border-t border-gray-100 shrink-0">
          <Link
            href="/contato"
            onClick={close}
            className={`block text-center bg-terracota text-white px-6 py-4 rounded-full font-semibold text-lg hover:bg-terracota/90 transition-all duration-200 ${
              mounted && mobileOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: mounted && mobileOpen ? `${navLinks.length * 50}ms` : "0ms" }}
          >
            Solicitar Orçamento
          </Link>
        </div>
      </div>
    </>
  );
}
