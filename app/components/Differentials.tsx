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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card rounded-xl p-6 hover:shadow-2xl transition-shadow">
            <div className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center text-gold mb-3">
              <img src="/assets/icons/icon-diferencial-preco.svg" alt="" width="24" height="24" />
            </div>
            <h3 className="text-xl font-semibold text-text mb-2">Preços claros</h3>
            <p className="text-text-muted">
              Apresentamos o que está incluído e esclarecemos o orçamento antes de começar.
            </p>
          </div>
          <div className="glass-card rounded-xl p-6 hover:shadow-2xl transition-shadow">
            <div className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center text-gold mb-3">
              <img src="/assets/icons/icon-diferencial-whatsapp.svg" alt="" width="24" height="24" />
            </div>
            <h3 className="text-xl font-semibold text-text mb-2">Foco em gerar contactos</h3>
            <p className="text-text-muted">
              Criamos sites pensados para apresentar o negócio e facilitar o contacto com potenciais clientes.
            </p>
          </div>
          <div className="glass-card rounded-xl p-6 hover:shadow-2xl transition-shadow">
            <div className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center text-gold mb-3">
              <img src="/assets/icons/icon-diferencial-suporte.svg" alt="" width="24" height="24" />
            </div>
            <h3 className="text-xl font-semibold text-text mb-2">Solução adaptada ao negócio</h3>
            <p className="text-text-muted">
              Adaptamos a estrutura e o conteúdo às necessidades de cada tipo de negócio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}