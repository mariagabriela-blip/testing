import Image from "next/image";

const pills = [
  { emoji: "📍", text: "Jacksonville, FL" },
  { emoji: "🎓", text: "Economista" },
  { emoji: "💼", text: "Finanzas corporativas" },
  { emoji: "🌎", text: "Mercado latino" },
];

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="bg-crema px-6 md:px-[60px] py-24 md:py-[120px] grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center"
    >
      {/* Photo / logo side */}
      <div className="relative reveal">
        <div className="w-full aspect-[3/4] bg-morado/[0.07] border-2 border-dashed border-morado/20 flex flex-col items-center justify-center gap-3">
          <Image
            src="/8.png"
            alt="Logo Gabriela"
            width={280}
            height={280}
            className="w-56 h-56 object-cover"
          />
          <span className="font-sans text-[10px] font-medium uppercase tracking-[2px] text-morado/40">
            Tu foto aqui
          </span>
        </div>

        {/* Rotating sticker */}
        <div className="absolute -top-5 -right-5 w-24 h-24 bg-naranja rounded-full flex items-center justify-center animate-spin-slow">
          <div
            className="font-display text-[11px] italic text-white text-center leading-tight"
            style={{ animation: "rotateSlow 12s linear infinite reverse" }}
          >
            Economista<br />&amp;<br />Estratega
          </div>
        </div>
      </div>

      {/* Text side */}
      <div className="reveal">
        <div className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-naranja mb-4">
          Sobre mi
        </div>

        <h2 className="font-display text-[clamp(36px,4vw,52px)] font-extrabold leading-[1.05] tracking-tight text-oscuro mb-7">
          Hola, soy<br />
          <em className="text-morado">Gabriela</em><br />
          Kurtagic.
        </h2>

        <p className="font-sans text-[15px] font-light leading-[1.8] text-oscuro/60 mb-4">
          Soy economista con mas de una decada trabajando en finanzas
          corporativas, estrategia y desarrollo de marca para empresas en
          Latinoamerica y Estados Unidos.
        </p>
        <p className="font-sans text-[15px] font-light leading-[1.8] text-oscuro/60 mb-8">
          Hoy comparto lo que aprendi en el mundo corporativo de forma directa,
          practica y con evidencia — para que tu tomes mejores decisiones con tu
          negocio.
        </p>

        <div className="flex flex-wrap gap-2">
          {pills.map((pill) => (
            <div
              key={pill.text}
              className="bg-oscuro text-crema font-sans text-[10px] font-medium uppercase tracking-[1.5px] px-4 py-2 flex items-center gap-2"
            >
              <span className="text-sm">{pill.emoji}</span>
              {pill.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
