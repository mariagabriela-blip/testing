import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CursorGlow from "@/components/CursorGlow";

const recursos = [
  {
    tag: "Guía",
    color: "bg-naranja",
    emoji: "📊",
    title: "5 errores financieros que cometen los emprendedores latinos",
    description:
      "Los errores más comunes que veo en +10 años trabajando con negocios latinos — y cómo corregirlos esta semana.",
    format: "PDF · 12 páginas",
    cta: "Descargar gratis",
  },
  {
    tag: "Plantilla",
    color: "bg-verde",
    emoji: "📋",
    title: "Plantilla de flujo de caja mensual",
    description:
      "La misma plantilla que uso con mis clientes. Plug & play — solo llena los números y obtén claridad instantánea.",
    format: "Google Sheets",
    cta: "Obtener plantilla",
  },
  {
    tag: "Checklist",
    color: "bg-morado",
    emoji: "✅",
    title: "Checklist: ¿Tu negocio está listo para escalar?",
    description:
      "15 preguntas que debes responder honestamente antes de invertir en crecimiento.",
    format: "PDF · 3 páginas",
    cta: "Descargar checklist",
  },
  {
    tag: "Masterclass",
    color: "bg-vinotinto",
    emoji: "🎥",
    title: "Precios con datos, no con miedo",
    description:
      "Clase grabada de 45 minutos donde te enseño a definir precios basados en números reales, no en lo que cobra la competencia.",
    format: "Video · 45 min",
    cta: "Ver masterclass",
  },
  {
    tag: "Mini-curso",
    color: "bg-naranja",
    emoji: "⚡",
    title: "Marca personal para emprendedores",
    description:
      "3 emails en 3 días. Aprende a posicionar tu marca con estrategia — no con estética vacía.",
    format: "Email · 3 días",
    cta: "Inscribirme gratis",
  },
  {
    tag: "Herramienta",
    color: "bg-verde",
    emoji: "🧮",
    title: "Calculadora de punto de equilibrio",
    description:
      "¿Cuántas ventas necesitas para cubrir costos? Esta herramienta te lo dice en segundos.",
    format: "Google Sheets",
    cta: "Usar calculadora",
  },
];

export default function RecursosPage() {
  return (
    <>
      <CursorGlow />
      <Navbar />

      {/* Hero de Recursos */}
      <section className="bg-oscuro pt-32 pb-20 px-6 md:px-[60px]">
        <div className="max-w-[800px]">
          <div className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-naranja mb-4">
            Recursos gratuitos
          </div>
          <h1 className="font-display text-[clamp(40px,5vw,68px)] font-extrabold leading-[0.95] tracking-tight text-crema mb-6">
            Herramientas<br />
            <em className="text-amarillo">que puedes usar</em><br />
            esta semana.
          </h1>
          <p className="font-sans text-[15px] font-light leading-[1.75] text-crema/45 max-w-[480px]">
            Todo lo que comparto es gratuito, práctico y basado en experiencia
            real. Sin relleno, sin motivación vacía.
          </p>
        </div>
      </section>

      {/* Color strip */}
      <div className="flex h-2">
        <div className="flex-1 bg-morado" />
        <div className="flex-1 bg-naranja" />
        <div className="flex-1 bg-amarillo" />
        <div className="flex-1 bg-verde" />
        <div className="flex-1 bg-vinotinto" />
      </div>

      {/* Grid de recursos */}
      <section className="bg-crema px-6 md:px-[60px] py-20 md:py-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {recursos.map((recurso) => (
            <div
              key={recurso.title}
              className="reveal bg-white border border-oscuro/[0.06] p-8 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              {/* Color accent top */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${recurso.color}`} />

              <div>
                {/* Tag */}
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className={`${recurso.color} font-sans text-[9px] font-bold uppercase tracking-[2px] text-white px-3 py-1`}
                  >
                    {recurso.tag}
                  </span>
                  <span className="font-sans text-[10px] font-light text-oscuro/30 tracking-wide">
                    {recurso.format}
                  </span>
                </div>

                <div className="text-[36px] mb-4">{recurso.emoji}</div>

                <h3 className="font-display text-[20px] font-bold text-oscuro leading-tight mb-3">
                  {recurso.title}
                </h3>

                <p className="font-sans text-[13px] font-light leading-[1.75] text-oscuro/50 mb-8">
                  {recurso.description}
                </p>
              </div>

              <button className="w-full font-sans text-[10px] font-bold uppercase tracking-[2px] bg-oscuro text-crema py-4 hover:bg-morado transition-colors">
                {recurso.cta} →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-morado px-6 md:px-[60px] py-20 text-center reveal">
        <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-extrabold text-crema tracking-tight mb-4">
          ¿Quieres contenido <em className="text-amarillo">exclusivo</em>?
        </h2>
        <p className="font-sans text-[14px] font-light text-crema/45 mb-8 max-w-md mx-auto">
          Únete a la lista y recibe recursos nuevos antes que nadie.
        </p>
        <a
          href="/#contacto"
          className="inline-block font-sans text-[11px] font-bold uppercase tracking-[2px] bg-amarillo text-oscuro px-8 py-4 hover:bg-white transition-colors"
        >
          Unirme a la lista →
        </a>
      </section>

      <Footer />
      <ScrollReveal />
    </>
  );
}
