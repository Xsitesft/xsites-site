export default function Header() {
  return (
    <nav className="bg-bg/80 backdrop-blur-md border-b border-border/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 200 60" fill="none">
              <text x="10" y="40" fontFamily="Arial, sans-serif" fontSize="24" fill="#111827">
                X Sites
              </text>
            </svg>
          </a>
          <ul className="flex gap-8 text-text/70 text-sm">
            <li><a href="#inicio" className="hover:text-text transition">Início</a></li>
            <li><a href="#servicos" className="hover:text-text transition">Serviços</a></li>
            <li><a href="#pacotes" className="hover:text-text transition">Pacotes</a></li>
            <li><a href="#processo" className="hover:text-text transition">Processo</a></li>
            <li><a href="#portfolio" className="hover:text-text transition">Portfólio</a></li>
            <li><a href="#contacto" className="hover:text-text transition">Contacto</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}