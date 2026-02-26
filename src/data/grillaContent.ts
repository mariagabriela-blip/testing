export type SlideStyle = {
  bg: string;
  textColor: string;
  accentColor?: string;
};

export type Slide = {
  title?: string;
  subtitle?: string;
  body?: string[];
  number?: string;
  style: SlideStyle;
  type: "portada" | "contenido" | "cta" | "quote" | "lista" | "numero";
  handle?: string;
  emoji?: string;
};

export type Post = {
  id: number;
  semana: number;
  formato: "carrusel" | "reel" | "estatico";
  pilar: string;
  pilarColor: string;
  titulo: string;
  slides: Slide[];
  caption: string;
};

const COLORS = {
  morado: "#6B3FCC",
  amarillo: "#F5D76E",
  naranja: "#E8601C",
  crema: "#F5F0E8",
  vinotinto: "#6B1F3A",
  verde: "#1A5C3A",
  oscuro: "#110D1A",
  blanco: "#FAFAF8",
  borgona: "#8B3F5A",
};

export const semanas = [
  { num: 1, tema: "Llegué. Esto es lo que hago.", dias: "Lunes · Miércoles · Viernes · Domingo" },
  { num: 2, tema: "Cómo piensa Maga", dias: "Lunes · Miércoles · Viernes · Domingo" },
  { num: 3, tema: "Profundidad y criterio", dias: "Lunes · Miércoles · Viernes · Domingo" },
  { num: 4, tema: "Valor profundo + Comunidad", dias: "Lunes · Miércoles · Viernes · Domingo" },
];

