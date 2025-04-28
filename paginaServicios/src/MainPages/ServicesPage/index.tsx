import { useState, useEffect, useRef } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Spinner from "../../Components/Spinner";
import midImage from "../../Assets/ServicesImg/midimage.webp";
import dashboard from "../../Assets/ServicesImg/dashboard.webp";
import databaseImg from "../../Assets/ServicesImg/database.webp";
import landingPageImg from "../../Assets/ServicesImg/landingImg.webp";
import ecommerceImg from "../../Assets/ServicesImg/ecommerce.webp";
import microServiceImg from "../../Assets/ServicesImg/microservice.webp";
import apiImg from "../../Assets/ServicesImg/api.webp";
import whyUsImg from "../../Assets/ServicesImg/whyus.webp";
import { useTranslation } from "react-i18next";

const ServicePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const checkRef = setInterval(() => {
      if (imageRef.current) {
        clearInterval(checkRef);
        const observer = new IntersectionObserver(
          ([entry]) => {
            setIsVisible(entry.isIntersecting);
          },
          { threshold: 0.3 }
        );

        observer.observe(imageRef.current);

        return () => observer.disconnect();
      }
    }, 100);

    return () => clearInterval(checkRef);
  }, []);

  useEffect(() => {
    const loadResources = async () => {
      const images = [
        midImage,
        dashboard,
        databaseImg,
        landingPageImg,
        ecommerceImg,
        microServiceImg,
        apiImg,
      ];

      const loadImage = (src: string) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve;
        });

      await Promise.all(images.map((src) => loadImage(src)));

      await new Promise((resolve) => setTimeout(resolve, 500));

      setIsLoading(false);
    };

    loadResources();
  }, []);

  const servicios = [
    {
      title: t("services.section3.services.landing.title"),
      img: landingPageImg,
      descripcion: t("services.section3.services.landing.description"),
    },
    {
      title: t("services.section3.services.comerce.title"),
      img: ecommerceImg,
      descripcion: t("services.section3.services.comerce.description"),
    },
    {
      title: t("services.section3.services.corporative.title"),
      img: dashboard,
      descripcion: t("services.section3.services.corporative.description"),
    },
    {
      title: t("services.section3.services.micro.title"),
      img: microServiceImg,
      descripcion: t("services.section3.services.micro.description"),
    },
    {
      title: t("services.section3.services.database.title"),
      img: databaseImg,
      descripcion: t("services.section3.services.database.description"),
    },
    {
      title: t("services.section3.services.api.title"),
      img: apiImg,
      descripcion: t("services.section3.services.api.description"),
    },
  ];

  if (isLoading) {
    return <Spinner overlay bgColor="bg-white" />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="text-center justify-items-center">
        <h2 className="text-4xl pt-5 font-extrabold pb-6 text-gray-900 tracking-tight">
          {t("services.section1.titleLine1")}
          <br />
          {t("services.section1.titleLine2")}
        </h2>
        <div className="container ">
          <p className="px-6 text-lg md:text-xl leading-relaxed mt-4 text-gray-700">
            {t("services.section1.description1")}
          </p>
        </div>
      </main>
      <section className="bg-white pt-8 pb-20 text-center justify-items-center">
        <img
          className="w-full h-100 object-cover object-bottom mb-8"
          src={midImage}
          alt="mid image"
        />
        <div className="container pt-8">
          <p className="lg:text-xl md:text-xl sm:text-lg px-6 leading-relaxed text-gray-700">
            {t("services.section1.description2")}
          </p>
        </div>
      </section>
      <section className="bg-white pt-8 px-6 lg:px-16">
        <div className="container max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-6 md:gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              {t("services.section2.title")}
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 mt-4">
              {t("services.section2.description")}
            </p>
          </div>
          <div
            ref={imageRef}
            className={`lg:w-1/2 flex justify-center transform transition-all duration-1000 ease-in-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <img
              className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain rounded-xl shadow-lg"
              src={whyUsImg}
              alt="Why choose us"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">
            {t("services.section3.title")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {servicios.map((servicio, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex justify-center overflow-hidden rounded mb-4">
                  <img
                    className="w-full h-64 object-fill lg:object-fill md:object-cover"
                    src={servicio.img}
                    alt="image servicio"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4">{servicio.title}</h3>
                <p className="text-gray-600 font-medium pb-3">
                  {servicio.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePage;
