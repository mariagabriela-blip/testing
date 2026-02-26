"use client";

import { useState } from "react";
import { posts, semanas, Post } from "@/data/grillaContent";
import SlideRenderer from "@/components/SlideRenderer";

const formatoLabel: Record<string, { label: string; color: string; emoji: string }> = {
  carrusel: { label: "Carrusel", color: "#6B3FCC", emoji: "📚" },
  reel: { label: "Reel → Slides", color: "#E8601C", emoji: "🎬" },
  estatico: { label: "Post estático", color: "#1A5C3A", emoji: "📌" },
};

function PostCard({ post, onClick }: { post: Post; onClick: () => void }) {
  const formato = formatoLabel[post.formato];
  return (
    <button
      onClick={onClick}
      className="text-left w-full group cursor-pointer transition-transform hover:-translate-y-1"
    >
      {/* Mini preview of first slide */}
      <div className="w-full aspect-square overflow-hidden shadow-md mb-3 relative">
        <div className="w-[360px] h-[450px] origin-top-left" style={{ transform: "scale(0.56)" }}>
          <SlideRenderer slide={post.slides[0]} />
        </div>
        {/* Slide count badge */}
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] font-bold px-2 py-1 rounded-sm font-[family-name:var(--font-futura)]">
          {post.slides.length} slides
        </div>
      </div>
      {/* Info */}
      <div className="space-y-1.5">
        <div className="flex items-center gap-2">
          <span
            className="text-[9px] font-bold tracking-[1.5px] uppercase px-2 py-0.5 font-[family-name:var(--font-futura)]"
            style={{ background: formato.color, color: "white" }}
          >
            {formato.emoji} {formato.label}
          </span>
          <span className="text-[9px] font-medium tracking-[1px] uppercase text-[#110D1A]/40 font-[family-name:var(--font-futura)]">
            Post {post.id}
          </span>
        </div>
        <h3 className="font-[family-name:var(--font-bodoni)] text-[15px] font-bold leading-tight text-[#110D1A] group-hover:text-[#6B3FCC] transition-colors">
          {post.titulo}
        </h3>
        <p className="text-[10px] font-medium tracking-[1px] uppercase font-[family-name:var(--font-futura)]" style={{ color: post.pilarColor, opacity: 0.7 }}>
          {post.pilar}
        </p>
      </div>
    </button>
  );
}

