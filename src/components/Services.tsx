const services = [
  {
    num: "01",
    emoji: "💸",
    title: "<em>Finanzas</em> practicas",
    description:
      "Los fundamentos que todo negocio necesita entender antes de escalar — sin jerga innecesaria.",
    topics: [
      "Flujo de caja real",
      "Separacion de cuentas",
      "Rentabilidad por producto",
    ],
  },
  {
    num: "02",
    emoji: "📈",
    title: "Modelos de <em>negocio</em>",
    description:
      "Como estructurar, validar y hacer sostenible tu modelo sin depender de la suerte.",
    topics: [
      "Validacion antes de invertir",
      "Estructura de precios",
      "Escalabilidad real",
    ],
  },
  {
    num: "03",
    emoji: "🎯",
    title: "Estrategia de <em>marca</em>",
    description:
      "Marca no es logo ni colores — es la promesa que haces y la percepcion que construyes.",
    topics: [
      "Posicionamiento con datos",
      "Propuesta de valor",
      "Arquitectura de marca",
    ],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-oscuro px-6 md:px-[60px] py-24 md:py-[120px]">
      <div className="mb-16 reveal">
        <div className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-naranja mb-3">
          Lo que comparto
        </div>
        <h2 className="font-display text-[clamp(36px,4vw,56px)] font-extrabold leading-[1.05] tracking-tight text-crema">
          Contenido que<br />
          <em className="text-amarillo">te hace pensar</em>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px]">
        {services.map((service) => (
          <div
            key={service.num}
            className="service-card reveal relative bg-crema/[0.04] p-9 md:p-11 transition-all duration-300 hover:bg-morado/15 hover:-translate-y-1 overflow-hidden group"
          >
            {/* Big faded number */}
            <span className="absolute top-5 right-6 font-display text-[52px] font-extrabold text-amarillo/[0.08] leading-none tracking-tight">
              {service.num}
            </span>

            <span className="text-[40px] block mb-5">{service.emoji}</span>

            <h3
              className="font-display text-[22px] font-bold text-crema mb-3.5 leading-tight [&>em]:text-amarillo [&>em]:italic"
              dangerouslySetInnerHTML={{ __html: service.title }}
            />

            <p className="font-sans text-[13px] font-light leading-[1.8] text-crema/45 mb-6">
              {service.description}
            </p>

            <div className="flex flex-col gap-1.5">
              {service.topics.map((topic) => (
                <div
                  key={topic}
                  className="font-sans text-[11px] text-crema/35 flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-naranja shrink-0" />
                  {topic}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
