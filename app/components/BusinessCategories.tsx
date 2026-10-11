import { businessCategories } from '@/lib/data';

export default function BusinessCategories() {
  return (
    <section id="categorias" className="py-24 section-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text mb-6">Categorias de negócios</h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            A XSites cria soluções web adaptadas a diferentes tipos de negócio em Angola.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {businessCategories.map((category) => (
            <div
              key={category.id}
              className={`glass-card rounded-2xl p-6 text-center hover:shadow-2xl transition-shadow ${
                category.demo
                  ? 'ring-2 ring-gold/50 bg-gold/5 relative'
                  : ''
              }`}
            >
              {category.demo && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-bg text-xs font-semibold px-2 py-0.5 rounded-full whitespace-nowrap">
                  Demonstração disponível
                </span>
              )}
              <h3 className="text-xl font-bold text-text mb-2">{category.nome}</h3>
              <p className="text-text-muted text-sm">{category.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}