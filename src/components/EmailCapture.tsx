"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";

const perks = [
  { emoji: "📊", bold: "Casos reales", text: " — analisis de negocios con numeros de verdad" },
  { emoji: "📋", bold: "Plantillas descargables", text: " — herramientas que yo misma uso" },
  { emoji: "🎟️", bold: "Acceso anticipado", text: " a talleres y recursos" },
  { emoji: "🌎", bold: "En espanol", text: " — para el mercado latino en USA y LATAM" },
];

export default function EmailCapture() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tipo, setTipo] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, tipo });
    setSubmitted(true);
  };

  return (
    <section
      id="contacto"
      className="bg-crema px-6 md:px-[60px] py-24 md:py-[120px] grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-start"
    >
      {/* Left — info */}
      <div className="reveal">
        <div className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-naranja mb-4">
          Unete a la lista
        </div>

        <h2 className="font-display text-[clamp(36px,4vw,56px)] font-extrabold leading-[1.0] tracking-tight text-oscuro mb-6">
          Estrategia<br />
          directo a<br />
          <em className="text-morado">tu inbox.</em>
        </h2>

        {/* Logo amarillo */}
        <div className="w-16 h-16 mb-6 overflow-hidden">
          <Image src="/7.png" alt="Logo" width={64} height={64} className="w-full h-full object-cover" />
        </div>

        <p className="font-sans text-[15px] font-light leading-[1.75] text-oscuro/55 mb-10">
          Sin spam. Sin motivacion vacia. Solo contenido de negocios, finanzas y
          marca que puedes aplicar esta semana.
        </p>

        <div className="flex flex-col gap-4">
          {perks.map((perk) => (
            <div key={perk.bold} className="flex items-start gap-3.5">
              <span className="text-xl leading-none mt-0.5">{perk.emoji}</span>
              <p className="font-sans text-sm text-oscuro/65 leading-snug">
                <strong className="font-bold text-oscuro">{perk.bold}</strong>
                {perk.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right — form */}
      <div className="reveal">
        <div className="bg-oscuro p-8 md:p-12">
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label className="block font-sans text-[9px] font-bold uppercase tracking-[2px] text-amarillo/60 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  placeholder="Como te llamas?"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-crema/[0.05] border border-crema/10 text-crema font-sans text-sm font-light px-[18px] py-[15px] outline-none focus:border-amarillo focus:bg-crema/[0.07] transition-all placeholder:text-crema/20"
                />
              </div>

              <div className="mb-5">
                <label className="block font-sans text-[9px] font-bold uppercase tracking-[2px] text-amarillo/60 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-crema/[0.05] border border-crema/10 text-crema font-sans text-sm font-light px-[18px] py-[15px] outline-none focus:border-amarillo focus:bg-crema/[0.07] transition-all placeholder:text-crema/20"
                />
              </div>

              <div className="mb-5">
                <label className="block font-sans text-[9px] font-bold uppercase tracking-[2px] text-amarillo/60 mb-2">
                  Tu situacion
                </label>
                <select
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value)}
                  className="w-full bg-crema/[0.05] border border-crema/10 text-crema/40 font-sans text-sm font-light px-[18px] py-[15px] outline-none focus:border-amarillo appearance-none"
                >
                  <option value="" disabled>
                    Cual te describe mejor?
                  </option>
                  <option value="emprendedor">🏗️ Tengo un negocio propio</option>
                  <option value="comenzando">🌱 Estoy comenzando</option>
                  <option value="freelance">💻 Soy freelancer</option>
                  <option value="corporativo">🏢 Trabajo en empresa</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-amarillo text-oscuro font-sans text-[11px] font-bold uppercase tracking-[2.5px] py-5 mt-2 hover:bg-naranja transition-colors"
              >
                Quiero recibir contenido
              </button>

              <p className="font-sans text-[10px] font-light text-crema/20 text-center mt-3.5 leading-snug">
                Sin spam. Te puedes dar de baja cuando quieras.
              </p>
            </form>
          ) : (
            <div className="text-center py-10">
              <span className="text-[56px] block mb-4">🎉</span>
              <div className="font-display text-[28px] font-extrabold text-amarillo mb-3">
                Ya eres parte!
              </div>
              <div className="font-sans text-[13px] font-light text-crema/50 leading-relaxed">
                Revisa tu bandeja de entrada — te llega un correo de bienvenida
                en los proximos minutos.
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
