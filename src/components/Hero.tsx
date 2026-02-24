import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen bg-morado grid grid-cols-1 md:grid-cols-2 overflow-hidden pt-20">
      {/* Left — text */}
      <div className="flex flex-col justify-center px-6 md:px-[60px] py-20 md:py-20 relative z-10">
        <div
          className="inline-flex items-center gap-2 bg-amarillo/15 border border-amarillo/30 px-4 py-2 rounded-full w-fit mb-8 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="font-sans text-[10px] font-medium uppercase tracking-[1.5px] text-amarillo">
            Estrategia con base real
          </span>
        </div>

        <h1
          className="font-display text-[clamp(48px,5.5vw,80px)] font-extrabold leading-[0.95] tracking-tight text-white mb-7 animate-fade-up"
          style={{ animationDelay: "0.25s" }}
        >
          Los numeros<br />
          <em className="text-amarillo">siempre</em><br />
          cuentan algo.
        </h1>

        <p
          className="font-sans text-[15px] font-light leading-[1.75] text-white/60 max-w-[400px] mb-11 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Finanzas, negocios y marca para emprendedores latinos que quieren
          crecer con estructura — no con suerte.
        </p>

        <div
          className="flex flex-wrap gap-4 animate-fade-up"
          style={{ animationDelay: "0.55s" }}
        >
          <a
            href="#contacto"
            className="font-sans text-[11px] font-bold uppercase tracking-[2px] bg-amarillo text-oscuro px-8 py-4 hover:bg-white transition-colors"
          >
            Quiero aprender
          </a>
          <a
            href="#sobre-mi"
            className="font-sans text-[11px] font-bold uppercase tracking-[2px] text-white border border-white/30 px-8 py-4 hover:border-white hover:bg-white/[0.07] transition-all"
          >
            Conoce mi trabajo
          </a>
        </div>

        <div
          className="flex items-center gap-4 mt-12 animate-fade-up"
          style={{ animationDelay: "0.7s" }}
        >
          <div className="w-8 h-px bg-white/20" />
          <span className="font-sans text-[10px] font-medium uppercase tracking-[1.5px] text-white/35">
            Sigueme
          </span>
          <a
            href="https://instagram.com/gabrielakurtagic"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[10px] font-medium tracking-[1px] text-white/50 border-b border-white/20 hover:text-amarillo transition-colors"
          >
            @gabrielakurtagic
          </a>
        </div>
      </div>

      {/* Right — logo + decorative g */}
      <div className="relative hidden md:flex items-end justify-center overflow-hidden animate-fade-in" style={{ animationDelay: "0.5s" }}>
        {/* Giant background g */}
        <span className="absolute -bottom-10 -right-10 font-display text-[520px] font-black text-amarillo/[0.08] leading-none select-none pointer-events-none">
          g
        </span>

        {/* Logo morado */}
        <div className="relative z-10 w-[360px] h-[480px] flex items-center justify-center">
          <Image
            src="/6.png"
            alt="Logo Gabriela"
            width={320}
            height={320}
            className="w-[280px] h-[280px] object-cover"
          />
          {/* Badge */}
          <div className="absolute bottom-10 -left-5 bg-amarillo p-4 z-20">
            <div className="font-display text-[32px] font-extrabold text-oscuro leading-none tracking-tight">
              10+
            </div>
            <div className="font-sans text-[9px] font-bold uppercase tracking-[1.5px] text-oscuro/60 mt-0.5">
              Anos en finanzas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