function SlideViewer({ post, onClose }: { post: Post; onClose: () => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const formato = formatoLabel[post.formato];

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="max-w-[1100px] w-full mx-4 bg-[#F5F0E8] shadow-2xl overflow-hidden max-h-[95vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-black/10">
          <div className="flex items-center gap-3">
            <span
              className="text-[9px] font-bold tracking-[1.5px] uppercase px-2 py-1 font-[family-name:var(--font-futura)]"
              style={{ background: formato.color, color: "white" }}
            >
              {formato.emoji} {formato.label}
            </span>
            <h2 className="font-[family-name:var(--font-bodoni)] text-[18px] font-bold text-[#110D1A]">
              Post {post.id}: {post.titulo}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-[#110D1A]/50 hover:text-[#110D1A] transition-colors text-2xl leading-none cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Slide preview */}
          <div className="flex-1 flex items-center justify-center bg-[#110D1A]/5 p-8 relative">
            <button
              onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
              disabled={currentSlide === 0}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white shadow-md flex items-center justify-center text-[#110D1A] disabled:opacity-20 transition-opacity cursor-pointer rounded-full"
            >
              ←
            </button>
            <SlideRenderer slide={post.slides[currentSlide]} />
            <button
              onClick={() => setCurrentSlide(Math.min(post.slides.length - 1, currentSlide + 1))}
              disabled={currentSlide === post.slides.length - 1}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white shadow-md flex items-center justify-center text-[#110D1A] disabled:opacity-20 transition-opacity cursor-pointer rounded-full"
            >
              →
            </button>
            {/* Slide counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {post.slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                    i === currentSlide ? "bg-[#6B3FCC] w-6" : "bg-[#110D1A]/20"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Slide list + caption */}
          <div className="w-[320px] border-l border-black/10 flex flex-col overflow-y-auto">
            {/* Mini slides */}
            <div className="p-4 border-b border-black/10">
              <h4 className="text-[9px] font-bold tracking-[2px] uppercase text-[#110D1A]/40 mb-3 font-[family-name:var(--font-futura)]">
                Slides ({post.slides.length})
              </h4>
              <div className="grid grid-cols-3 gap-2">
                {post.slides.map((slide, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`aspect-[4/5] overflow-hidden cursor-pointer transition-all ${
                      i === currentSlide
                        ? "ring-2 ring-[#6B3FCC] ring-offset-1"
                        : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <div className="w-[360px] h-[450px] origin-top-left" style={{ transform: "scale(0.24)" }}>
                      <SlideRenderer slide={slide} />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Caption */}
            <div className="p-4 flex-1">
              <h4 className="text-[9px] font-bold tracking-[2px] uppercase text-[#110D1A]/40 mb-3 font-[family-name:var(--font-futura)]">
                Caption
              </h4>
              <p className="text-[12px] font-light leading-relaxed text-[#110D1A]/70 whitespace-pre-line font-[family-name:var(--font-futura)]">
                {post.caption}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GrillaPage() {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [activeSemana, setActiveSemana] = useState<number | null>(null);

  const filteredPosts = activeSemana ? posts.filter((p) => p.semana === activeSemana) : posts;

  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      {/* Header */}
      <header className="border-b border-[#110D1A]/10 bg-[#F5F0E8]/95 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-[1400px] mx-auto px-6 py-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <a href="/" className="font-[family-name:var(--font-bodoni)] text-[28px] font-extrabold text-[#6B3FCC]">
                g<span className="text-[#E8601C]">.</span>
              </a>
            </div>
            <div className="text-right">
              <h1 className="font-[family-name:var(--font-bodoni)] text-[24px] font-extrabold text-[#110D1A]">
                Grilla de Contenido
              </h1>
              <p className="text-[11px] font-medium tracking-[1.5px] uppercase text-[#110D1A]/40 font-[family-name:var(--font-futura)]">
                Mes 1 · 16 posts · 4 semanas
              </p>
            </div>
          </div>

          {/* Semana filters */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveSemana(null)}
              className={`text-[10px] font-bold tracking-[1.5px] uppercase px-4 py-2 transition-all cursor-pointer font-[family-name:var(--font-futura)] ${
                activeSemana === null
                  ? "bg-[#110D1A] text-[#F5F0E8]"
                  : "bg-[#110D1A]/5 text-[#110D1A]/50 hover:text-[#110D1A]"
              }`}
            >
              Todos
            </button>
            {semanas.map((s) => (
              <button
                key={s.num}
                onClick={() => setActiveSemana(s.num)}
                className={`text-[10px] font-bold tracking-[1.5px] uppercase px-4 py-2 transition-all cursor-pointer font-[family-name:var(--font-futura)] ${
                  activeSemana === s.num
                    ? "bg-[#6B3FCC] text-white"
                    : "bg-[#6B3FCC]/5 text-[#6B3FCC]/50 hover:text-[#6B3FCC]"
                }`}
              >
                Semana {s.num}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-[1400px] mx-auto px-6 py-8">
        {/* Semana sections */}
        {(activeSemana ? semanas.filter((s) => s.num === activeSemana) : semanas).map((semana) => {
          const semanaPosts = filteredPosts.filter((p) => p.semana === semana.num);
          if (semanaPosts.length === 0) return null;

          return (
            <section key={semana.num} className="mb-16">
              {/* Semana header */}
              <div
                className="px-6 py-5 mb-6"
                style={{
                  background:
                    semana.num === 1
                      ? "#E8601C"
                      : semana.num === 2
                      ? "#6B3FCC"
                      : semana.num === 3
                      ? "#1A5C3A"
                      : "#6B1F3A",
                }}
              >
                <h2 className="font-[family-name:var(--font-bodoni)] text-[28px] font-extrabold text-white">
                  Semana {semana.num}
                </h2>
                <p className="font-[family-name:var(--font-bodoni)] text-[16px] italic text-white/70 mt-1">
                  &ldquo;{semana.tema}&rdquo;
                </p>
                <p className="text-[10px] font-medium tracking-[1.5px] uppercase text-white/40 mt-2 font-[family-name:var(--font-futura)]">
                  {semana.dias}
                </p>
              </div>

              {/* Posts grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {semanaPosts.map((post) => (
                  <PostCard key={post.id} post={post} onClick={() => setSelectedPost(post)} />
                ))}
              </div>
            </section>
          );
        })}
      </main>

      {/* Slide viewer modal */}
      {selectedPost && <SlideViewer post={selectedPost} onClose={() => setSelectedPost(null)} />}
    </div>
  );
}
