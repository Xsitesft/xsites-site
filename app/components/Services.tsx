export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text mb-6">O que fazemos</h2>
          <p className="text-text/80 max-w-xl mx-auto">
            Transformamos ideias em presença online que atraem e convertem clientes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <img src="/assets/icons/icon-servico-1.svg" alt="" width="24" height="24" />
            </div>
            <h3 className="text-2xl font-bold text-text mb-3">Site Institucional</h3>
            <p className="text-text/70">
              Presença online profissional para sua empresa.
            </p>
          </div>
          <div className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <img src="/assets/icons/icon-servico-2.svg" alt="" width="24" height="24" />
            </div>
            <h3 className="text-2xl font-bold text-text mb-3">Landing Page</h3>
            <p className="text-text/70">
              Página única focada em captar clientes.
            </p>
          </div>
          <div className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <img src="/assets/icons/icon-servico-3.svg" alt="" width="24" height="24" />
            </div>
            <h3 className="text-2xl font-bold text-text mb-3">Loja Simples</h3>
            <p className="text-text/70">
              Catálogo de produtos com pedidos via WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}