"use client";

import { Slide } from "@/data/grillaContent";

/* ═══════════════════════════════════════════════════
   PORTADA — Bold editorial cover with geometric accents
   ═══════════════════════════════════════════════════ */
function SlidePortada({ slide }: { slide: Slide }) {
  const accent = slide.style.accentColor || slide.style.textColor;
  return (
    <div
      className="relative flex flex-col h-full overflow-hidden"
      style={{ background: slide.style.bg, color: slide.style.textColor }}
    >
      {/* Large decorative circle */}
      <div
        className="absolute -top-20 -right-20 w-[220px] h-[220px] rounded-full pointer-events-none"
        style={{ background: accent, opacity: 0.07 }}
      />
      {/* Small secondary circle */}
      <div
        className="absolute bottom-24 -right-6 w-[90px] h-[90px] rounded-full pointer-events-none"
        style={{ background: accent, opacity: 0.04 }}
      />
      {/* Right accent bar */}
      <div
        className="absolute top-0 right-0 w-1.5 h-full pointer-events-none"
        style={{ background: accent, opacity: 0.25 }}
      />

      <div className="relative z-10 p-10 flex flex-col justify-between h-full">
        {/* Top: name tag */}
        <div className="flex items-center gap-2.5">
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
          <span
            className="text-[9px] font-bold tracking-[3px] uppercase font-[family-name:var(--font-futura)]"
            style={{ opacity: 0.5 }}
          >
            Gabriela Kurtagic
          </span>
        </div>

        {/* Center: title block */}
        <div className="flex-1 flex flex-col justify-center py-4">
          <div className="w-10 h-[3px] mb-5" style={{ background: accent, opacity: 0.6 }} />
          <h2 className="font-[family-name:var(--font-bodoni)] text-[clamp(34px,7vw,50px)] font-extrabold leading-[0.92] tracking-tight">
            {slide.title}
          </h2>
          {slide.subtitle && (
            <p
              className="mt-4 font-[family-name:var(--font-bodoni)] text-[clamp(18px,3.5vw,27px)] font-bold leading-[1.12] italic"
              style={{ color: accent, opacity: slide.style.accentColor ? 1 : 0.65 }}
            >
              {slide.subtitle}
            </p>
          )}
        </div>

        {/* Bottom */}
        <div className="flex items-end justify-between">
          <div>
            <div className="w-6 h-[1px] mb-2.5" style={{ background: slide.style.textColor, opacity: 0.15 }} />
            <span
              className="text-[9px] font-medium tracking-[2px] uppercase font-[family-name:var(--font-futura)]"
              style={{ opacity: 0.3 }}
            >
              {slide.handle || "@gabrielakurtagic"}
            </span>
          </div>
          {/* Dot grid */}
          <div className="grid grid-cols-3 gap-[3px] mr-6">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="w-[3px] h-[3px] rounded-full"
                style={{ background: accent, opacity: 0.15 }}
              />
            ))}
          </div>
          <span
            className="font-[family-name:var(--font-bodoni)] text-[26px] font-extrabold"
            style={{ color: accent, opacity: 0.2 }}
          >
            g.
          </span>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   CONTENIDO — Editorial text with accent sidebar
   ═══════════════════════════════════════════════════ */
function SlideContenido({ slide }: { slide: Slide }) {
  const accent = slide.style.accentColor || slide.style.textColor;
  return (
    <div
      className="relative flex h-full overflow-hidden"
      style={{ background: slide.style.bg, color: slide.style.textColor }}
    >
      {/* Left accent bar */}
      <div className="w-[5px] shrink-0" style={{ background: accent, opacity: 0.5 }} />

      {/* Corner shape */}
      <div
        className="absolute -bottom-12 -right-12 w-[140px] h-[140px] rounded-full pointer-events-none"
        style={{ background: accent, opacity: 0.04 }}
      />

      {/* Subtle dot pattern top-right */}
      <div className="absolute top-6 right-6 grid grid-cols-4 gap-[5px] pointer-events-none">
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="w-[2px] h-[2px] rounded-full"
            style={{ background: accent, opacity: 0.08 }}
          />
        ))}
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-center p-9 pl-8">
        {slide.title && (
          <div className="mb-5">
            <h3
              className="font-[family-name:var(--font-bodoni)] text-[22px] font-bold leading-tight italic"
              style={{ color: accent }}
            >
              {slide.title}
            </h3>
            <div className="w-8 h-[2px] mt-3" style={{ background: accent, opacity: 0.3 }} />
          </div>
        )}
        <div className="space-y-3.5">
          {slide.body?.map((line, i) => (
            <p
              key={i}
              className="text-[13.5px] font-light leading-[1.65] font-[family-name:var(--font-futura)]"
              style={{ opacity: 0.85 }}
            >
              {line}
            </p>
          ))}
        </div>
        <div className="mt-auto pt-8 flex items-center gap-2">
          <div className="w-3 h-[1px]" style={{ background: accent, opacity: 0.2 }} />
          <span
            className="font-[family-name:var(--font-bodoni)] text-[16px] font-extrabold"
            style={{ color: accent, opacity: 0.12 }}
          >
            g.
          </span>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   NUMERO — Bold numbered card with badge + watermark
   ═══════════════════════════════════════════════════ */
