import { useState, useEffect, useRef } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Spinner from "../../Components/Spinner"; // Importa el Spinner
import midImage from "../../Assets/ServicesImg/midimage.webp";
import dashboard from "../../Assets/ServicesImg/dashboard.webp";
import databaseImg from "../../Assets/ServicesImg/database.webp";
import landingPageImg from "../../Assets/ServicesImg/landingImg.webp";
import ecommerceImg from "../../Assets/ServicesImg/ecommerce.webp";
import microServiceImg from "../../Assets/ServicesImg/microservice.webp";
import apiImg from "../../Assets/ServicesImg/api.webp";
import whyUsImg from "../../Assets/ServicesImg/whyus.webp";

const ServicePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const imageRef = useRef<HTMLDivElement | null>(null);

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
      title: "Landing pages",
      img: landingPageImg,
      descripcion:
        "Construimos landing pages centrada en conseguir leads para su empresa,\n optimizada para altas tasas de conversion.",
    },
    {
      title: "Comercio electronico",
      img: ecommerceImg,
      descripcion:
        "Ofrecemos servicios a emprendedores que quieran modernizar sus sitemas de comercio, te ayudamos a explorar la casi inifita posibilidad de crecimiento que ofrece internet. Soportamos metodos de pago modernos y buenas practicas para mantener a tu negocio y tus clientes seguros en linea.",
    },
    {
      title: "Paginas coorporativas",
      img: dashboard,
      descripcion:
        "Desarrollamos aplicaciones corporativas principalmente dedicadas a dashboards, recursos humanos y analisis de datos.",
    },
    {
      title: "Microservicios",
      img: microServiceImg,
      descripcion:
        "¿Hay partes de su aplicación que requieren ser reutilizadas en varios sectores? ¿Necesita escalar una parte especifica de su aplicación pero resulta muy cara hacer cambios en el mismo monolito? ¿Tiene un sistema de legado que necesita actualizarce? Lo que necesita es implementar microservicios",
    },
    {
      title: "Desarrollo de bases de datos",
      img: databaseImg,
      descripcion:
        "Diseñamos el diseño y arquitectura de bases de datos relacionales y no relacionales utlizando tecnologias populares en la nube.",
    },
    {
      title: "Desarrollo de APIs robustas para alta carga de usuarios.",
      img: apiImg,
      descripcion:
        "Creamos APIs que mantienen tu logica de negocio segura y mantiendo rendimiento excelente a altas cargas de trabajo.",
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
          Desarrollo de software y<br /> aplicaciones
        </h2>
        <div className="container ">
          <p className="px-6 text-lg md:text-xl leading-relaxed mt-4 text-gray-700">
            En Vortex, nos centramos en ofrecer soluciones seguras, eficientes,
            versátiles y escalables. Trabajamos con pequeñas páginas de nicho
            que requieren una página sencilla para crear su funnel, empresas en
            crecimiento que requieren dashboards y manejo de recursos humanos,
            hasta comercios con una base de clientes que necesita una página
            rápida y robusta.
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
            Disponemos de poderosas herramientas digitales basadas en IA que
            cubren el front-end, back-end, aplicaciones web y el contenido. Nos
            encargamos de desarrollar la infraestructura y la arquitectura de su
            aplicación utilizando los nuevos y modernos estándares de la
            industria desplegando su aplicación totalmente en la nube con
            precios asequibles para su emprendimiento.
          </p>
        </div>
      </section>
      <section className="bg-white pt-8 px-6 lg:px-16">
        <div className="container max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-6 md:gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              ¿Por qué elegirnos a nosotros?
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 mt-4">
              Lo que nos diferencia es nuestra capacidad para entregar productos
              sólidos, escalables y utilizando las últimas tecnologías adaptadas
              a estándares actuales de diseño y arquitectura. Nuestros servicios
              están centrados en consumir la menor cantidad de recursos,
              haciéndonos una excelente opción para trabajar con servicios en la
              nube. Nos adaptamos a las necesidades de nuestros clientes y
              buscamos sobrepasar sus expectativas.
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
            Nuestros servicios
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
