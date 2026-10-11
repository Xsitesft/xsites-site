'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#servicos", label: "Serviços" },
    { href: "#pacotes", label: "Pacotes" },
    { href: "#processo", label: "Processo" },
    { href: "#portfolio", label: "Portfólio" },
    { href: "/contacto", label: "Contacto" },
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="glass-card sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2">
            <Image
              src="/assets/logo.svg"
              alt="X Sites"
              width={160}
              height={48}
            />
          </a>

          {/* Desktop navigation */}
          <ul className="hidden lg:flex gap-8 text-text-muted text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                {link.href === "/contacto" ? (
                  <Link href={link.href} className="hover:text-gold-light transition">
                    {link.label}
                  </Link>
                ) : (
                  <a href={link.href} className="hover:text-gold-light transition">
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile hamburger button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-text-muted hover:text-gold-light hover:bg-glass-light transition"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? "max-h-96 opacity-100 pb-6 mt-4" : "max-h-0 opacity-0"}`}
        >
          <ul className="flex flex-col gap-4 text-text-muted text-base">
            {navLinks.map((link) => (
              <li key={link.href}>
                {link.href === "/contacto" ? (
                  <Link
                    href={link.href}
                    className="block py-2 hover:text-gold-light transition"
                    onClick={closeMobileMenu}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className="block py-2 hover:text-gold-light transition"
                    onClick={closeMobileMenu}
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}