function FAQ() {
  return (
    <section className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text mb-8">Perguntas frequentes</h2>
        </div>
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-6 border border-border/50">
            <div className="flex between items-center mb-2">
              <h3 className="text-xl font-semibold text-text">Quanto tempo demora para ficar pronto?</h3>
              <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="21" r="4"></circle>
                <line x1="17" y1="11" x2="3" y2="11"></line>
              </svg>
            </div>
            <p className="text-text/70">Até 10 dias úteis.</p>
            <div className="mt-2 text-sm text-text/60">
              <p>Orçamentos mais complexos podem estender esse prazo, mas nos comprometemos a entregar dentro do combinado.</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-border/50">
            <div className="flex between items-center mb-2">
              <h3 className="text-xl font-semibold text-text">O que está incluído no preço?</h3>
              <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 15 15"></polyline>
              </svg>
            </div>
            <p className="text-text/70">Domínio, hospedagem, design, desenvolvimento e 1–2 revisões.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-border/50">
            <div className="flex between items-center mb-2">
              <h3 className="text-xl font-semibold text-text">Vocês cuidam do domínio e hospedagem?</h3>
              <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2v4l10 8-10 8v-4"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="y22 12 14 18 10 18 14 22h-6"/>
              </svg>
            </div>
            <p className="text-text/70">Sim, incluímos no primeiro ano, conforme o pacote contratado.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-border/50">
            <div className="flex between items-center mb-2">
              <h3 className="text-xl font-semibold text-text">E se eu quiser mudar algo depois?</h3>
              <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="21" r="4"></circle>
                <line x1="17" y1="11" x2="3" y2="11"></line>
              </svg>
            </div>
            <p className="text-text/70">30 dias de suporte para ajustes.</p>
            <div className="mt-2 text-sm text-text/60">
              <p>Após esse período, ajustes podem ser realizados mediante orçamento.</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-border/50">
            <div className="flex between items-center mb-2">
              <h3 className="text-xl font-semibold text-text">Como funciona o pagamento?</h3>
              <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a6 6 0 0 0-6 6v12a6 6 0 0 0 6 6h12a6 6 0 0 0 6-6V8z"></path>
                <polyline points="14 2 14 8 20 8 20 22 14 22 14 2 14 2"></polyline>
              </svg>
            </div>
            <p className="text-text/70">50% no início e 50% na entrega.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-border/50">
            <div className="flex between items-center mb-2">
              <h3 className="text-xl font-semibold text-text">Atendem fora de Luanda?</h3>
              <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 15 15"></polyline>
              </svg>
            </div>
            <p className="text-text/70">Sim, atendemos todo o país.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