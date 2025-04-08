// FAQ.tsx
import React, { useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "¿Cuánto tiempo toma crear una página web?",
      answer:
        "El tiempo depende de la complejidad del proyecto, pero generalmente tomamos entre 2 y 6 semanas para entregar un sitio web funcional y optimizado.",
    },
    {
      question: "¿Los sitios web son compatibles con todos los dispositivos?",
      answer:
        "Sí, todos nuestros sitios web son diseñados con un enfoque responsivo, lo que significa que se adaptan perfectamente a cualquier dispositivo, ya sea móvil, tablet o escritorio.",
    },
    {
      question: "¿Ofrecen servicios de mantenimiento?",
      answer:
        "Sí, ofrecemos planes de mantenimiento personalizados para asegurarnos de que tu sitio web esté siempre actualizado y funcionando sin problemas.",
    },
    {
      question: "¿Qué opciones de pago ofrecen?",
      answer:
        "Aceptamos pagos mediante transferencia bancaria, tarjetas de crédito y débito. También ofrecemos planes de pago en cuotas para proyectos más grandes.",
    },
    {
      question: "¿Puedo personalizar mi sitio web después de que esté terminado?",
      answer:
        "¡Claro! Diseñamos sitios web que son fáciles de personalizar. Además, te proporcionamos herramientas y soporte para que puedas hacer ajustes cuando lo necesites.",
    },
    {
      question: "¿Incluyen optimización para SEO?",
      answer:
        "Sí, todos nuestros sitios web están optimizados para SEO, lo que ayuda a que tu página sea más visible en los motores de búsqueda como Google.",
    },
    {
      question: "¿Pueden integrar mi sitio con redes sociales?",
      answer:
        "Por supuesto, podemos integrar tu sitio web con tus redes sociales para que puedas compartir contenido fácilmente y aumentar tu presencia online.",
    },
    {
      question: "¿Ofrecen hosting y dominio?",
      answer:
        "No ofrecemos hosting ni dominio directamente, pero te asesoramos para elegir las mejores opciones y te ayudamos con la configuración.",
    },
    {
      question: "¿Qué tecnologías utilizan para desarrollar los sitios?",
      answer:
        "Utilizamos tecnologías modernas como React, Tailwind CSS, y bases de datos como MySQL y MongoDB, dependiendo de las necesidades del proyecto.",
    },
    {
      question: "¿Puedo ver el progreso de mi proyecto durante el desarrollo?",
      answer:
        "Sí, te proporcionamos actualizaciones regulares y acceso a una versión en desarrollo para que puedas seguir el progreso y darnos feedback.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Preguntas Frecuentes
        </h1>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-gray-100 p-6 rounded-xl shadow-lg border border-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                openIndex === index ? "bg-gradient-to-r from-emerald-50 to-blue-50 border-emerald-300" : ""
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center text-left focus:outline-none"
              >
                <HelpCircle
                  className={`w-6 h-6 mr-3 flex-shrink-0 ${
                    openIndex === index ? "text-emerald-500" : "text-gray-500"
                  }`}
                />
                <h3
                  className={`text-xl font-semibold flex-1 pr-4 ${
                    openIndex === index ? "text-emerald-600" : "text-gray-800"
                  }`}
                >
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;