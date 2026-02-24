const pilares = [
  {
    icon: "01",
    title: "Estrategia de Negocio",
    description:
      "Definimos tu modelo de negocio, propuesta de valor y hoja de ruta para crecer con claridad en el mercado americano.",
    color: "morado" as const,
  },
  {
    icon: "02",
    title: "Posicionamiento de Marca",
    description:
      "Construimos una marca que conecta con tu audiencia latina y se diferencia en un mercado competitivo.",
    color: "naranja" as const,
  },
  {
    icon: "03",
    title: "Crecimiento & Monetización",
    description:
      "Diseñamos sistemas de ventas y embudos que convierten tu conocimiento y experiencia en ingresos consistentes.",
    color: "verde" as const,
  },
];

const colorMap = {
  morado: {
    bg: "bg-morado/10",
    text: "text-morado",
    accent: "bg-morado",
  },
  naranja: {
    bg: "bg-naranja/10",
    text: "text-naranja",
    accent: "bg-naranja",
  },
  verde: {
    bg: "bg-verde/10",
    text: "text-verde",
    accent: "bg-verde",
  },
};

export default function Services() {
  return (
    <section id="servicios" className="bg-oscuro py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-sans text-sm uppercase tracking-[0.25em] text-amarillo mb-4">
            Servicios
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-crema mb-4">
            Tres pilares para tu crecimiento
          </h2>
          <p className="font-sans text-crema/60 max-w-xl mx-auto">
            Un enfoque integral para que tu negocio crezca con bases sólidas.
          </p>
          {/* Logo verde */}
          <div className="w-16 h-16 mx-auto mt-6 rounded-xl overflow-hidden">
            <img src="/10.png" alt="Logo Gabriela" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pilares.map((pilar) => {
            const colors = colorMap[pilar.color];
            return (
              <div
                key={pilar.title}
                className="bg-crema/5 backdrop-blur-sm border border-crema/10 rounded-2xl p-8 hover:border-crema/20 transition-colors"
              >
                <div
                  className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-6`}
                >
                  <span className={`font-sans font-bold text-sm ${colors.text}`}>
                    {pilar.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-crema mb-3">
                  {pilar.title}
                </h3>
                <p className="font-sans text-crema/70 leading-relaxed text-sm">
                  {pilar.description}
                </p>
                <div className={`w-12 h-0.5 ${colors.accent} mt-6 rounded-full`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