export const posts: Post[] = [
  // ═══════════════════════════════════════
  // SEMANA 1 — "Llegué. Esto es lo que hago."
  // ═══════════════════════════════════════

  {
    id: 1,
    semana: 1,
    formato: "carrusel",
    pilar: "Marca & estrategia",
    pilarColor: COLORS.naranja,
    titulo: "No soy coach. Esto es lo que soy.",
    caption: `Yo no soy coach. No vendo cursos de mentalidad. Soy economista, llevo las finanzas de una empresa real y fundé Wave Strategy Group.\n\nAquí hablo de lo que sé: negocios, marcas y finanzas — con base real, con números, con estructura.\n\nDime en los comentarios: ¿en cuál etapa estás? 👇\n1️⃣ Empezando con idea\n2️⃣ Negocio chico que ya vende\n3️⃣ Ya tengo estructura, quiero escalar`,
    slides: [
      {
        type: "portada",
        title: "No soy coach.",
        subtitle: "Esto es lo que soy.",
        handle: "@gabrielakurtagic",
        style: { bg: COLORS.morado, textColor: COLORS.blanco },
      },
      {
        type: "contenido",
        title: "Quién soy",
        body: [
          "Soy economista.",
          "Llevo las finanzas de una empresa real.",
          "Fundé Wave Strategy Group.",
        ],
        style: { bg: COLORS.crema, textColor: COLORS.oscuro, accentColor: COLORS.morado },
      },
      {
        type: "contenido",
        title: "Qué hago aquí",
        body: [
          "Aquí hablo de negocios, marcas y finanzas con base real.",
          "No promesas. No fórmulas mágicas.",
          "Estrategia que se puede ejecutar.",
        ],
        style: { bg: COLORS.oscuro, textColor: COLORS.crema, accentColor: COLORS.amarillo },
      },
      {
        type: "lista",
        title: "Los 4 pilares",
        body: [
          "💸 Dinero & finanzas prácticas",
          "📈 Negocios & modelos de negocio",
          "🎯 Marca & estrategia",
          "🧠 Criterio & pensamiento estratégico",
        ],
        style: { bg: COLORS.morado, textColor: COLORS.blanco, accentColor: COLORS.amarillo },
      },
      {
        type: "contenido",
        title: "Para quién es esto",
        body: [
          "Para latinos que trabajan o emprenden en USA o Latam.",
          "Para el que tiene un negocio pero no sabe si está ganando o perdiendo.",
          "Para el que quiere empezar pero no sabe por dónde empezar con los números.",
        ],
        style: { bg: COLORS.verde, textColor: COLORS.blanco, accentColor: COLORS.amarillo },
      },
      {
        type: "contenido",
        title: "Para quién NO es",
        body: [
          "Si buscas motivación, aquí no.",
          "Si quieres que te digan que puedes lograr todo si lo manifiestas, no.",
          "Si quieres fórmulas mágicas, tampoco.",
          "Pero si quieres estructura real y criterio para tomar decisiones — quédate.",
        ],
        style: { bg: COLORS.vinotinto, textColor: COLORS.blanco, accentColor: COLORS.amarillo },
      },
      {
        type: "cta",
        title: "¿En cuál etapa estás?",
        body: [
          "1️⃣ Empezando con idea",
          "2️⃣ Negocio chico que ya vende",
          "3️⃣ Ya tengo estructura, quiero escalar",
        ],
        subtitle: "Comenta tu número — así sé qué contenido te sirve más.",
        style: { bg: COLORS.naranja, textColor: COLORS.blanco },
      },
    ],
  },

  {
    id: 2,
    semana: 1,
    formato: "reel",
    pilar: "Criterio & pensamiento estratégico",
    pilarColor: COLORS.verde,
    titulo: "3 red flags de cuentas de 'finanzas' que son puro ruido",
    caption: `Llevo tiempo siguiendo el mundo de las finanzas personales y negocios en redes… y hay patrones que se repiten. 📉\n\nNo te estoy diciendo que todo el contenido que consumes es malo. Pero sí hay señales que vale la pena reconocer.\n\n¿Cuál de estos patrones has visto más? Cuéntame en los comentarios. 👇\n\n#finanzaslatinas #negociolatino #emprendimiento #finanzaspersonales`,
    slides: [
      {
        type: "portada",
        title: "3 red flags",
        subtitle: "de cuentas de 'finanzas' que son puro ruido.",
        handle: "@gabrielakurtagic",
        style: { bg: COLORS.oscuro, textColor: COLORS.blanco, accentColor: COLORS.naranja },
      },
      {
        type: "contenido",
        title: "ESTO ES LO QUE NADIE TE DICE",
        body: [
          "Sigues cuentas de finanzas y sientes que no te funciona nada de lo que dicen.",
          "Tono directo, cero dramático.",
        ],
        style: { bg: COLORS.morado, textColor: COLORS.blanco, accentColor: COLORS.amarillo },
      },
      {
        type: "numero",
        number: "1",
        title: "Red flag 1",
        body: [
          "\"Te prometen resultados sin mostrarte el proceso.\"",
          "Cualquiera puede decir 'ya gané $10K'. La pregunta es cómo y con qué costos.",
        ],
        emoji: "🚩",
        style: { bg: COLORS.crema, textColor: COLORS.oscuro, accentColor: COLORS.naranja },
      },
      {
        type: "numero",
        number: "2",
        title: "Red flag 2",
        body: [
          "\"Solo muestran lifestyle, nunca los números reales.\"",
          "El carro, los viajes, la laptop en la playa. Pero nunca el balance ni el cash flow.",
        ],
        emoji: "🚩",
        style: { bg: COLORS.crema, textColor: COLORS.oscuro, accentColor: COLORS.naranja },
      },
      {
        type: "numero",
        number: "3",
        title: "Red flag 3",
        body: [
          "\"El método está 'encerrado' en un curso de $997.\"",
          "Si la única forma de aprender es pagándoles a ellos, algo está mal.",
        ],
        emoji: "🚩",
        style: { bg: COLORS.crema, textColor: COLORS.oscuro, accentColor: COLORS.naranja },
      },
      {
        type: "cta",
        title: "¿Cuál red flag has visto más?",
        subtitle: "Cuéntame en los comentarios. 👇",
        style: { bg: COLORS.oscuro, textColor: COLORS.blanco, accentColor: COLORS.amarillo },
      },
    ],
  },

  {
    id: 3,
    semana: 1,
    formato: "carrusel",
    pilar: "Dinero & finanzas prácticas",
    pilarColor: COLORS.verde,
    titulo: "3 errores de dinero que veo en latinos en USA",
    caption: `Esto no es un juicio — es un reconocimiento. 🤝\n\nNadie nos enseñó a manejar dinero. Y cuando llegas a USA, todo el sistema es diferente: el crédito funciona distinto, los impuestos funcionan distinto, incluso cómo se maneja un negocio funciona distinto.\n\n¿En cuál te ves? Cuéntame en los comentarios 👇\n\n#finanzaslatinas #dineroemprendedorlatino #emprendedoreslatinos #negociosUSA #finanzaspersonales`,
    slides: [
      {
        type: "portada",
        title: "3 errores de dinero",
        subtitle: "que veo en latinos en USA.",
        handle: "@gabrielakurtagic",
        style: { bg: COLORS.naranja, textColor: COLORS.blanco },
      },
      {
        type: "contenido",
        title: "Contexto",
        body: [
          "\"Nadie nos enseñó esto en la escuela.\"",
          "Cuando llegas a USA, el sistema financiero es completamente diferente.",
          "Estos errores no son de ignorancia — son de falta de información.",
        ],
        style: { bg: COLORS.crema, textColor: COLORS.oscuro, accentColor: COLORS.morado },
      },
      {
        type: "numero",
        number: "01",
        title: "Error 1: Mezclar plata personal con la del negocio",
        body: [
          "Usas la misma cuenta para todo: mercado, facturas del negocio, nómina.",
          "¿El problema? Nunca sabes si tu negocio gana o pierdes.",
          "La solución: cuenta separada para el negocio, aunque sea una cuenta básica.",
        ],
        style: { bg: COLORS.morado, textColor: COLORS.blanco, accentColor: COLORS.amarillo },
      },
      {
        type: "numero",
        number: "02",
        title: "Error 2: No saber tu número mínimo mensual",
        body: [
          "¿Cuánto necesitas ganar este mes para cubrir todo — personal y negocio?",
          "Si no sabes ese número, tomas decisiones a ciegas.",
          "La solución: suma todos los gastos fijos y ese es tu piso.",
        ],
        style: { bg: COLORS.naranja, textColor: COLORS.blanco },
      },
      {
        type: "numero",
        number: "03",
        title: "Error 3: Ahorrar sin estructura",
        body: [
          "\"Ahorro lo que 'sobra'. Y casi nunca sobra nada.\"",
          "El ahorro que depende de la sobra no existe.",
          "La solución: ahorra primero, aunque sea $50 al mes. Automáticamente, apenas entra el dinero.",
        ],
        style: { bg: COLORS.verde, textColor: COLORS.blanco, accentColor: COLORS.amarillo },
      },
      {
        type: "contenido",
        title: "Acción de esta semana",
        body: [
          "Elige UNO de estos errores — el que más te suena.",
          "Esta semana toma una sola acción para empezar a corregirlo.",
          "Un paso concreto es mejor que 10 ideas sin ejecutar.",
        ],
        style: { bg: COLORS.oscuro, textColor: COLORS.crema, accentColor: COLORS.amarillo },
      },
      {
        type: "cta",
        title: "¿En cuál de los tres te ves?",
        subtitle: "Cuéntame en los comentarios. 👇\nY guarda este carrusel — lo vas a necesitar.",
        style: { bg: COLORS.naranja, textColor: COLORS.blanco },
      },
    ],
  },

  {
    id: 4,
    semana: 1,
    formato: "estatico",
    pilar: "Criterio & pensamiento estratégico",
    pilarColor: COLORS.morado,
    titulo: "No necesitas más motivación. Necesitas un sistema.",
    caption: `La motivación es el arranque. El sistema es lo que te mantiene en movimiento. 🔄\n\nHe visto personas super motivadas que no llegan a ningún lado porque no tienen estructura. Y he visto personas 'normales' construir negocios sólidos porque tenían un proceso claro.\n\nLa diferencia no es el entusiasmo — es la consistencia. Y la consistencia necesita un sistema.\n\n¿Cuál es el sistema que más te cuesta armar? ¿Finanzas, ventas, operaciones? 🤔\n\n#negocios #emprendimiento #sistemasdenegocios #estrategia #finanzas`,
    slides: [
      {
        type: "quote",
        title: "No necesitas más motivación.",
        subtitle: "Necesitas un sistema.",
        handle: "@gabrielakurtagic",
        style: { bg: COLORS.morado, textColor: COLORS.blanco, accentColor: COLORS.amarillo },
      },
    ],
  },

  // ═══════════════════════════════════════
  // SEMANA 2 — "Cómo piensa Maga"
  // ═══════════════════════════════════════

  {
    id: 5,
    semana: 2,
    formato: "carrusel",
    pilar: "Negocios & modelos de negocio",
    pilarColor: COLORS.verde,
    titulo: "Antes de emprender responde estas 5 preguntas",
    caption: `Antes de renunciar a tu trabajo, antes de invertir tus ahorros, antes de lanzar ese negocio… hazte estas 5 preguntas. 📋\n\nNo son para frenarte. Son para que vayas con los ojos abiertos.\n\n¿Cuál de estas 5 no puedes responder todavía? Cuéntame 👇\n\n#emprendimiento #negocioslatinos #finanzasparaemprendedores #startuplatino #modelodenegocio`,
    slides: [
      {
        type: "portada",
        title: "Antes de emprender,",
        subtitle: "responde estas 5 preguntas (de números, no de sueños).",
        handle: "@gabrielakurtagic",
        style: { bg: COLORS.verde, textColor: COLORS.blanco, accentColor: COLORS.amarillo },
      },
      {
        type: "contenido",
        title: "Contexto",
        body: [
          "\"Todos preguntan: ¿tiene pasión? ¿cuál es tu propósito?\"",
          "Nadie pregunta: ¿tienes el dinero para sobrevivir los primeros 3 meses sin ventas?",
          "Estas 5 preguntas son las que yo me hago antes de cualquier decisión de negocio.",
        ],
        style: { bg: COLORS.crema, textColor: COLORS.oscuro, accentColor: COLORS.verde },
      },
      {
        type: "numero",
        number: "01",
        title: "¿En cuánto tiempo cubres tus costos?",
        body: [
          "\"No 'cuando vea a ganar' — cuándo el negocio al menos se paga solo.\"",
          "Si no sabes calcularlo, lo más probable es que no lo sepas.",
        ],
        style: { bg: COLORS.morado, textColor: COLORS.blanco, accentColor: COLORS.amarillo },
      },
      {
        type: "numero",
        number: "02",
        title: "¿Cuánto te cuesta conseguir un cliente?",
        body: [
          "Si gastas $100 en publicidad y consigues 2 clientes — cada cliente te costó $50.",
          "¿Tu producto o servicio justifica ese costo? ¿Cuánto te deja ese cliente?",
        ],
        style: { bg: COLORS.morado, textColor: COLORS.blanco, accentColor: COLORS.amarillo },
      },
      {
        type: "numero",
        number: "03",
        title: "¿Cuánto tiempo hasta que esto te dé retorno?",
        body: [
          "6 meses, 1 año, 2 años. Escríbelo.",
          "Si no puedes esperar ese tiempo, eso es información importante.",
        ],
        style: { bg: COLORS.morado, textColor: COLORS.blanco, accentColor: COLORS.amarillo },
      },
      {
        type: "numero",
        number: "04",
        title: "¿Qué pasa si en 3 meses no vendiste nada?",
        body: [
          "¿Puedes sobrevivir? ¿Tienes colchón? ¿Tienes plan B?",
          "No para asustarte — para que tomes decisiones con los ojos abiertos.",
        ],
        style: { bg: COLORS.naranja, textColor: COLORS.blanco },
      },
      {
        type: "numero",
        number: "05",
        title: "¿Tienes al menos 3 meses de gastos ahorrados?",
        body: [
          "Llámalo runway. El tiempo que puedes operar sin ingresos.",
          "Sin esto, cualquier tropiezo se convierte en crisis.",
        ],
        style: { bg: COLORS.naranja, textColor: COLORS.blanco },
      },
      {
        type: "contenido",
        title: "Cómo usarlas",
        body: [
          "No tienes que tener todas las respuestas perfectas.",
          "Pero sí tienes que tener las respuestas honestas.",
          "Respóndelas en papel. Lo que no sabes — es lo primero que tienes que aprender.",
        ],
        style: { bg: COLORS.verde, textColor: COLORS.blanco },
      },
      {
        type: "cta",
        title: "¿Cuál de las 5 no puedes responder todavía?",
        subtitle: "Cuéntame en los comentarios — eso es exactamente lo que voy a desarrollar en próximos posts.",
        style: { bg: COLORS.oscuro, textColor: COLORS.amarillo },
      },
    ],
  },

  {
    id: 6,
    semana: 2,
    formato: "reel",
    pilar: "Dinero & finanzas prácticas",
    pilarColor: COLORS.verde,
    titulo: "Qué es cash flow de verdad (versión latina, sin tecnicismos)",
    caption: `Vendes bien pero igual sientes que no hay dinero — eso es un problema de cash flow. Y es más común de lo que crees. 💰\n\nCash flow no es cuánto vendes. Es cuándo entra y cuándo sale el dinero.\n\nComenta PLANTILLA 📋 y te mando la que yo uso para proyectar 30 días adelante.\n\n#cashflow #finanzasparaemprendedores #negociolatino #contabilidadsimple`,
    slides: [
      {
        type: "portada",
        title: "Qué es cash flow",
        subtitle: "de verdad (versión latina, sin tecnicismos).",
        handle: "@gabrielakurtagic",
        style: { bg: COLORS.verde, textColor: COLORS.blanco, accentColor: COLORS.amarillo },
      },
      {
        type: "contenido",
        title: "¿Tu negocio vende bien pero no tiene plata?",
        body: [
          "Eso se llama problema de cash flow.",
          "VENDES PERO NO TIENES PLATA — ¿POR QUÉ?",
        ],
        style: { bg: COLORS.oscuro, textColor: COLORS.blanco, accentColor: COLORS.naranja },
      },
      {
        type: "contenido",
        title: "Explicación simple",
        body: [
          "Cash flow es el movimiento de dinero que entra y sale de tu negocio.",
          "No es cuánto vendes. Es cuánto tienes disponible y cuándo.",
          "\"Imagínate que vendes $5,000 este mes.\"",
          "Pero los proveedores hay que pagarlos ahora.",
          "Y tus clientes te pagan en 30 días.",
          "Ese gap — eso es tu problema de cash flow.",
        ],
        style: { bg: COLORS.crema, textColor: COLORS.oscuro, accentColor: COLORS.verde },
      },
      {
        type: "lista",
        title: "Las 3 reglas",
        body: [
          "Regla 1: Conoce cuándo entra y cuánto sale cada ciclo.",
          "Regla 2: Nunca dependas de que el cliente pague a tiempo — ten colchón.",
          "Regla 3: El cash flow se proyecta — mínimo 30 días adelante.",
        ],
        style: { bg: COLORS.morado, textColor: COLORS.blanco, accentColor: COLORS.amarillo },
      },
      {
        type: "cta",
        title: "¿Quieres la plantilla que yo uso?",
        subtitle: "Comenta PLANTILLA 📋 y te la mando.",
        style: { bg: COLORS.naranja, textColor: COLORS.blanco },
      },
    ],
  },

  {
    id: 7,
    semana: 2,
    formato: "carrusel",
    pilar: "Dinero & finanzas prácticas",
    pilarColor: COLORS.verde,
    titulo: "Cómo separar tu plata personal de la del negocio (versión USA)",
    caption: `Esto es lo primero que le digo a cualquier persona que empieza un negocio: separa tus cuentas. ✅\n\nNo porque sea un requisito legal (aunque eventualmente lo es). Sino porque sin esa separación, tus decisiones van a estar siempre distorsionadas.\n\n¿En cuál estás? ¿Ya tienes cuentas separadas o todavía lo tienes todo junto? 🤔\n\n#negociolatino #finanzasparaemprendedores #contabilidadbasica #emprendimientoUSA #sistemasdenegocio`,
    slides: [
      {
        type: "portada",
        title: "Cómo separar tu plata",
        subtitle: "personal de la del negocio (versión USA).",
        handle: "@gabrielakurtagic",
        style: { bg: COLORS.morado, textColor: COLORS.blanco, accentColor: COLORS.amarillo },
      },
      {
        type: "contenido",
        title: "Por qué importa tanto",
        body: [
          "Cuando mezclas tu dinero personal con el del negocio:",
          "— No sabes si el negocio gana o pierde.",
          "— No puedes planificar impuestos.",
          "— En tiempo de impuestos: pesadilla.",
          "— Si el negocio tiene problemas legales: tus bienes personales en riesgo.",
        ],
        style: { bg: COLORS.vinotinto, textColor: COLORS.blanco, accentColor: COLORS.amarillo },
      },
      {
        type: "numero",
        number: "01",
        title: "Paso 1: Abre una cuenta separada",
        body: [
          "No necesitas LLC todavía. Empieza con una cuenta bancaria separada.",
          "Opciones: Chase Business Complete, Bank of America Business, Relay (100% online, sin fees).",
          "Todo lo que entra del negocio: va ahí. Todo lo que sale del negocio: sale de ahí.",
        ],
        style: { bg: COLORS.verde, textColor: COLORS.blanco },
      },
      {
        type: "numero",
        number: "02",
        title: "Paso 2: Defínete un salario",
        body: [
          "¿Cuánto necesitas tú, como persona, para vivir este mes?",
          "Eso es tu salario de negocio.",
          "Transfiérelo esa cantidad a tu cuenta personal — no más, no menos.",
          "Lo que queda en la cuenta del negocio, es del negocio. No tuyo para gastar.",
        ],
        style: { bg: COLORS.verde, textColor: COLORS.blanco },
      },
      {
        type: "numero",
        number: "03",
        title: "Paso 3: Registra todo",
        body: [
          "No necesitas software caro. Empieza simple.",
          "Wave App (gratis, muy buena para pequeños negocios).",
          "Excel o Google Sheets (te enseño en próximos posts).",
          "Lo importante: cada dólar que entra y sale, registrado.",
        ],
        style: { bg: COLORS.verde, textColor: COLORS.blanco },
      },
      {
        type: "lista",
        title: "Señal de que lo estás haciendo bien",
        body: [
          "✅ ¿Cuánto vendió el negocio?",
          "✅ ¿Cuánto gastó el negocio?",
          "✅ ¿Cuánto ganó el negocio?",
          "✅ ¿Cuánto me pagué yo?",
          "Si puedes responder las 4: vas por buen camino.",
        ],
        style: { bg: COLORS.morado, textColor: COLORS.blanco, accentColor: COLORS.amarillo },
      },
      {
        type: "cta",
        title: "¿Todavía mezclas tus cuentas?",
        subtitle: "Cuéntame en qué etapa estás. 👇\nY si quieres una plantilla simple para empezar a registrar: comenta REGISTRO 📋",
        style: { bg: COLORS.naranja, textColor: COLORS.blanco },
      },
    ],
  },

  {
    id: 8,
    semana: 2,
    formato: "estatico",
    pilar: "Marca & estrategia",
    pilarColor: COLORS.naranja,
    titulo: "Tu marca no es tu logo. Es la expectativa.",
    caption: `Cuántas veces he visto a alguien gastar semanas eligiendo colores, tipografías, logos… y nunca definir qué experiencia le da a su cliente. 😕\n\nTu logo es el envoltorio. Tu marca es lo que hay adentro.\n\nCuando la gente ve tu nombre: ¿qué piensan? ¿qué sienten? ¿qué esperan recibir?\n\nEsa expectativa — eso es tu marca.\n\n¿La tuya está clara? 🤔\n\n#marcapersonal #estrategiademarca #branding #negociolatino #emprendimiento`,
    slides: [
      {
        type: "quote",
        title: "Tu marca no es tu logo.",
        subtitle: "Es la expectativa que la gente tiene cuando te ve.",
        handle: "@gabrielakurtagic",
        style: { bg: COLORS.crema, textColor: COLORS.oscuro, accentColor: COLORS.morado },
      },
    ],
  },

  // ═══════════════════════════════════════
  // SEMANA 3 — "Profundidad y criterio"
  // ═══════════════════════════════════════

  {
    id: 9,
    semana: 3,
    formato: "carrusel",
    pilar: "Dinero & finanzas prácticas",
    pilarColor: COLORS.verde,
    titulo: "5 señales de que necesitas sentarte con tus números YA",
    caption: `No tienes que estar en crisis para revisar tus números. De hecho, el mejor momento para hacerlo es antes de que llegue la crisis. 📉\n\nEstas 5 señales son las que más veo. Y la mayoría de las personas que las tienen… ni cuenta se dan.\n\n¿Cuántas reconoces en ti o en tu negocio? 👇\n\n#finanzaslatinas #ordenfinanciero #emprendedoreslatinos #negociosUSA #finanzaspersonales`,
    slides: [
      {
        type: "portada",
        title: "5 señales",
        subtitle: "de que necesitas sentarte con tus números YA.",
        handle: "@gabrielakurtagic",
        style: { bg: COLORS.naranja, textColor: COLORS.blanco },
      },
      {
        type: "contenido",
        title: "Intro",
        body: [
          "No hace falta que el negocio esté en crisis para revisar tus números.",
          "De hecho, lo mejor es revisarlos antes de que haya crisis.",
          "Estas 5 señales son las que me dicen que alguien necesita poner orden ya.",
        ],
        style: { bg: COLORS.crema, textColor: COLORS.oscuro, accentColor: COLORS.naranja },
      },
      {
        type: "numero",
        number: "01",
        title: "Siempre llegas al límite",
        body: [
          "\"Siempre llegas al límite — nunca sobra nada.\"",
          "Cada mes terminas raspando. Sin importar cuánto vendiste.",
          "Eso no es mala suerte. Es una estructura de gastos que no está alineada con tus ingresos.",
        ],
        style: { bg: COLORS.naranja, textColor: COLORS.blanco },
      },
      {
        type: "numero",
        number: "02",
        title: "No sabes cuánto tienes en total ahora mismo",
        body: [
          "¿Cuenta personal, cuenta del negocio, lo que te deben… ¿lo sabes?",
          "Si tienes que 'calcular' la respuesta — necesitas un sistema.",
        ],
        style: { bg: COLORS.naranja, textColor: COLORS.blanco },
      },
      {
        type: "numero",
        number: "03",
        title: "Tus decisiones de negocio las tomas por 'feeling'",
        body: [
          "¿Lanzo este producto? ¿Contrato a alguien? ¿Bajo el precio?",
          "Si la respuesta viene de la intuición y no de los números — es una señal.",
        ],
        style: { bg: COLORS.naranja, textColor: COLORS.blanco },
      },
      {
        type: "numero",
        number: "04",
        title: "Tienes deudas que llevan más de 6 meses igual",
        body: [
          "Sin crecer, sin bajar.",
          "Eso es síntoma de que el flujo de caja no alcanza para absorberlas.",
          "Hay que verlo con números para entender por qué.",
        ],
        style: { bg: COLORS.naranja, textColor: COLORS.blanco },
      },
      {
        type: "numero",
        number: "05",
        title: "Tu negocio vende, pero no sabes si es rentable",
        body: [
          "Vender no es ganar. Rentabilidad es lo que queda después de todos los costos.",
          "Si no puedes responder: ¿cuánto gano por cada dólar que vendo? — necesitas los números.",
        ],
        style: { bg: COLORS.naranja, textColor: COLORS.blanco },
      },
      {
        type: "contenido",
        title: "Qué hacer hoy",
        body: [
          "No tienes que resolver todo hoy.",
          "Pero sí tienes que empezar hoy.",
          "Paso 1: anota cuánto entra y cuánto sale este mes. Solo eso.",
          "El siguiente paso viene solo cuando ya tienes el primero.",
        ],
        style: { bg: COLORS.verde, textColor: COLORS.blanco },
      },
      {
        type: "cta",
        title: "¿Cuántas de estas señales reconoces?",
        subtitle: "Cuéntame en los comentarios — sin juicio, solo para saber dónde estás.",
        style: { bg: COLORS.morado, textColor: COLORS.blanco, accentColor: COLORS.amarillo },
      },
    ],
  },

  {
    id: 10,
    semana: 3,
    formato: "reel",
    pilar: "Negocios & modelos de negocio",
    pilarColor: COLORS.verde,
    titulo: "El error que hace que negocios rentables se hundan igual",
    caption: `Esto lo veo más de lo que quisiera: negocios que venden bien y sin embargo no tienen dinero. 💸\n\nEl problema casi siempre es el mismo: confunden lo que entra con lo que ganan.\n\nVentas ≠ Ganancias.\n\n¿Sabes cuál es tu margen de ganancia real? Cuéntame en los comentarios 👇\n\n#margendeganancias #finanzasparaemprendedores #negociolatino #rentabilidad #cashflow`,
    slides: [
      {
        type: "portada",
        title: "El error que hace",
        subtitle: "que negocios rentables se hundan igual.",
        handle: "@gabrielakurtagic",
        style: { bg: COLORS.oscuro, textColor: COLORS.blanco, accentColor: COLORS.naranja },
      },
      {
        type: "contenido",
        title: "¿Sabías que un negocio puede ser rentable y quebrarse?",
        body: [
          "RENTABLE PERO QUEBRADO — SÍ, ES POSIBLE.",
          "El error: confundir ventas con ganancias.",
        ],
        style: { bg: COLORS.vinotinto, textColor: COLORS.blanco, accentColor: COLORS.amarillo },
      },
      {
        type: "contenido",
        title: "Ejemplo",
        body: [
          "Imagina que vendes $8,000 este mes. Genial.",
          "Pero los gastos: inventario $3,000, nómina $2,500, renta $800, servicios $500, marketing $500.",
          "Total: $7,300.",
          "\"Ganancias\": $700. Y eso antes de impuestos.",
        ],
        style: { bg: COLORS.crema, textColor: COLORS.oscuro, accentColor: COLORS.naranja },
      },
      {
        type: "contenido",
        title: "Solución",
        body: [
          "La solución no es vender más — es saber tu margen.",
          "¿Cuánto te queda por cada dólar que vendes?",
          "Si no sabes ese número hoy — ese es el número que tienes que saber.",
          "No es sexy. Pero te salva el negocio.",
        ],
        style: { bg: COLORS.verde, textColor: COLORS.blanco, accentColor: COLORS.amarillo },
      },
      {
        type: "cta",
        title: "¿Sabes tu margen?",
        subtitle: "Cuéntame en los comentarios. 👇",
        style: { bg: COLORS.oscuro, textColor: COLORS.amarillo },
      },
    ],
  },

  {
    id: 11,
    semana: 3,
    formato: "carrusel",
    pilar: "Negocios & modelos de negocio",
    pilarColor: COLORS.verde,
    titulo: "Cómo calcular si tu precio cubre tus costos (en 4 pasos)",
    caption: `¿Tu precio lo pusiste porque 'se sentía bien' o porque calculaste que funciona? 🤔\n\nNo hay nada malo con empezar por intuición. Pero en algún punto hay que hacer las matemáticas.\n\nEste carrusel te muestra el proceso en 4 pasos. Es el mismo que uso en mi trabajo.\n\nComenta PUNTO DE EQUILIBRIO 📊 y te comparto la plantilla en Excel que yo uso.\n\n#puntodeequilibrio #preciosdenegocios #finanzasparaemprendedores #negociolatino #estrategiadenegocios`,
    slides: [
      {
        type: "portada",
        title: "Cómo calcular si tu precio",
        subtitle: "cubre tus costos (en 4 pasos).",
        handle: "@gabrielakurtagic",
        style: { bg: COLORS.verde, textColor: COLORS.blanco, accentColor: COLORS.amarillo },
      },
      {
        type: "contenido",
        title: "El problema",
        body: [
          "Muchos negocios ponen precios por intuición.",
          "Lo que cobra la competencia.",
          "Lo que el cliente parece dispuesto a pagar.",
          "Lo que se me ocurre.",
          "El problema: sin saber tus costos, puedes estar vendiendo a pérdida sin darte cuenta.",
        ],
        style: { bg: COLORS.crema, textColor: COLORS.oscuro, accentColor: COLORS.verde },
      },
      {
        type: "numero",
        number: "01",
        title: "Calcula tus costos directos",
        body: [
          "Costos directos = lo que gastas para hacer/entregar ese producto o servicio.",
          "Ejemplo para un producto físico:",
          "Materiales: $15 · Empaque: $2 · Envío: $5",
          "Total costo directo: $22",
        ],
        style: { bg: COLORS.morado, textColor: COLORS.blanco, accentColor: COLORS.amarillo },
      },
      {
        type: "numero",
        number: "02",
        title: "Calcula tus costos fijos mensuales",
        body: [
          "Costos fijos = lo que pagas aunque no vendas nada.",
          "Renta: $800 · Servicios: $150 · Suscripciones/software: $100",
          "Tu salario mínimo: $2,000",
          "Total fijo: $3,050/mes",
        ],
        style: { bg: COLORS.morado, textColor: COLORS.blanco, accentColor: COLORS.amarillo },
      },
      {
        type: "numero",
        number: "03",
        title: "Calcula cuántas unidades necesitas vender",
        body: [
          "Para cubrir los costos fijos, ¿cuántas unidades tienes que vender?",
          "Fórmula: Costos fijos ÷ (Precio – Costo directo)",
          "Ejemplo: $3,050 ÷ ($50 - $22) = $3,050 ÷ $28 = 109 unidades/mes",
          "Ese es tu punto de equilibrio. Por encima de eso: ganancia.",
        ],
        style: { bg: COLORS.morado, textColor: COLORS.blanco, accentColor: COLORS.amarillo },
      },
      {
        type: "numero",
        number: "04",
        title: "Evalúa si es realista",
        body: [
          "¿Puedes vender 109 unidades al mes?",
          "Si no: bien, el precio funcional.",
          "Si no: necesitas subir el precio o bajar los costos (o ambos).",
          "Este es el análisis que te da claridad para tomar decisiones.",
        ],
        style: { bg: COLORS.verde, textColor: COLORS.blanco },
      },
      {
        type: "cta",
        title: "¿Hiciste este cálculo para tu negocio?",
        subtitle: "Comenta PUNTO DE EQUILIBRIO 📊 y te comparto la plantilla en Excel que yo uso.",
        style: { bg: COLORS.naranja, textColor: COLORS.blanco },
      },
    ],
  },

  {
    id: 12,
    semana: 3,
    formato: "estatico",
    pilar: "Criterio & pensamiento estratégico",
    pilarColor: COLORS.borgona,
    titulo: "Lo que no mides, no lo puedes mejorar.",
    caption: `No tienes que medir todo. Pero sí tienes que medir lo que importa. 📊\n\nPara cada negocio hay 3-5 números clave que te dicen si vas bien o mal.\n\n¿Cuáles son los tuyos? ¿Los tienes claros?\n\nSi no — cuéntame en qué tipo de negocio estás y te ayudo a identificarlos. 🤝\n\n#métricas #KPIs #negociolatino #estrategia #finanzas`,
    slides: [
      {
        type: "quote",
        title: "Lo que no mides,",
        subtitle: "no lo puedes mejorar.",
        handle: "@gabrielakurtagic",
        style: { bg: COLORS.vinotinto, textColor: COLORS.blanco, accentColor: COLORS.amarillo },
      },
    ],
  },

  // ═══════════════════════════════════════
  // SEMANA 4 — "Valor profundo + Comunidad"
  // ═══════════════════════════════════════

  {
    id: 13,
    semana: 4,
    formato: "carrusel",
    pilar: "Dinero & finanzas prácticas",
    pilarColor: COLORS.verde,
    titulo: "Lo que me habría gustado saber antes de mezclar mi plata con la del negocio",
    caption: `Este error lo cometí. Y lo he visto cometer muchas veces. 🤦‍♀️\n\nMezclar tu plata personal con la del negocio parece inofensivo al principio. Pero a medida que el negocio crece, se convierte en un problema real.\n\nLos 3 cambios que más sentí cuando lo separé: claridad real en los números, una forma más sana de pagarme, y cierres de año sin dramas.\n\n¿En qué paso estás tú? Cuéntame 👇\n\n#finanzasparaemprendedores #negociolatino #contabilidadsimple #emprendimientoUSA #sistemasdenegocio`,
    slides: [
      {
        type: "portada",
        title: "Lo que me habría gustado saber",
        subtitle: "antes de mezclar mi plata con la del negocio.",
        handle: "@gabrielakurtagic",
        style: { bg: COLORS.morado, textColor: COLORS.blanco, accentColor: COLORS.amarillo },
      },
      {
        type: "contenido",
        title: "La historia",
        body: [
          "\"Al principio de emprender, todo iba a la misma cuenta.\"",
          "Mis gastos personales, los del negocio, lo que entraba de clientes — todo mezclado.",
          "Hasta que llegó el momento de declarar impuestos y no sabía qué era qué.",
          "No fue catastrófico. Pero sí fue innecesariamente complicado.",
        ],
        style: { bg: COLORS.crema, textColor: COLORS.oscuro, accentColor: COLORS.morado },
      },
      {
        type: "numero",
        number: "01",
        title: "Cambio 1: Saber real — ¿el negocio gana?",
        body: [
          "Cuando separé las cuentas, por primera vez pude ver los números reales.",
          "No lo que yo pensaba que ganaba — lo que realmente quedaba.",
          "Eso siempre es necesario.",
        ],
        style: { bg: COLORS.verde, textColor: COLORS.blanco },
      },
      {
        type: "numero",
        number: "02",
        title: "Cambio 2: Pagarme a ti mismo con criterio",
        body: [
          "Cuando todo está mezclado, te pagas lo que necesitas en el momento.",
          "Cuando está separado, defines un salario. Y respetas ese número.",
          "Eso cambia tu relación con el dinero — y con el negocio.",
        ],
        style: { bg: COLORS.verde, textColor: COLORS.blanco },
      },
      {
        type: "numero",
        number: "03",
        title: "Cambio 3: Impuestos sin drama",
        body: [
          "Con cuentas separadas, al final del año tienes un registro claro.",
          "Tus gastos de negocio están documentados. Tus ingresos también.",
          "El contador (o la misma) puede trabajar con eso.",
          "Sin separación: horas reconstruyendo transacciones, y probablemente pagando de más.",
        ],
        style: { bg: COLORS.verde, textColor: COLORS.blanco },
      },
      {
        type: "contenido",
        title: "Cómo implementarlo esta semana",
        body: [
          "Paso 1: Abre una cuenta de negocio (Relay, Chase Business, o la de tu banco actual).",
          "Paso 2: A partir de hoy, todo lo del negocio va ahí.",
          "Paso 3: Define cuánto te vas a pagar este mes.",
          "Todo eso. El resto viene solo.",
        ],
        style: { bg: COLORS.morado, textColor: COLORS.blanco, accentColor: COLORS.amarillo },
      },
      {
        type: "cta",
        title: "¿Todavía tienes todo mezclado?",
        subtitle: "Sin juicio — cuéntame en qué paso estás.\nY si quieres una plantilla simple para empezar a registrar: comenta REGISTRO 📋",
        style: { bg: COLORS.naranja, textColor: COLORS.blanco },
      },
    ],
  },

  {
    id: 14,
    semana: 4,
    formato: "reel",
    pilar: "Criterio & pensamiento estratégico",
    pilarColor: COLORS.morado,
    titulo: "Por qué los cursos de gurús no te funcionan (y no es tu culpa)",
    caption: `Esto lo escucho constantemente: 'compré el curso, lo seguí al pie de la letra, y no funcionó'. 😤\n\nY casi siempre la persona se culpa a sí misma.\n\nPero la realidad es que muchos de esos cursos no están diseñados para tu contexto, tu mercado, ni tu etapa.\n\nAprender de otros es valioso. Pero hay que saber filtrar qué aplica y qué hay que adaptar.\n\n¿Tuviste una experiencia así? Cuéntame 👇\n\n#emprendimientolateral #cursosdigitales #negociolatino #criterioestrategico #aprendizaje`,
    slides: [
      {
        type: "portada",
        title: "Por qué los cursos de gurús",
        subtitle: "no te funcionan (y no es tu culpa).",
        handle: "@gabrielakurtagic",
        style: { bg: COLORS.oscuro, textColor: COLORS.blanco, accentColor: COLORS.naranja },
      },
      {
        type: "contenido",
        title: "¿Compraste un curso y no funcionó?",
        body: [
          "\"¿Es que no lo hiciste?\" No.",
          "NO ES TU CULPA. Y AQUÍ TE EXPLICO POR QUÉ.",
        ],
        style: { bg: COLORS.morado, textColor: COLORS.blanco, accentColor: COLORS.amarillo },
      },
      {
        type: "lista",
        title: "3 razones reales",
        body: [
          "Razón 1: Te enseñan a copiar, no a crear.",
          "\"Haz lo que yo hice\" funciona cuando tienes el mismo contexto, la misma audiencia, el mismo momento.",
          "Razón 2: No lo que yo hice funciona cuando tienes el mismo contexto.",
          "Razón 3: Motivación sin sistema.",
          "Sales del curso emocionado. Pero no tienes un proceso claro para aplicarlo.",
        ],
        style: { bg: COLORS.crema, textColor: COLORS.oscuro, accentColor: COLORS.morado },
      },
      {
        type: "contenido",
        title: "Lo que sí funciona",
        body: [
          "Entender los principios, aplicarlos a TU contexto, con TUS números.",
          "De eso hablo de estructura y criterio, no de fórmulas.",
          "¿Tuviste esta experiencia con algún curso? Cuéntame. 👇",
        ],
        style: { bg: COLORS.verde, textColor: COLORS.blanco, accentColor: COLORS.amarillo },
      },
      {
        type: "cta",
        title: "¿Tuviste una experiencia así?",
        subtitle: "Cuéntame 👇",
        style: { bg: COLORS.oscuro, textColor: COLORS.amarillo },
      },
    ],
  },

  {
    id: 15,
    semana: 4,
    formato: "carrusel",
    pilar: "Negocios & modelos de negocio",
    pilarColor: COLORS.verde,
    titulo: "La ruta más corta para saber si tu negocio es rentable (en 30 minutos)",
    caption: `¿Sabes si tu negocio es rentable? No lo que crees — lo que dicen los números. 📊\n\nEste ejercicio toma 30 minutos y te da claridad real.\n\nNo necesitas contador, ni software caro. Solo 4 preguntas honestas.\n\nY guarda este carrusel — es el ejercicio mensual que deberías repetir cada cierre de mes. 📌\n\n#rentabilidad #finanzasparaemprendedores #negociolatino #puntodeequilibrio #cashflow`,
    slides: [
      {
        type: "portada",
        title: "¿Tu negocio es rentable?",
        subtitle: "Averígualo en 30 minutos con estas 4 preguntas.",
        handle: "@gabrielakurtagic",
        style: { bg: COLORS.oscuro, textColor: COLORS.amarillo },
      },
      {
        type: "contenido",
        title: "Antes de empezar",
        body: [
          "Necesitas: tu teléfono (o Excel) y 30 minutos sin interrupciones.",
          "No necesitas software especial. Solo honestidad con los números.",
          "Al final vas a saber si tu negocio es rentable — y cuánto.",
        ],
        style: { bg: COLORS.crema, textColor: COLORS.oscuro },
      },
      {
        type: "numero",
        number: "01",
        title: "¿Cuánto son tus costos directos?",
        body: [
          "¿Cuánto gastas para producir/entregar lo que vendes?",
          "Materiales, empaques, tiempo o lo monetizas, subcontratistas.",
          "Ejemplo: $25 por unidad producida.",
          "Escríbelo. Costo directo = ___",
        ],
        style: { bg: COLORS.morado, textColor: COLORS.blanco, accentColor: COLORS.amarillo },
      },
      {
        type: "numero",
        number: "02",
        title: "¿Cuáles son tus costos fijos mensuales?",
        body: [
          "Lo que pagas aunque no vendas nada este mes.",
          "Renta, servicios, suscripciones, tu salario mínimo.",
          "Ejemplo: $2,500/mes",
          "Escríbelo. Costos fijos = ___",
        ],
        style: { bg: COLORS.morado, textColor: COLORS.blanco, accentColor: COLORS.amarillo },
      },
      {
        type: "numero",
        number: "03",
        title: "¿Cuánto vendiste este mes?",
        body: [
          "No lo que cobraste — lo que ya cobraste.",
          "Ejemplo: $6,000 en ventas.",
          "Escríbelo. Ventas del mes = ___",
        ],
        style: { bg: COLORS.morado, textColor: COLORS.blanco, accentColor: COLORS.amarillo },
      },
      {
        type: "numero",
        number: "04",
        title: "¿Qué queda?",
        body: [
          "Fórmula: Ventas – Costos directos totales – Costos fijos = Ganancia",
          "Ejemplo: $6,000 – (25 × unidades vendidas) – $2,500",
          "Si vendes 100 unidades: $6,000 – $2,500 – $2,500 = $1,000 de ganancia.",
          "¿Ese número te paga a ti? ¿La promesa crecer?",
        ],
        style: { bg: COLORS.verde, textColor: COLORS.blanco },
      },
      {
        type: "contenido",
        title: "Interpretando el resultado",
        body: [
          "Número positivo y cubre tu salario mínimo → vas por buen camino.",
          "Número positivo pero no te paga → hay que ajustar precios o costos.",
          "Número negativo → urgente revisar estructura.",
          "Cualquier resultado es información valiosa.",
        ],
        style: { bg: COLORS.crema, textColor: COLORS.oscuro },
      },
      {
        type: "cta",
        title: "¿Cuál fue tu resultado?",
        subtitle: "No tienes que compartir el número — solo dime: positivo, ajustado, o negativo.\nY guarda este carrusel para repetirlo cada mes. 📌",
        style: { bg: COLORS.morado, textColor: COLORS.blanco, accentColor: COLORS.amarillo },
      },
    ],
  },

  {
    id: 16,
    semana: 4,
    formato: "estatico",
    pilar: "Marca & estrategia",
    pilarColor: COLORS.naranja,
    titulo: "Cierre de mes — Un mes de contenido real.",
    caption: `Este fue el primer mes. 🤝\n\nHablamos de cash flow, de separar cuentas, de precios, de modelos de negocio, de cómo pensar con criterio.\n\nTodo con números reales. Sin promesas que no puedo cumplir.\n\nSi llegaste hasta acá — gracias. Me dice que este contenido te sirve.\n\nEl mes 2 viene con más profundidad: plantillas reales, casos prácticos y posiblemente algo interactivo donde podamos trabajar juntos.\n\n¿Qué tema quieres que desarrollemos más el próximo mes? 🤔\n\n#finanzaslatinas #negociolatino #marcapersonal #estrategia #emprendimiento`,
    slides: [
      {
        type: "quote",
        title: "Un mes de contenido real.",
        subtitle: "El siguiente viene con más estructura, más profundidad y mejores herramientas.\nGracias por estar aquí.",
        handle: "@gabrielakurtagic",
        style: { bg: COLORS.morado, textColor: COLORS.blanco, accentColor: COLORS.amarillo },
      },
    ],
  },
];
