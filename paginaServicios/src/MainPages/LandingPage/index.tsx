import React from "react";
import { useState } from "react";
import img1 from "../../Assets/img_1.jpg";
import {
  Check,
  Globe,
  Code,
  Zap,
  Lightbulb,
  Database,
  ChartNoAxesCombined,
} from "lucide-react";
import Header from "../../Components/Header";
import Button from "../../Components/Button";

import Footer from "../../Components/Footer";

import Modal from "../../Components/Modal";
import PriceCalculator from "../../Components/PriceCalculator";


const WebServiceLanding = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const features = [
    {
      icon: <Globe className="w-10 h-10 text-blue-500" />,
      title: "Diseño Responsivo",
      description:
        "Sitios web que se adaptan perfectamente a cualquier dispositivo.",
    },
    {
      icon: <Code className="w-10 h-10 text-black-500" />,
      title: "Código Limpio",
      description:
        "Desarrollo con las mejores prácticas y tecnologías modernas.",
    },
    {
      icon: <Zap className="w-10 h-10 text-purple-500" />,
      title: "Entregas rapidas",
      description: "Proyectos de calidad adaptados a las fechas limite de su negocio",
    },
    {
      icon: <ChartNoAxesCombined className="w-10 h-10 text-green-500" />,
      title: "Alto Rendimiento",
      description:
        "Páginas web rápidas y optimizadas para una excelente experiencia.",
    },
    {
      icon: <Database className="w-10 h-10 text-red-500" />,
      title: "Desarrollo y diseño de bases de datos",
      description:
        "Diseñamos bases de datos SQL y NoSql. MySql,Sql server, MongoDb, Sqlite.",
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-yellow-500" />,
      title: "Personalizable",
      description: "Crea tu propio espacio digital a medida.",
    },
  ];

  const handleOpenModal = (modal: boolean) => {
    setModalOpen(modal);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 grid md:grid-cols-2 items-center gap-12 py-16">
        <div>
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Creamos tu Página Web Perfecta
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Diseñamos sitios web modernos, funcionales y totalmente
            personalizados para impulsar tu negocio online.
          </p>
          <div className="flex items-center mb-6">
            <Check className="w-6 h-6 text-green-500 mr-2" />
            <span>Diseño Profesional</span>
          </div>
          <div className="flex items-center mb-6">
            <Check className="w-6 h-6 text-green-500 mr-2" />
            <span>Totalmente Responsive</span>
          </div>
          <div className="flex items-center mb-8">
            <Check className="w-6 h-6 text-green-500 mr-2" />
            <span>Optimizado para SEO</span>
          </div>
          <Button
            handleClick={handleOpenModal}
            buttonClass="bg-gradient-to-r from-emerald-400 to-blue-500 text-white px-10 py-4 rounded-full  transition-all duration-300 text-xl font-bold shadow-lg transform hover:scale-102"
          >
            Cotiza tu sueño digital!
          </Button>
        </div>

        <div className="hidden md:block">
          <img src={img1} alt="Diseño web" className="rounded-xl shadow-2xl" />
        </div>
      </main>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">
            Nuestras Características
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-md">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer/>

    
      {modalOpen && (
        <Modal
          handleClick={() => handleOpenModal(false)}
          body={
            <div className="container mx-auto px-4 ">
              <PriceCalculator />
            </div>
          }
        />
      )}

    </div>
  );
};

export default WebServiceLanding;
