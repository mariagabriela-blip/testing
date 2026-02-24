export default function Footer() {
  return (
    <footer className="bg-oscuro border-t border-crema/10 py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display text-xl font-bold text-crema">
            Gabriela Kurtagic
          </p>
          <p className="font-sans text-crema/50 text-sm mt-1">
            Estrategia de negocios para el mercado latino en USA
          </p>
        </div>

        <div className="flex gap-6 font-sans text-sm text-crema/60">
          <a href="#sobre-mi" className="hover:text-amarillo transition-colors">
            Sobre mí
          </a>
          <a href="#servicios" className="hover:text-amarillo transition-colors">
            Servicios
          </a>
          <a href="#quiz" className="hover:text-amarillo transition-colors">
            Quiz
          </a>
          <a href="#formulario" className="hover:text-amarillo transition-colors">
            Contacto
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-8 pt-8 border-t border-crema/5 text-center">
        <p className="font-sans text-xs text-crema/30">
          &copy; {new Date().getFullYear()} Gabriela Kurtagic. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
