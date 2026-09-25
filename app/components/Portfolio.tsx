export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text mb-6">Projetos recentes</h2>
          <p className="text-text/80 max-w-2xl mx-auto">
            Sites entregues com excelência para nossos clientes.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          <article className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
            <div className="w-full h-48 bg-border/50 flex items-center justify-center">
              <span className="text-text/50">Mockup Clínica</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-text mb-2">Site para clínica em Luanda</h3>
              <p className="text-text/70">
                Portal institucional com agendamento online.
              </p>
            </div>
          </article>
          <article className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
            <div className="w-full h-48 bg-border/50 flex items-center justify-center">
              <span className="text-text/50">Mockup Loja</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-text mb-2">Loja online com pedidos via WhatsApp</h3>
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