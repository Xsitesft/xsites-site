export default function Process() {
  return (
    <section id="processo" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text mb-6">Como funciona</h2>
          <p className="text-text/80 max-w-2xl mx-auto">
            Processo simples e transparente do início ao fim.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-white rounded-2xl p-8 flex flex-col items-center text-center border border-border/50">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <img src="/assets/icons/icon-processo-1.svg" alt="" width="24" height="24" />
            </div>
            <h3 className="text-2xl font-bold text-text mb-2">Briefing</h3>
            <p className="text-text/70">
              Entendemos o seu negócio e os seus objetivos.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 flex flex-col items-center text-center border border-border/50">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <img src="/assets/icons/icon-processo-2.svg" alt="" width="24" height="24" />
            </div>
            <h3 className="text-2xl font-bold text-text mb-2">Criação</h3>
            <p className="text-text/70">
              Desenvolvemos o site com base no que foi combinado.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 flex flex-col items-center text-center border border-border/50">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <img src="/assets/icons/icon-processo-3.svg" alt="" width="24" height="24" />
            </div>
            <h3 className="text-2xl font-bold text-text mb-2">Revisão</h3>
            <p className="text-text/70">
              Aprova o resultado e solicita ajustes.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 flex flex-col items-center text-center border border-border/50">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <img src="/assets/icons/icon-processo-4.svg" alt="" width="24" height="24" />
            </div>
            <h3 className="text-2xl font-bold text-text mb-2">Entrega</h3>
            <p className="text-text/70">
              Publicamos o site e fornecemos orientações de uso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}