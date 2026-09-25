export default function Footer() {
  return (
    <footer className="py-12 bg-bg/80 text-text/70 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <p className="text-sm mb-4">
            © 2026 X Sites. Todos os direitos reservados.
          </p>
          <div className="flex justify-center gap-6">
            {/* Social links só adicionados se existirem URLs reais */}
          </div>
        </div>
      </div>
    </footer>
  );
}