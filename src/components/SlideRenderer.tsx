"use client";

import { Slide } from "@/data/grillaContent";

function SlidePortada({ slide }: { slide: Slide }) {
  return (
    <div
      className="flex flex-col justify-between h-full p-10"
      style={{ background: slide.style.bg, color: slide.style.textColor }}
    >
      <div className="flex items-center gap-2 opacity-60">
        <span className="text-[10px] font-bold tracking-[3px] uppercase font-[family-name:var(--font-futura)]">
          ✦ Gabriela Kurtagic
        </span>
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <h2
          className="font-[family-name:var(--font-bodoni)] text-[clamp(28px,5vw,42px)] font-extrabold leading-[1.0] tracking-tight"
          style={{ color: slide.style.textColor }}
        >
          {slide.title}
        </h2>
        {slide.subtitle && (
          <p
            className="mt-3 font-[family-name:var(--font-bodoni)] text-[clamp(20px,3.5vw,30px)] font-bold leading-[1.1] italic"
            style={{ color: slide.style.accentColor || slide.style.textColor, opacity: slide.style.accentColor ? 1 : 0.7 }}
          >
            {slide.subtitle}
          </p>
        )}
      </div>
      <div className="flex items-center justify-between">
        <span
          className="text-[10px] font-medium tracking-[1.5px] uppercase font-[family-name:var(--font-futura)]"
          style={{ opacity: 0.5 }}
        >
          {slide.handle || "@gabrielakurtagic"}
        </span>
        <span
          className="font-[family-name:var(--font-bodoni)] text-[22px] font-extrabold"
          style={{ color: slide.style.accentColor || slide.style.textColor, opacity: 0.3 }}
        >
          g.
        </span>
      </div>
    </div>
  );
}

function SlideContenido({ slide }: { slide: Slide }) {
  return (
    <div
      className="flex flex-col justify-center h-full p-10"
      style={{ background: slide.style.bg, color: slide.style.textColor }}
    >
      {slide.title && (
        <h3
          className="font-[family-name:var(--font-bodoni)] text-[22px] font-bold leading-tight mb-6 italic"
          style={{ color: slide.style.accentColor || slide.style.textColor }}
        >
          {slide.title}
        </h3>
      )}
      <div className="space-y-4">
        {slide.body?.map((line, i) => (
          <p
            key={i}
            className="text-[14px] font-light leading-relaxed font-[family-name:var(--font-futura)]"
            style={{ opacity: 0.85 }}
          >
            {line}
          </p>
        ))}
      </div>
      <div className="mt-auto pt-8">
        <span
          className="font-[family-name:var(--font-bodoni)] text-[18px] font-extrabold"
          style={{ color: slide.style.accentColor || slide.style.textColor, opacity: 0.15 }}
        >
          g.
        </span>
      </div>
    </div>
  );
}

