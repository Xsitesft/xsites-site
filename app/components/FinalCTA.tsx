import Link from "next/link";

export default function FinalCTA() {
  return (
    <section id="cta-final" className="py-24 section-bg" aria-labelledby="cta-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold text-text mb-4">
          Encontrar uma solução para o meu negócio
        </h2>
        <p className="text-text-muted max-w-2xl mx-auto mb-8 sm:mb-10 text-base sm:text-lg">
          Vemos exemplos por setor e falamos sobre a melhor solução para o seu negócio.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
          <a
            href="#categorias"
            className="w-full sm:w-auto bg-gold text-bg py-3 px-6 sm:px-8 rounded font-semibold hover:bg-gold-light hover:text-bg transition focus-visible:outline-gold focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Ver exemplos
          </a>
          <Link
            href="/contacto"
            className="w-full sm:w-auto border border-gold text-gold-light py-3 px-6 sm:px-8 rounded font-semibold hover:bg-gold hover:text-bg transition focus-visible:outline-gold focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Pedir uma estimativa
          </Link>
          <a
            href="https://wa.me/244926311857"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border border-gold text-gold-light py-3 px-6 sm:px-8 rounded font-semibold hover:bg-gold hover:text-bg transition focus-visible:outline-gold focus-visible:outline-2 focus-visible:outline-offset-2 flex items-center justify-center gap-2"
            aria-label="Falar no WhatsApp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="21" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.74" />
            </svg>
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}