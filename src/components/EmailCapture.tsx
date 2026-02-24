"use client";

import { useState, type FormEvent } from "react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: Connect to Mailchimp or Resend
    console.log("Form submitted:", { name, email });
    setSubmitted(true);
  };

  return (
    <section id="formulario" className="bg-crema py-24 px-6">
      <div className="max-w-xl mx-auto text-center">
        {/* Logo amarillo */}
        <div className="w-20 h-20 mx-auto mb-6 rounded-xl overflow-hidden bg-amarillo">
          <img src="/7.png" alt="Logo Gabriela" className="w-full h-full object-cover" />
        </div>
        <p className="font-sans text-sm uppercase tracking-[0.25em] text-morado mb-4">
          Newsletter
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-oscuro mb-4">
          Únete a la comunidad
        </h2>
        <p className="font-sans text-oscuro/70 mb-10 leading-relaxed">
          Recibe estrategias, recursos y herramientas exclusivas para
          emprendedores latinos en USA. Directo a tu inbox, sin spam.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full font-sans bg-white border border-oscuro/10 rounded-xl px-5 py-4 text-oscuro placeholder:text-oscuro/40 focus:outline-none focus:ring-2 focus:ring-morado/40 transition-shadow"
            />
            <input
              type="email"
              placeholder="Tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full font-sans bg-white border border-oscuro/10 rounded-xl px-5 py-4 text-oscuro placeholder:text-oscuro/40 focus:outline-none focus:ring-2 focus:ring-morado/40 transition-shadow"
            />
            <button
              type="submit"
              className="w-full bg-morado hover:bg-morado/90 text-white font-sans font-semibold px-8 py-4 rounded-xl transition-colors text-base"
            >
              Quiero recibir estrategias
            </button>
            <p className="font-sans text-xs text-oscuro/40">
              Respeto tu privacidad. Puedes darte de baja en cualquier momento.
            </p>
          </form>
        ) : (
          <div className="bg-verde/10 border border-verde/20 rounded-2xl p-8">
            <div className="w-12 h-12 bg-verde/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-verde text-xl">&#10003;</span>
            </div>
            <h3 className="text-xl font-bold text-oscuro mb-2">
              ¡Bienvenida a la comunidad!
            </h3>
            <p className="font-sans text-oscuro/70 text-sm">
              Revisa tu inbox — te envié algo especial.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
