export default function Differentials() {
  return (
    <section className="py-24 section-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text mb-6">Por que escolher a X Sites</h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            As melhores razões para transformar seu negócio com um site profissional.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="glass-card rounded-xl p-6 hover:shadow-2xl transition-shadow">
            <div className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center text-gold mb-3">
              <img src="/assets/icons/icon-diferencial-preco.svg" alt="" width="24" height="24" />
            </div>
            <h3 className="text-xl font-semibold text-text mb-2">Preços públicos e sem surpresas</h3>
            <p className="text-text-muted">
              Transparência total desde o primeiro orçamento.
            </p>
          </div>
          <div className="glass-card rounded-xl p-6 hover:shadow-2xl transition-shadow">
            <div className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center text-gold mb-3">
              <img src="/assets/icons/icon-diferencial-velocidade.svg" alt="" width="24" height="24" />
            </div>
            <h3 className="text-xl font-semibold text-text mb-2">Entrega em até 10 dias</h3>
            <p className="text-text-muted">
              Cumprimos prazos sem qualidade comprometida.
            </p>
          </div>
          <div className="glass-card rounded-xl p-6 hover:shadow-2xl transition-shadow">
            <div className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center text-gold mb-3">
              <img src="/assets/icons/icon-diferencial-whatsapp.svg" alt="" width="24" height="24" />
            </div>
            <h3 className="text-xl font-semibold text-text mb-2">Foco em gerar contactos e vendas</h3>
            <p className="text-text-muted">
              Sites desenhados para converter visitantes em clientes.
            </p>
          </div>
          <div className="glass-card rounded-xl p-6 hover:shadow-2xl transition-shadow">
            <div className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center text-gold mb-3">
              <img src="/assets/icons/icon-diferencial-suporte.svg" alt="" width="24" height="24" />
            </div>
            <h3 className="text-xl font-semibold text-text mb-2">Nem tão caro como agência, nem tão arriscado como freelancer</h3>
            <p className="text-text-muted">
              Equilíbrio perfeito entre qualidade e preço justo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}