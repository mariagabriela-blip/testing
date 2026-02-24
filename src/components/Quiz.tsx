"use client";

import { useState } from "react";

interface Question {
  question: string;
  options: string[];
}

const questions: Question[] = [
  {
    question: "¿En qué etapa está tu negocio?",
    options: [
      "Tengo una idea pero no he empezado",
      "Ya tengo clientes pero quiero crecer",
      "Facturo bien pero me siento estancada",
    ],
  },
  {
    question: "¿Cuál es tu mayor desafío ahora mismo?",
    options: [
      "No sé cómo diferenciarme de la competencia",
      "Me cuesta conseguir clientes consistentemente",
      "Trabajo demasiado y no veo resultados proporcionales",
    ],
  },
  {
    question: "¿Qué buscas en este momento?",
    options: [
      "Claridad y un plan concreto",
      "Una estrategia de marketing que funcione",
      "Escalar sin perder calidad de vida",
    ],
  },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [completed, setCompleted] = useState(false);

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCompleted(true);
    }
  };

  const reset = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setCompleted(false);
  };

  return (
    <section id="quiz" className="bg-vinotinto py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-sans text-sm uppercase tracking-[0.25em] text-amarillo mb-4">
            Quiz interactivo
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-crema mb-4">
            ¿Dónde estás en tu camino emprendedor?
          </h2>
          <p className="font-sans text-crema/70">
            Responde 3 preguntas y descubre tu próximo paso.
          </p>
        </div>

        <div className="bg-oscuro/40 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-crema/10">
          {!completed ? (
            <>
              {/* Progress bar */}
              <div className="flex gap-2 mb-8">
                {questions.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 flex-1 rounded-full transition-colors ${
                      i <= currentQuestion ? "bg-amarillo" : "bg-crema/20"
                    }`}
                  />
                ))}
              </div>

              <p className="font-sans text-crema/50 text-sm mb-2">
                Pregunta {currentQuestion + 1} de {questions.length}
              </p>
              <h3 className="text-2xl font-bold text-crema mb-8">
                {questions[currentQuestion].question}
              </h3>

              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    className="w-full text-left font-sans bg-crema/5 hover:bg-morado/20 border border-crema/10 hover:border-morado/40 text-crema px-6 py-4 rounded-xl transition-all text-sm"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center">
              <div className="w-16 h-16 bg-amarillo/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-amarillo text-2xl">&#10003;</span>
              </div>
              <h3 className="text-2xl font-bold text-crema mb-4">
                ¡Listo! Ya tengo tu perfil
              </h3>
              <p className="font-sans text-crema/70 mb-8 leading-relaxed">
                Basado en tus respuestas, tengo recomendaciones personalizadas
                para ti. Déjame tu email abajo y te las envío directamente.
              </p>
              <div className="flex gap-4 justify-center">
                <a
                  href="#formulario"
                  className="inline-block bg-amarillo hover:bg-amarillo/90 text-oscuro font-sans font-semibold px-8 py-3 rounded-full transition-colors text-sm"
                >
                  Recibir mis resultados
                </a>
                <button
                  onClick={reset}
                  className="font-sans text-crema/50 hover:text-crema text-sm transition-colors"
                >
                  Repetir quiz
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
