export default function Packages() {
  return (
    <section id="pacotes" className="py-24 section-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text mb-6">Como calculamos o preço</h2>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-12">
            <article className="glass-card rounded-2xl p-6 md:p-8 flex-1 min-w-0 text-center">
              <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M9 12h6" />
                  <path d="M12 9v6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text mb-3">Plano básico</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Inclui as funcionalidades essenciais e tem um preço definido.
              </p>
            </article>
            <span className="text-gold text-3xl font-bold flex-shrink-0" aria-hidden="true">+</span>
            <article className="glass-card rounded-2xl p-6 md:p-8 flex-1 min-w-0 text-center">
              <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold" aria-hidden="true">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text mb-3">Funcionalidades adicionais</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Pode acrescentar funcionalidades ao plano básico. A seleção e os respetivos preços serão apresentados no configurador, quando estiver disponível.
              </p>
            </article>
            <span className="text-gold text-3xl font-bold flex-shrink-0" aria-hidden="true">=</span>
            <article className="glass-card rounded-2xl p-6 md:p-8 flex-1 min-w-0 text-center">
              <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold" aria-hidden="true">
                  <line x1="18" y1="20" x2="6" y2="20" />
                  <line x1="14" y1="20" x2="14" y2="10" />
                  <line x1="10" y1="20" x2="10" y2="14" />
                  <line x1="6" y1="20" x2="6" y2="16" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text mb-3">Preço estimado</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Preço do plano básico + preços das funcionalidades selecionadas.
              </p>
            </article>
          </div>
          <div className="glass-card-light rounded-xl p-6 md:p-8 text-center mb-8">
            <p className="text-text-muted text-base leading-relaxed">
              O prazo de entrega será confirmado pela equipa depois de analisar o pedido, as tarefas necessárias e quais trabalhos podem decorrer em paralelo.
            </p>
          </div>
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 text-center">
            <p className="text-red-500 font-medium">
              A estimativa não é um orçamento final. A equipa confirma o valor final após analisar o projeto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}