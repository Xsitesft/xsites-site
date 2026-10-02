import Image from "next/image";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 section-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text mb-6">Exemplos do que podemos criar</h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Veja exemplos de como podemos apresentar negócios profissionais na web.
          </p>
          <p className="text-text-muted text-sm mt-2">Exemplos conceptuais — demonstrativos.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          <article className="group glass-card rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow">
            <Image
              src="/assets/images/mockup-clinica.webp"
              alt="Exemplo conceptual: site para clínica"
              width={1200}
              height={600}
              sizes="(max-width: 640px) 100vw, 50vw"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-text mb-2">Exemplo conceptual: site para clínica</h3>
              <p className="text-text-muted">
                Portal institucional com pedidos de marcação pelo WhatsApp.
              </p>
            </div>
          </article>
          <article className="group glass-card rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow">
            <Image
              src="/assets/images/mockup-loja.webp"
              alt="Exemplo conceptual: site para loja"
              width={1200}
              height={600}
              sizes="(max-width: 640px) 100vw, 50vw"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-text mb-2">Exemplo conceptual: catálogo para loja</h3>
              <p className="text-text-muted">
                Catálogo de produtos com pedidos pelo WhatsApp.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}