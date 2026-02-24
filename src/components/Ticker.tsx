const items = [
  "Finanzas practicas",
  "Estrategia de marca",
  "Modelos de negocio",
  "Criterio estrategico",
  "Base real, no humo",
  "Para el mercado latino",
];

export default function Ticker() {
  const doubled = [...items, ...items];

  return (
    <div className="bg-oscuro py-4 overflow-hidden whitespace-nowrap">
      <div className="inline-flex animate-ticker">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 px-8 font-display text-base italic text-crema/35"
          >
            {item}
            <span className="text-naranja not-italic">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
