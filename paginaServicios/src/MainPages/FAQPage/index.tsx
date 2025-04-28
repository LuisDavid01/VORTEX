// FAQ.tsx
import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Spinner from "../../Components/Spinner";
import { useTranslation } from "react-i18next";

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const faqs = t("faqs.items", { returnObjects: true }) as Array<{
    question: string;
    answer: string;
  }>;

  const toggleFAQ = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  if (loading) {
    return <Spinner overlay bgColor="bg-white" />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          {t("faqs.title")}
        </h1>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-gray-100 p-6 rounded-xl shadow-lg border border-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                openIndex === index
                  ? "bg-gradient-to-r from-emerald-50 to-blue-50 border-emerald-300"
                  : ""
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
