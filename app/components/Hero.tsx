export default function Hero() {
  return (
    <section id="inicio" className="relative py-24 bg-bg overflow-hidden">
      <picture className="absolute inset-0 -z-10">
        <source media="(max-width: 768px)" srcSet="/assets/images/hero-bg-mobile.webp" type="image/webp" />
        <source srcSet="/assets/images/hero-bg.webp" type="image/webp" />
        <img src="/assets/images/hero-bg.webp" alt="" className="w-full h-full object-cover opacity-10" />
      </picture>
      <div className="max-w-7xl mx-auto px-4 text-text relative z-10">
        <div className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Sites profissionais para pequenas empresas em Angola
        </div>
        <p className="text-text/80 text-lg mb-8 max-w-2xl">
          Prazo a combinar após confirmação do escopo. Preço justo. Processo simples e transparente.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a href="https://wa.me/244926311857" className="bg-primary text-white py-3 px-6 rounded hover:opacity-90 transition flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="21" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.74"></path>
            </svg>
            Falar no WhatsApp
          </a>
          <a href="#contacto" className="bg-primary text-white py-3 px-6 rounded hover:opacity-90 transition flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 10.91" />
            </svg>
            Pedir orçamento
          </a>
        </div>
      </div>
    </section>
  );
}