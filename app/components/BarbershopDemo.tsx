import { barbershopDemo } from '@/lib/data';

export default function BarbershopDemo() {
  return (
    <section id="demo-barbearia" className="py-24 section-bg" aria-labelledby="demo-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12 text-center">
          <span className="inline-block bg-red-500/10 border border-red-500/30 text-red-500 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 sm:mb-6">
            Projeto demonstrativo — negócio fictício
          </span>
          <h2 id="demo-heading" className="text-3xl sm:text-4xl font-bold text-text mb-4">
            {barbershopDemo.nome}
          </h2>
          <p className="text-text-muted text-base sm:text-lg max-w-2xl mx-auto">
            {barbershopDemo.slogan}
          </p>
        </div>

        <div className="space-y-8 sm:space-y-12">
          <div className="glass-card rounded-2xl p-4 sm:p-6 lg:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-text mb-4 sm:mb-6">Serviços</h3>
            <ul className="space-y-3 text-text-muted" role="list">
              {barbershopDemo.servicos.map((servico, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-gold rounded-full flex-shrink-0" aria-hidden="true" />
                  {servico}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card rounded-2xl p-4 sm:p-6 lg:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-text mb-4 sm:mb-6">Galeria</h3>
            <p className="text-text-muted text-center py-8 sm:py-12">{barbershopDemo.galeria[0]}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="glass-card rounded-2xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-text mb-2 sm:mb-3">Horário</h3>
              <p className="text-text-muted">{barbershopDemo.horario}</p>
            </div>
            <div className="glass-card rounded-2xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-text mb-2 sm:mb-3">Localização</h3>
              <p className="text-text-muted">{barbershopDemo.localizacao}</p>
            </div>
          </div>

          <div className="text-center">
            <button
              type="button"
              className="inline-flex items-center gap-2 border border-gold/50 text-gold/50 py-3 px-6 rounded font-semibold cursor-not-allowed opacity-50"
              disabled
              aria-disabled="true"
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
              WhatsApp da demonstração (indisponível)
            </button>
            <p className="text-text-muted text-sm mt-3">
              Botão desativado — demonstração fictícia. Use o WhatsApp real no rodapé ou formulário de contacto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}