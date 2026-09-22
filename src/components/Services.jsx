function Services() {
  return (
    <section className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text mb-6">O que fazemos</h2>
          <p className="text-text/80 max-w-xl mx-auto">
            Transformamos ideias em presencia online que atraem e convertem clientes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M2 3l6 18 17-6H2l6 18 17-6z"/>
                <path d="M13 2L3 14h9l-1 8 8-3h2l-1 8 8-3h2l-1 8 8-3H13"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-text mb-3">Site Institucional</h3>
            <p className="text-text/70">
              Presença online profissional para sua empresa.
            </p>
          </div>
          <div className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y9="12" x2="21" y9="12"></line>
                <path d="M3 3v18"></path>
                <path d="M21 3v18"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-text mb-3">Landing Page</h3>
            <p className="text-text/70">
              Página única focada em captar clientes.
            </p>
          </div>
          <div className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <path d="M14 3v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3"></path>
                <path d="M16 3.95a4 4 0 0 1 0 7.94"></path>
                <path d="M8 21h8a4 4 0 0 0 0-8h-8a4 4 0 0 0 0 8z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-text mb-3">Loja Simples</h3>
            <p className="text-text/70">
              Catálogo de produtos com pedidos via WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services