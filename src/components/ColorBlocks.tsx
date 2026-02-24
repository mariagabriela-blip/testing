const blocks = [
  { bg: "bg-naranja", text: "text-crema", content: "Estrategia" },
  { bg: "bg-verde", text: "text-crema", content: "Finanzas" },
  { bg: "bg-amarillo", text: "text-oscuro", content: "Marca" },
];

export default function ColorBlocks() {
  return (
    <div className="grid grid-cols-3 reveal">
      {blocks.map((block) => (
        <div
          key={block.content}
          className={`${block.bg} py-12 md:py-16 flex items-center justify-center group cursor-default transition-all duration-300 hover:py-20`}
        >
          <span
            className={`font-display text-[clamp(24px,3.5vw,48px)] italic font-extrabold ${block.text} tracking-tight opacity-70 group-hover:opacity-100 transition-opacity`}
          >
            {block.content}
          </span>
        </div>
      ))}
    </div>
  );
}
