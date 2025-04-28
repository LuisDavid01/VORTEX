import { useState, useEffect } from "react";
import img1 from "../../Assets/img.1.webp";
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
import Spinner from "../../Components/Spinner";
import { useTranslation } from "react-i18next";

const WebServiceLanding = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();

  const features = [
    {
      icon: <Globe className="w-10 h-10 text-blue-500" />,
      title: t("landing.features.responsive.title"),
      description: t("landing.features.responsive.description"),
    },
    {
      icon: <Code className="w-10 h-10 text-black-500" />,
      title: t("landing.features.cleanCode.title"),
      description: t("landing.features.cleanCode.description"),
    },
    {
      icon: <Zap className="w-10 h-10 text-purple-500" />,
      title: t("landing.features.fastDelivery.title"),
      description: t("landing.features.fastDelivery.description"),
    },
    {
      icon: <ChartNoAxesCombined className="w-10 h-10 text-green-500" />,
      title: t("landing.features.highPerfomance.title"),
      description: t("landing.features.highPerfomance.description"),
    },
    {
      icon: <Database className="w-10 h-10 text-red-500" />,
      title: t("landing.features.dataBase.title"),
      description: t("landing.features.dataBase.description"),
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-yellow-500" />,
      title: t("landing.features.custom.title"),
      description: t("landing.features.custom.description"),
    },
  ];

  useEffect(() => {
    const loadResources = async () => {
      const image = new Image();
      image.src = img1;
      await new Promise((resolve) => {
        image.onload = resolve;
        image.onerror = resolve;
      });

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsLoading(false);
    };

    loadResources();
  }, []);

  const handleOpenModal = (modal: boolean) => {
    setModalOpen(modal);
  };

  if (isLoading) {
    return <Spinner overlay bgColor="bg-white" />;
  }

  // Una vez que carga, muestra el contenido completo
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 grid md:grid-cols-2 items-center gap-12 py-16">
        <div>
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            {t("landing.title")}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {t("landing.description")}
          </p>
          <div className="flex items-center mb-6">
            <Check className="w-6 h-6 text-green-500 mr-2" />
            <span>{t("landing.professionalDesign")}</span>
          </div>
          <div className="flex items-center mb-6">
            <Check className="w-6 h-6 text-green-500 mr-2" />
            <span>{t("landing.responsive")}</span>
          </div>
          <div className="flex items-center mb-8">
            <Check className="w-6 h-6 text-green-500 mr-2" />
            <span>{t("landing.seo")}</span>
          </div>
          <Button
            handleClick={handleOpenModal}
            buttonClass="bg-gradient-to-r from-emerald-400 to-blue-500 text-white px-10 py-4 rounded-full transition-all duration-300 text-xl font-bold shadow-lg transform hover:scale-102"
          >
            {t("landing.quote")}
          </Button>
        </div>

        <div className="hidden md:block">
          <img src={img1} alt="Diseño web" className="rounded-xl shadow-2xl" />
        </div>
      </main>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">
            {t("landing.featuresTitle")}
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

      <Footer />

      {modalOpen && (
        <Modal
          handleClick={() => handleOpenModal(false)}
          body={
            <div className="container mx-auto px-4">
              <PriceCalculator />
            </div>
          }
        />
      )}
    </div>
  );
};

export default WebServiceLanding;
