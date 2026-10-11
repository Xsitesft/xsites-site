import { businessCategories } from '@/lib/data';

export default function BusinessCategories() {
  return (
    <section id="categorias" className="py-24 section-bg" aria-labelledby="categorias-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 id="categorias-heading" className="text-3xl sm:text-4xl font-bold text-text mb-4 sm:mb-6">
            Categorias de negócios
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-base sm:text-lg">
            A XSites cria soluções web adaptadas a diferentes tipos de negócio em Angola.
          </p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6" role="list">
          {businessCategories.map((category) => (
            <li
              key={category.id}
              className={`glass-card rounded-2xl p-4 sm:p-6 text-center hover:shadow-2xl transition-shadow relative ${
                category.demo ? 'ring-2 ring-gold/50 bg-gold/5' : ''
              }`}
            >
              {category.demo && (
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-gold text-bg text-xs font-semibold px-2 py-0.5 rounded-full whitespace-nowrap">
                  Demonstração disponível
                </span>
              )}
              <h3 className="text-lg sm:text-xl font-bold text-text mb-2">{category.nome}</h3>
              <p className="text-text-muted text-sm">{category.descricao}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}