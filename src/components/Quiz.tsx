"use client";

import { useState } from "react";
import Image from "next/image";

interface Question {
  question: string;
  emoji: string;
  options: string[];
}

const questions: Question[] = [
  {
    question: "¿En qué etapa está tu negocio?",
    emoji: "🚀",
    options: [
      "Tengo una idea pero no he empezado",
      "Ya tengo clientes pero quiero crecer",
      "Facturo bien pero me siento estancada",
    ],
  },
  {
    question: "¿Cuál es tu mayor desafío ahora mismo?",
    emoji: "🎯",
    options: [
      "No sé cómo diferenciarme de la competencia",
      "Me cuesta conseguir clientes consistentemente",
      "Trabajo demasiado y no veo resultados proporcionales",
    ],
  },
  {
    question: "¿Qué buscas en este momento?",
    emoji: "💡",
    options: [
      "Claridad y un plan concreto",
      "Una estrategia de marketing que funcione",
      "Escalar sin perder calidad de vida",
    ],
  },
];

const results = [
  {
    title: "Necesitas base antes de construir.",
    message:
      "Antes de invertir dinero o tiempo, necesitas un plan financiero y una propuesta de valor clara. Yo te puedo ayudar con eso.",
  },
  {
    title: "Tu negocio necesita estructura.",
    message:
      "Tienes tracción pero sin sistema. Es hora de profesionalizar tus finanzas, definir precios con datos y construir una marca sólida.",
  },
  {
    title: "Es momento de escalar con inteligencia.",
    message:
      "Ya probaste que funciona. Ahora necesitas estrategia de crecimiento, métricas claras y una marca que trabaje por ti.",
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

  // Get result based on most common answer index
  const getResult = () => {
    const counts = [0, 0, 0];
    answers.forEach((a) => counts[a]++);
    const maxIdx = counts.indexOf(Math.max(...counts));
    return results[maxIdx];
  };

  return (
    <section id="quiz" className="bg-vinotinto px-6 md:px-[60px] py-24 md:py-[120px]">
      <div className="max-w-[720px] mx-auto">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-amarillo mb-3">
            Quiz interactivo
          </div>
          <h2 className="font-display text-[clamp(32px,4vw,52px)] font-extrabold text-crema tracking-tight leading-[1.05] mb-4">
            ¿Dónde estás en tu<br />
            <em className="text-amarillo">camino emprendedor?</em>
          </h2>
          <div className="w-16 h-16 mx-auto mb-4 overflow-hidden">
            <Image src="/9.png" alt="Logo" width={64} height={64} className="w-full h-full object-cover" />
          </div>
          <p className="font-sans text-sm font-light text-crema/50">
            Responde 3 preguntas y descubre tu próximo paso.
          </p>
        </div>

        {/* Quiz card */}
        <div className="bg-oscuro/50 backdrop-blur-sm p-8 md:p-12 border border-crema/[0.08] reveal">
          {!completed ? (
            <>
              {/* Progress bar */}
              <div className="flex gap-2 mb-10">
                {questions.map((_, i) => (
                  <div
                    key={i}
                    className={`h-[3px] flex-1 transition-all duration-500 ${
                      i <= currentQuestion ? "bg-amarillo" : "bg-crema/10"
                    }`}
                  />
                ))}
              </div>

              <div className="font-sans text-[10px] font-medium uppercase tracking-[2px] text-crema/30 mb-2">
                Pregunta {currentQuestion + 1} de {questions.length}
              </div>

              <div className="text-[40px] mb-4">{questions[currentQuestion].emoji}</div>

              <h3 className="font-display text-[24px] md:text-[28px] font-bold text-crema mb-8 leading-tight">
                {questions[currentQuestion].question}
              </h3>

              <div className="flex flex-col gap-3">
                {questions[currentQuestion].options.map((option, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    className="w-full text-left font-sans text-[13px] font-light bg-crema/[0.04] hover:bg-amarillo/[0.12] border border-crema/[0.08] hover:border-amarillo text-crema/80 px-7 py-5 transition-all duration-200 group"
                  >
                    <span className="font-sans text-[10px] font-bold text-amarillo/40 mr-3 group-hover:text-amarillo transition-colors">
                      {String.fromCharCode(65 + i)}.
                    </span>
                    {option}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-6">
              <div className="w-20 h-20 bg-amarillo/15 border border-amarillo/25 mx-auto mb-7 flex items-center justify-center">
                <span className="text-amarillo text-3xl">✓</span>
              </div>

              <div className="font-sans text-[9px] font-bold uppercase tracking-[2px] text-amarillo/60 mb-3">
                Tu resultado →
              </div>

              <h3 className="font-display text-[26px] font-extrabold text-crema mb-4 leading-tight">
                {getResult().title}
              </h3>

              <p className="font-sans text-[14px] font-light text-crema/55 leading-relaxed mb-10 max-w-md mx-auto">
                {getResult().message}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="#contacto"
                  className="font-sans text-[11px] font-bold uppercase tracking-[2px] bg-amarillo text-oscuro px-8 py-4 hover:bg-white transition-colors"
                >
                  Recibir mi plan →
                </a>
                <button
                  onClick={reset}
                  className="font-sans text-[11px] font-medium uppercase tracking-[1.5px] text-crema/30 hover:text-crema transition-colors py-4"
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