function SlideNumero({ slide }: { slide: Slide }) {
  const accent = slide.style.accentColor || slide.style.textColor;
  return (
    <div
      className="relative flex flex-col h-full overflow-hidden"
      style={{ background: slide.style.bg, color: slide.style.textColor }}
    >
      {/* Watermark number */}
      <span
        className="absolute -top-4 -right-3 font-[family-name:var(--font-bodoni)] text-[180px] font-extrabold leading-none pointer-events-none select-none"
        style={{ color: accent, opacity: 0.05 }}
      >
        {slide.number}
      </span>

      {/* Top accent stripe */}
      <div className="h-[5px]" style={{ background: accent, opacity: 0.7 }} />

      <div className="relative z-10 flex-1 flex flex-col p-9">
        {/* Number badge + emoji */}
        <div className="flex items-center gap-3 mb-5">
          <span
            className="inline-flex items-center justify-center w-10 h-10 font-[family-name:var(--font-bodoni)] text-[18px] font-extrabold rounded-sm"
            style={{ background: accent, color: slide.style.bg, opacity: 0.9 }}
          >
            {slide.number}
          </span>
          {slide.emoji && <span className="text-[24px]">{slide.emoji}</span>}
        </div>

        {/* Title */}
        {slide.title && (
          <h3
            className="font-[family-name:var(--font-bodoni)] text-[19px] font-bold leading-tight mb-4"
            style={{ color: accent }}
          >
            {slide.title}
          </h3>
        )}

        {/* Body */}
        <div className="space-y-2.5">
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

        {/* Bottom line + logo */}
        <div className="mt-auto pt-5 flex items-center gap-2">
          <div className="flex-1 h-[1px]" style={{ background: accent, opacity: 0.1 }} />
          <span
            className="font-[family-name:var(--font-bodoni)] text-[16px] font-extrabold"
            style={{ color: accent, opacity: 0.12 }}
          >
            g.
          </span>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   LISTA — Styled items with visual markers
   ═══════════════════════════════════════════════════ */
function SlideLista({ slide }: { slide: Slide }) {
  const accent = slide.style.accentColor || slide.style.textColor;
  return (
    <div
      className="relative flex flex-col h-full overflow-hidden"
      style={{ background: slide.style.bg, color: slide.style.textColor }}
    >
      {/* Corner gradient triangle */}
      <div
        className="absolute top-0 right-0 w-[100px] h-[100px] pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${accent}12 0%, transparent 60%)`,
        }}
      />

      {/* Bottom left decorative element */}
      <div
        className="absolute -bottom-6 -left-6 w-[80px] h-[80px] rounded-full pointer-events-none"
        style={{ background: accent, opacity: 0.04 }}
      />

      <div className="relative z-10 flex flex-col justify-center h-full p-9">
        {slide.title && (
          <div className="mb-6">
            <h3
              className="font-[family-name:var(--font-bodoni)] text-[21px] font-bold leading-tight italic"
              style={{ color: accent }}
            >
              {slide.title}
            </h3>
            <div
              className="w-full h-[1px] mt-3"
              style={{ background: accent, opacity: 0.15 }}
            />
          </div>
        )}
        <div className="space-y-4">
          {slide.body?.map((line, i) => (
            <div key={i} className="flex items-start gap-3">
              {/* Styled bullet */}
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                style={{ background: accent, opacity: 0.12 }}
              >
                <div
                  className="w-[5px] h-[5px] rounded-full"
                  style={{ background: accent, opacity: 0.8 }}
                />
              </div>
              <span
                className="text-[13px] font-light leading-relaxed font-[family-name:var(--font-futura)]"
                style={{ opacity: 0.9 }}
              >
                {line}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-auto pt-7 flex items-center gap-2">
          <div className="flex-1 h-[1px]" style={{ background: accent, opacity: 0.1 }} />
          <span
            className="font-[family-name:var(--font-bodoni)] text-[16px] font-extrabold"
            style={{ color: accent, opacity: 0.12 }}
          >
            g.
          </span>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   CTA — Energetic call-to-action with rings
   ═══════════════════════════════════════════════════ */
function SlideCta({ slide }: { slide: Slide }) {
  const accent = slide.style.accentColor || slide.style.textColor;
  return (
    <div
      className="relative flex flex-col items-center justify-center h-full text-center overflow-hidden"
      style={{ background: slide.style.bg, color: slide.style.textColor }}
    >
      {/* Decorative rings */}
      <div
        className="absolute w-[320px] h-[320px] rounded-full border pointer-events-none"
        style={{ borderColor: accent, opacity: 0.04 }}
      />
      <div
        className="absolute w-[220px] h-[220px] rounded-full border pointer-events-none"
        style={{ borderColor: accent, opacity: 0.06 }}
      />
      <div
        className="absolute w-[120px] h-[120px] rounded-full border pointer-events-none"
        style={{ borderColor: accent, opacity: 0.03 }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[4px]"
        style={{ background: accent, opacity: 0.3 }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full p-10">
        {/* Pretext body */}
        {slide.body && (
          <div className="space-y-2 mb-6">
            {slide.body.map((line, i) => (
              <p
                key={i}
                className="text-[13px] font-[family-name:var(--font-futura)] font-medium"
                style={{ opacity: 0.75 }}
              >
                {line}
              </p>
            ))}
          </div>
        )}

        {/* CTA with decorative lines */}
        <div className="mb-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px]" style={{ background: accent, opacity: 0.4 }} />
            <div className="w-2 h-2 rounded-full" style={{ background: accent, opacity: 0.3 }} />
            <div className="w-8 h-[2px]" style={{ background: accent, opacity: 0.4 }} />
          </div>
          <h3 className="font-[family-name:var(--font-bodoni)] text-[23px] font-extrabold leading-tight italic">
            {slide.title}
          </h3>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-8 h-[2px]" style={{ background: accent, opacity: 0.4 }} />
            <div className="w-2 h-2 rounded-full" style={{ background: accent, opacity: 0.3 }} />
            <div className="w-8 h-[2px]" style={{ background: accent, opacity: 0.4 }} />
          </div>
        </div>

        {slide.subtitle && (
          <p
            className="text-[12px] font-light leading-relaxed font-[family-name:var(--font-futura)] max-w-[260px] whitespace-pre-line"
            style={{ opacity: 0.6 }}
          >
            {slide.subtitle}
          </p>
        )}

        {/* Arrow */}
        <span className="text-[18px] mt-5" style={{ opacity: 0.3 }}>
          ↓
        </span>
      </div>

      {/* Bottom */}
      <div className="absolute bottom-5 flex items-center gap-2">
        <span
          className="font-[family-name:var(--font-bodoni)] text-[20px] font-extrabold"
          style={{ opacity: 0.2 }}
        >
          g.
        </span>
        <span
          className="text-[9px] font-medium tracking-[1.5px] uppercase font-[family-name:var(--font-futura)]"
          style={{ opacity: 0.3 }}
        >
          @gabrielakurtagic
        </span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   QUOTE — Dramatic statement with giant quote mark
   ═══════════════════════════════════════════════════ */
function SlideQuote({ slide }: { slide: Slide }) {
  const accent = slide.style.accentColor || slide.style.textColor;
  return (
    <div
      className="relative flex flex-col h-full overflow-hidden"
      style={{ background: slide.style.bg, color: slide.style.textColor }}
    >
      {/* Giant decorative quote mark */}
      <span
        className="absolute top-4 left-7 font-[family-name:var(--font-bodoni)] text-[140px] leading-none pointer-events-none select-none"
        style={{ color: accent, opacity: 0.08 }}
      >
        &ldquo;
      </span>

      {/* Decorative circle bottom-right */}
      <div
        className="absolute -bottom-16 -right-16 w-[180px] h-[180px] rounded-full pointer-events-none"
        style={{ background: accent, opacity: 0.05 }}
      />

      {/* Left accent bar */}
      <div
        className="absolute top-0 left-0 w-1.5 h-full pointer-events-none"
        style={{ background: accent, opacity: 0.2 }}
      />

      <div className="relative z-10 p-10 flex flex-col justify-between h-full">
        {/* Top */}
        <div className="flex items-center gap-2.5">
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
          <span
            className="text-[9px] font-bold tracking-[3px] uppercase font-[family-name:var(--font-futura)]"
            style={{ opacity: 0.45 }}
          >
            Gabriela Kurtagic
          </span>
        </div>

        {/* Quote */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="w-12 h-[3px] mb-6" style={{ background: accent, opacity: 0.5 }} />
          <h2 className="font-[family-name:var(--font-bodoni)] text-[clamp(30px,5.5vw,44px)] font-extrabold leading-[0.95] tracking-tight">
            {slide.title}
          </h2>
          {slide.subtitle && (
            <p
              className="mt-4 font-[family-name:var(--font-bodoni)] text-[clamp(18px,3vw,28px)] font-bold leading-[1.15] italic whitespace-pre-line"
              style={{
                color: accent,
                opacity: slide.style.accentColor ? 0.85 : 0.6,
              }}
            >
              {slide.subtitle}
            </p>
          )}
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between">
          <span
            className="text-[9px] font-medium tracking-[2px] uppercase font-[family-name:var(--font-futura)]"
            style={{ opacity: 0.35 }}
          >
            {slide.handle || "@gabrielakurtagic"}
          </span>
          <div className="flex items-center gap-3">
            {/* Small dots */}
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-1 rounded-full"
                  style={{ background: accent, opacity: 0.2 }}
                />
              ))}
            </div>
            <span
              className="font-[family-name:var(--font-bodoni)] text-[26px] font-extrabold"
              style={{ color: accent, opacity: 0.2 }}
            >
              g.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════ */

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
