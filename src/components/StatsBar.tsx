"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { emoji: "📅", value: 10, suffix: "+", label: "Anos de experiencia" },
  { emoji: "🌎", value: 3, suffix: "", label: "Paises de operacion" },
  { emoji: "📊", value: 100, suffix: "%", label: "Basado en evidencia" },
  { emoji: "🚀", value: 0, suffix: "", label: "Consejos vacios" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 1200;
          const start = performance.now();

          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(step);
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="font-display text-[56px] font-extrabold text-oscuro leading-none tracking-tight">
      {display}{suffix}
    </div>
  );
}

export default function StatsBar() {
  return (
    <div className="bg-amarillo px-6 md:px-[60px] py-14 grid grid-cols-2 md:grid-cols-4 gap-8 reveal">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="text-center md:border-r last:border-r-0 border-oscuro/15 px-4"
        >
          <span className="text-[28px] block mb-1">{stat.emoji}</span>
          <AnimatedNumber value={stat.value} suffix={stat.suffix} />
          <div className="font-sans text-[10px] font-medium uppercase tracking-[1.5px] text-oscuro/50 mt-1.5">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
