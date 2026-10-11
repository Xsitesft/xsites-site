import { sectorPreviews } from '@/lib/data';

export default function SectorPreviews() {
  return (
    <section id="previews" className="py-24 section-bg" aria-labelledby="previews-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 id="previews-heading" className="text-3xl sm:text-4xl font-bold text-text mb-4 sm:mb-6">
            Outras soluções para o seu negócio
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-base sm:text-lg">
            Pré-visualizações de soluções que podemos adaptar a diferentes setores.
          </p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6" role="list">
          {sectorPreviews.map((preview) => (
            <li
              key={preview.id}
              className="glass-card rounded-2xl p-4 sm:p-6 text-center hover:shadow-2xl transition-shadow relative"
            >
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-text-muted text-bg text-xs font-semibold px-2 py-0.5 rounded-full whitespace-nowrap">
                Pré-visualização
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-text mb-2">{preview.nome}</h3>
              <p className="text-text-muted text-sm">{preview.descricao}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}