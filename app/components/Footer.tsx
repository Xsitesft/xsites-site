const BUILD_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="py-12 glass-card border-t">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-6">
          <nav className="flex flex-wrap justify-center gap-4 text-sm" aria-label="Navegação do rodapé">
            <a href="#inicio" className="hover:text-gold-light transition text-text-muted">Início</a>
            <a href="#categorias" className="hover:text-gold-light transition text-text-muted">Categorias</a>
            <a href="#demo-barbearia" className="hover:text-gold-light transition text-text-muted">Demonstração</a>
            <a href="#contacto" className="hover:text-gold-light transition text-text-muted">Contacto</a>
          </nav>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="mailto:xsites.ao@gmail.com" className="hover:text-gold-light transition flex items-center gap-1 text-text-muted">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              xsites.ao@gmail.com
            </a>
            <a href="https://wa.me/244926311857" className="hover:text-gold-light transition flex items-center gap-1 text-text-muted" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="21" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.74"></path>
              </svg>
              +244 926 311 857
            </a>
          </div>
          <p className="text-sm text-text-muted">
            © {BUILD_YEAR} X Sites. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}