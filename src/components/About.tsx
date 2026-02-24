import Image from "next/image";

export default function About() {
  return (
    <section id="sobre-mi" className="bg-crema py-24 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Logo crema */}
        <div className="aspect-[3/4] bg-crema rounded-2xl flex items-center justify-center">
          <Image src="/8.png" alt="Logo Gabriela" width={400} height={400} className="w-3/4 h-auto rounded-2xl" />
        </div>

        <div>
          <p className="font-sans text-sm uppercase tracking-[0.25em] text-naranja mb-4">
            Sobre mí
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-oscuro mb-6 leading-tight">
            Estrategia con alma latina
          </h2>
          <div className="space-y-4 font-sans text-oscuro/80 leading-relaxed">
            <p>
              Soy economista con más de una década de experiencia ayudando a
              negocios latinos a posicionarse y crecer en el mercado
              estadounidense.
            </p>
            <p>
              Creo en el poder de combinar datos con intuición cultural. Mi
              enfoque une la rigurosidad analítica con un entendimiento profundo
              de lo que significa emprender siendo latino en USA.
            </p>
            <p>
              He trabajado con startups, marcas personales y empresas
              establecidas que buscan escalar sin perder su esencia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
