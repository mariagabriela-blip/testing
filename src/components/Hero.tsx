import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-oscuro text-crema px-6 py-24 overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-morado via-naranja to-amarillo" />

      <div className="max-w-4xl mx-auto text-center">
        {/* Logo morado */}
        <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-8 rounded-2xl overflow-hidden">
          <Image src="/6.png" alt="Logo Gabriela" width={128} height={128} className="w-full h-full object-cover" />
        </div>

        <p className="font-sans text-sm uppercase tracking-[0.3em] text-amarillo mb-6">
          Economista &middot; Estratega de Negocios
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Gabriela Kurtagic
        </h1>

        <p className="font-sans text-lg md:text-xl text-crema/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Ayudo a emprendedores latinos en USA a construir negocios
          rentables con estrategia, claridad y propósito.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#quiz"
            className="inline-block bg-morado hover:bg-morado/90 text-white font-sans font-semibold px-8 py-4 rounded-full transition-colors text-base"
          >
            Descubre tu perfil emprendedor
          </a>
          <a
            href="#servicios"
            className="inline-block border-2 border-amarillo text-amarillo hover:bg-amarillo hover:text-oscuro font-sans font-semibold px-8 py-4 rounded-full transition-colors text-base"
          >
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  );
}
