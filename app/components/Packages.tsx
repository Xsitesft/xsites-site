export default function Packages() {
  return (
    <section id="pacotes" className="py-24 section-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text mb-6">Pacotes e preços</h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Pagamento único pela criação do site.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="glass-card rounded-2xl p-8 hover:shadow-2xl transition-shadow">
            <img src="/assets/images/icon-site.svg" alt="" width="48" height="48" className="text-gold mb-4" />
            <div className="text-4xl font-bold text-gold mb-2">5.000 Kz</div>
            <h3 className="text-2xl font-bold text-text mb-4">Básico</h3>
            <ul className="space-y-3 text-text-muted">
              <li>1 página</li>
              <li>WhatsApp</li>
              <li>1 revisão</li>
            </ul>
          </div>
          <div className="glass-card rounded-2xl p-8 hover:shadow-2xl transition-shadow">
            <img src="/assets/images/icon-landing.svg" alt="" width="48" height="48" className="text-gold mb-4" />
            <div className="text-4xl font-bold text-gold mb-2">8.000 Kz</div>
            <h3 className="text-2xl font-bold text-text mb-4">Profissional</h3>
            <ul className="space-y-3 text-text-muted">
              <li>3–5 páginas</li>
              <li>Formulário</li>
              <li>SEO básico</li>
              <li>2 revisões</li>
            </ul>
          </div>
          <div className="glass-card rounded-2xl p-8 hover:shadow-2xl transition-shadow">
            <img src="/assets/images/icon-loja.svg" alt="" width="48" height="48" className="text-gold mb-4" />
            <div className="text-4xl font-bold text-gold mb-2">12.000 Kz</div>
            <h3 className="text-2xl font-bold text-text mb-4">Loja Simples</h3>
            <ul className="space-y-3 text-text-muted">
              <li>Catálogo digital com pedidos pelo WhatsApp</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center space-y-2 text-text-muted">
          <p>Os textos, imagens, logótipo, preços e contactos devem ser fornecidos pelo cliente.</p>
          <p>Novas páginas, funcionalidades ou alterações fora do escopo podem ter custo adicional.</p>
          <p>A mensalidade de manutenção é opcional e será apresentada separadamente.</p>
        </div>
      </div>
    </section>
  );
}