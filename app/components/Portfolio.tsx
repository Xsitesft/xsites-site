import Image from "next/image";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text mb-6">Exemplos do que podemos criar</h2>
          <p className="text-text/80 max-w-2xl mx-auto">
            Veja exemplos de como podemos apresentar negócios profissionais na web.
          </p>
          <p className="text-text/50 text-sm mt-2">Exemplos conceptuais — demonstrativos.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          <article className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
            <Image
              src="/assets/images/mockup-clinica.webp"
              alt="Exemplo conceptual: site para clínica"
              width={1200}
              height={600}
              sizes="(max-width: 640px) 100vw, 50vw"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-text mb-2">Exemplo: site para clínica</h3>
              <p className="text-text/70">
                Portal institucional com agendamento online.
              </p>
            </div>
          </article>
          <article className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
            <Image
              src="/assets/images/mockup-loja.webp"
              alt="Exemplo conceptual: site para loja"
              width={1200}
              height={600}
              sizes="(max-width: 640px) 100vw, 50vw"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-text mb-2">Exemplo: catálogo com pedidos pelo WhatsApp</h3>
              <p className="text-text/70">
                Catálogo de produtos com integração WhatsApp.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}