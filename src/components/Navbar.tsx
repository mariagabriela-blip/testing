"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-[60px] py-5 transition-all duration-300 ${
        scrolled
          ? "bg-crema/90 backdrop-blur-xl shadow-sm"
          : "bg-crema/90 backdrop-blur-xl"
      } border-b border-morado/10`}
    >
      <a href="/" className="font-display text-[26px] font-extrabold text-morado tracking-tight">
        g<span className="text-naranja">.</span>
      </a>

      <ul className="hidden md:flex items-center gap-9">
        <li>
          <a
            href="/#sobre-mi"
            className="font-sans text-[11px] font-medium uppercase tracking-[1.5px] text-oscuro/50 hover:text-morado transition-colors"
          >
            Sobre mi
          </a>
        </li>
        <li>
          <a
            href="/#servicios"
            className="font-sans text-[11px] font-medium uppercase tracking-[1.5px] text-oscuro/50 hover:text-morado transition-colors"
          >
            Contenido
          </a>
        </li>
        <li>
          <a
            href="/recursos"
            className="font-sans text-[11px] font-medium uppercase tracking-[1.5px] text-oscuro/50 hover:text-morado transition-colors"
          >
            Recursos
          </a>
        </li>
        <li>
          <a
            href="/#contacto"
            className="font-sans text-[10px] font-bold uppercase tracking-[2px] bg-morado text-white px-5 py-2.5 hover:bg-oscuro transition-colors"
          >
            Unete →
          </a>
        </li>
      </ul>
    </nav>
  );
}
