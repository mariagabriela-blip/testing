export default function Footer() {
  return (
    <footer className="bg-oscuro px-6 md:px-[60px] pt-14 pb-10 border-t border-crema/[0.06]">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-5">
        <div className="font-display text-[28px] font-extrabold text-amarillo tracking-tight">
          g<span className="text-naranja">.</span>
        </div>

        <ul className="flex flex-wrap gap-7">
          <li>
            <a
              href="#sobre-mi"
              className="font-sans text-[10px] font-medium uppercase tracking-[1.5px] text-crema/30 hover:text-crema transition-colors"
            >
              Sobre mi
            </a>
          </li>
          <li>
            <a
              href="#servicios"
              className="font-sans text-[10px] font-medium uppercase tracking-[1.5px] text-crema/30 hover:text-crema transition-colors"
            >
              Contenido
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/gabrielakurtagic"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[10px] font-medium uppercase tracking-[1.5px] text-crema/30 hover:text-crema transition-colors"
            >
              Instagram ↗
            </a>
          </li>
        </ul>

        <div className="font-sans text-[11px] font-light text-crema/25 tracking-wide">
          Estrategia · Finanzas · Marca
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between border-t border-crema/[0.06] pt-6 gap-3">
        <div className="font-sans text-[10px] font-light text-crema/20 tracking-wide">
          &copy; {new Date().getFullYear()} Gabriela Kurtagic. Todos los derechos reservados.
        </div>
        <div className="font-sans text-[10px] font-light text-crema/20 tracking-wide">
          Hecho con 💛 en Jacksonville, FL
        </div>
      </div>
    </footer>
  );
}
