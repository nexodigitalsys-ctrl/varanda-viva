"use client";

import { useState } from "react";
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

  return (
    <header className="fixed w-full top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
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

          {/* Desktop Nav */}
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

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link
              href="/contato"
              className="hidden md:inline-flex bg-terracota text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-terracota/90 transition-colors"
            >
              Orçamento
            </Link>
            <button
              className="md:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu fixed top-0 right-0 w-80 h-full bg-white shadow-2xl z-50 p-8 ${mobileOpen ? "open" : ""}`}>
        <button className="absolute top-6 right-6" onClick={() => setMobileOpen(false)}>
          <X size={24} />
        </button>
        <nav className="flex flex-col gap-6 mt-16">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-lg font-medium text-gray-800 hover:text-verde"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contato"
            onClick={() => setMobileOpen(false)}
            className="bg-terracota text-white text-center px-6 py-3 rounded-full font-semibold mt-4 hover:bg-terracota/90"
          >
            Solicitar Orçamento
          </Link>
        </nav>
      </div>
    </header>
  );
}