function SlideNumero({ slide }: { slide: Slide }) {
  return (
    <div
      className="flex flex-col justify-center h-full p-10 relative overflow-hidden"
      style={{ background: slide.style.bg, color: slide.style.textColor }}
    >
      {/* Big number background */}
      <span
        className="absolute -top-4 -right-2 font-[family-name:var(--font-bodoni)] text-[160px] font-extrabold leading-none pointer-events-none select-none"
        style={{ color: slide.style.accentColor || slide.style.textColor, opacity: 0.07 }}
      >
        {slide.number}
      </span>
      <div className="relative z-10">
        {slide.emoji && <span className="text-[32px] mb-4 block">{slide.emoji}</span>}
        {slide.title && (
          <h3
            className="font-[family-name:var(--font-bodoni)] text-[20px] font-bold leading-tight mb-5"
            style={{ color: slide.style.accentColor || slide.style.textColor }}
          >
            {slide.title}
          </h3>
        )}
        <div className="space-y-3">
          {slide.body?.map((line, i) => (
            <p
              key={i}
              className="text-[13px] font-light leading-relaxed font-[family-name:var(--font-futura)]"
              style={{ opacity: 0.85 }}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
      <div className="mt-auto pt-6 relative z-10">
        <span
          className="font-[family-name:var(--font-bodoni)] text-[18px] font-extrabold"
          style={{ color: slide.style.accentColor || slide.style.textColor, opacity: 0.15 }}
        >
          g.
        </span>
      </div>
    </div>
  );
}

function SlideLista({ slide }: { slide: Slide }) {
  return (
    <div
      className="flex flex-col justify-center h-full p-10"
      style={{ background: slide.style.bg, color: slide.style.textColor }}
    >
      {slide.title && (
        <h3
          className="font-[family-name:var(--font-bodoni)] text-[22px] font-bold leading-tight mb-6 italic"
          style={{ color: slide.style.accentColor || slide.style.textColor }}
        >
          {slide.title}
        </h3>
      )}
      <div className="space-y-4">
        {slide.body?.map((line, i) => (
          <div
            key={i}
            className="flex items-start gap-3 text-[14px] font-[family-name:var(--font-futura)]"
          >
            <span
              className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
              style={{ background: slide.style.accentColor || slide.style.textColor, opacity: 0.6 }}
            />
            <span className="font-light leading-relaxed" style={{ opacity: 0.9 }}>
              {line}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-auto pt-8">
        <span
          className="font-[family-name:var(--font-bodoni)] text-[18px] font-extrabold"
          style={{ color: slide.style.accentColor || slide.style.textColor, opacity: 0.15 }}
        >
          g.
        </span>
      </div>
    </div>
  );
}

function SlideCta({ slide }: { slide: Slide }) {
  return (
    <div
      className="flex flex-col justify-center items-center text-center h-full p-10"
      style={{ background: slide.style.bg, color: slide.style.textColor }}
    >
      <div className="flex-1 flex flex-col justify-center items-center">
        {slide.body && (
          <div className="space-y-3 mb-6">
            {slide.body.map((line, i) => (
              <p
                key={i}
                className="text-[14px] font-[family-name:var(--font-futura)] font-medium"
                style={{ opacity: 0.8 }}
              >
                {line}
              </p>
            ))}
          </div>
        )}
        <h3
          className="font-[family-name:var(--font-bodoni)] text-[24px] font-extrabold leading-tight italic mb-4"
        >
          {slide.title}
        </h3>
        {slide.subtitle && (
          <p
            className="text-[13px] font-light leading-relaxed font-[family-name:var(--font-futura)] max-w-[280px] whitespace-pre-line"
            style={{ opacity: 0.7 }}
          >
            {slide.subtitle}
          </p>
        )}
      </div>
      <div className="flex items-center gap-2 mt-auto">
        <span
          className="font-[family-name:var(--font-bodoni)] text-[22px] font-extrabold"
          style={{ opacity: 0.3 }}
        >
          g.
        </span>
        <span
          className="text-[10px] font-medium tracking-[1.5px] uppercase font-[family-name:var(--font-futura)]"
          style={{ opacity: 0.4 }}
        >
          @gabrielakurtagic
        </span>
      </div>
    </div>
  );
}

function SlideQuote({ slide }: { slide: Slide }) {
  return (
    <div
      className="flex flex-col justify-between h-full p-10"
      style={{ background: slide.style.bg, color: slide.style.textColor }}
    >
      <div className="flex items-center gap-2 opacity-50">
        <span className="text-[10px] font-bold tracking-[3px] uppercase font-[family-name:var(--font-futura)]">
          ✦ Gabriela Kurtagic
        </span>
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <h2
          className="font-[family-name:var(--font-bodoni)] text-[clamp(30px,5.5vw,44px)] font-extrabold leading-[1.0] tracking-tight"
        >
          {slide.title}
        </h2>
        {slide.subtitle && (
          <p
            className="mt-3 font-[family-name:var(--font-bodoni)] text-[clamp(18px,3vw,28px)] font-bold leading-[1.15] italic whitespace-pre-line"
            style={{ color: slide.style.accentColor || slide.style.textColor, opacity: slide.style.accentColor ? 0.8 : 0.6 }}
          >
            {slide.subtitle}
          </p>
        )}
      </div>
      <div className="flex items-center justify-between">
        <span
          className="text-[10px] font-medium tracking-[1.5px] uppercase font-[family-name:var(--font-futura)]"
          style={{ opacity: 0.4 }}
        >
          {slide.handle || "@gabrielakurtagic"}
        </span>
        <span
          className="font-[family-name:var(--font-bodoni)] text-[28px] font-extrabold"
          style={{ color: slide.style.accentColor || slide.style.textColor, opacity: 0.2 }}
        >
          g.
        </span>
      </div>
    </div>
  );
}

const renderers: Record<Slide["type"], React.FC<{ slide: Slide }>> = {
  portada: SlidePortada,
  contenido: SlideContenido,
  cta: SlideCta,
  quote: SlideQuote,
  lista: SlideLista,
  numero: SlideNumero,
};

export default function SlideRenderer({ slide }: { slide: Slide }) {
  const Renderer = renderers[slide.type];
  return (
    <div className="w-[360px] h-[450px] shrink-0 overflow-hidden shadow-lg">
      <Renderer slide={slide} />
    </div>
  );
}
