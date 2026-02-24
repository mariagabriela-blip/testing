"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Popup() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Show popup after 8 seconds
    const timer = setTimeout(() => {
      const dismissed = sessionStorage.getItem("popup_dismissed");
      if (!dismissed) {
        setVisible(true);
      }
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setVisible(false);
      setClosing(false);
      sessionStorage.setItem("popup_dismissed", "true");
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Popup email:", email);
    setSubmitted(true);
    setTimeout(handleClose, 2500);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] flex items-center justify-center px-4 transition-all duration-300 ${
        closing ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-oscuro/80 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        className={`relative w-full max-w-[520px] overflow-hidden transition-all duration-500 ${
          closing ? "scale-95 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        {/* Top color strip */}
        <div className="flex h-2">
          <div className="flex-1 bg-morado" />
          <div className="flex-1 bg-naranja" />
          <div className="flex-1 bg-amarillo" />
          <div className="flex-1 bg-verde" />
          <div className="flex-1 bg-vinotinto" />
        </div>

        <div className="bg-oscuro p-8 md:p-12">
          {/* Close */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 font-sans text-crema/25 hover:text-crema text-xl transition-colors"
          >
            ✕
          </button>

          {!submitted ? (
            <>
              {/* Spark emoji */}
              <div className="text-[48px] mb-5">✨</div>

              <div className="font-sans text-[9px] font-bold uppercase tracking-[3px] text-naranja mb-3">
                Recurso gratis
              </div>

              <h3 className="font-display text-[28px] md:text-[34px] font-extrabold text-crema leading-[1.05] tracking-tight mb-3">
                La guía que necesitas<br />
                <em className="text-amarillo">antes de escalar.</em>
              </h3>

              <p className="font-sans text-[13px] font-light text-crema/45 leading-relaxed mb-8">
                5 errores financieros que cometen el 90% de los emprendedores latinos
                — y cómo evitarlos. Descárgala gratis.
              </p>

              {/* Mini perks */}
              <div className="flex flex-wrap gap-3 mb-8">
                {["📊 Basada en datos reales", "⚡ Lectura de 5 min", "🎯 Accionable hoy"].map(
                  (perk) => (
                    <span
                      key={perk}
                      className="font-sans text-[10px] font-medium text-crema/30 bg-crema/[0.05] border border-crema/[0.08] px-3 py-1.5"
                    >
                      {perk}
                    </span>
                  )
                )}
              </div>

              <form onSubmit={handleSubmit}>
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    required
                    className="flex-1 bg-crema/[0.05] border border-crema/10 text-crema font-sans text-sm font-light px-5 py-4 outline-none focus:border-amarillo transition-all placeholder:text-crema/20"
                  />
                  <button
                    type="submit"
                    className="bg-amarillo text-oscuro font-sans text-[10px] font-bold uppercase tracking-[2px] px-6 py-4 hover:bg-naranja transition-colors whitespace-nowrap"
                  >
                    Enviar →
                  </button>
                </div>
              </form>

              <p className="font-sans text-[9px] text-crema/15 text-center mt-3">
                Sin spam. Solo valor.
              </p>

              {/* Logo watermark */}
              <div className="absolute bottom-4 right-6 w-10 h-10 opacity-10">
                <Image src="/6.png" alt="" width={40} height={40} />
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="text-[56px] mb-4">🎉</div>
              <div className="font-display text-[24px] font-extrabold text-amarillo mb-2">
                ¡Revisa tu inbox!
              </div>
              <p className="font-sans text-[13px] font-light text-crema/40">
                Tu guía va en camino.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
