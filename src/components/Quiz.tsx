"use client";

import { useState } from "react";
import Image from "next/image";

const options = [
  {
    key: "emprendedor",
    emoji: "🏗️",
    text: "Tengo un negocio propio",
    sub: "Y quiero entender mejor mis numeros",
  },
  {
    key: "comenzando",
    emoji: "🌱",
    text: "Estoy comenzando",
    sub: "Quiero hacerlo bien desde el principio",
  },
  {
    key: "freelance",
    emoji: "💻",
    text: "Soy freelancer",
    sub: "Y quiero profesionalizar mis finanzas",
  },
  {
    key: "corporativo",
    emoji: "🏢",
    text: "Trabajo en empresa",
    sub: "Y quiero entender mas de estrategia",
  },
];

const results: Record<string, string> = {
  emprendedor:
    '"Si tienes un negocio y no sabes cuanto ganas exactamente, el primer problema no es de ventas — es de claridad financiera."',
  comenzando:
    '"La mejor decision que puedes tomar antes de lanzar es entender tus numeros. El entusiasmo no paga las facturas."',
  freelance:
    '"Ser freelancer no te exime de tener un modelo de negocio. Tu eres el producto y necesitas saber cuanto cuesta operarte."',
  corporativo:
    '"Entender los numeros de tu empresa te hace indispensable. La estrategia sin datos es solo una opinion."',
};

export default function Quiz() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="quiz" className="bg-morado px-6 md:px-[60px] py-24 md:py-[100px] text-center">
      <div className="reveal">
        <div className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-amarillo mb-3">
          Para ti si...
        </div>
        <h2 className="font-display text-[clamp(32px,4vw,52px)] font-extrabold text-white tracking-tight mb-3">
          Cual es tu<br />
          <em className="text-amarillo">situacion ahora?</em>
        </h2>

        {/* Logo vinotinto */}
        <div className="w-16 h-16 mx-auto mb-4 overflow-hidden">
          <Image src="/9.png" alt="Logo" width={64} height={64} className="w-full h-full object-cover" />
        </div>

        <p className="font-sans text-sm font-light text-white/55 mb-12">
          Selecciona la que mas te identifique 👇
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[680px] mx-auto mb-10 reveal">
        {options.map((opt) => (
          <button
            key={opt.key}
            onClick={() => setSelected(opt.key)}
            className={`text-left p-6 border transition-all duration-200 relative overflow-hidden ${
              selected === opt.key
                ? "bg-amarillo/[0.12] border-amarillo"
                : "bg-white/[0.06] border-white/10 hover:bg-amarillo/[0.12] hover:border-amarillo"
            }`}
          >
            {selected === opt.key && (
              <span className="absolute top-3 right-4 text-amarillo text-sm font-bold">
                ✓
              </span>
            )}
            <span className="text-[28px] block mb-2.5">{opt.emoji}</span>
            <div className="font-sans text-[13px] font-medium text-white leading-snug">
              {opt.text}
            </div>
            <div className="font-sans text-[11px] font-light text-white/40 mt-1">
              {opt.sub}
            </div>
          </button>
        ))}
      </div>

      {/* Result */}
      {selected && (
        <div className="bg-amarillo/10 border border-amarillo/25 p-7 max-w-[680px] mx-auto mb-8 text-left">
          <div className="font-sans text-[9px] font-bold uppercase tracking-[2px] text-amarillo mb-2.5">
            Para ti en particular →
          </div>
          <div className="font-display text-xl italic text-white leading-snug">
            {results[selected]}
          </div>
        </div>
      )}

      {selected && (
        <a
          href="#contacto"
          className="inline-block font-sans text-[11px] font-bold uppercase tracking-[2px] bg-amarillo text-oscuro px-8 py-4 hover:bg-white transition-colors"
        >
          Quiero ese contenido →
        </a>
      )}
    </section>
  );
}
