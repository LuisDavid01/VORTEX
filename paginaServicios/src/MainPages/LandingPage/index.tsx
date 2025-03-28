
import React from 'react';
import { Check, Globe, Code, Zap } from 'lucide-react';

const WebServiceLanding = () => {
  const features = [
    {
      icon: <Globe className="w-10 h-10 text-blue-500" />,
      title: "Diseño Responsivo",
      description: "Sitios web que se adaptan perfectamente a cualquier dispositivo."
    },
    {
      icon: <Code className="w-10 h-10 text-green-500" />,
      title: "Código Limpio",
      description: "Desarrollo con las mejores prácticas y tecnologías modernas."
    },
    {
      icon: <Zap className="w-10 h-10 text-purple-500" />,
      title: "Alto Rendimiento",
      description: "Páginas web rápidas y optimizadas para una excelente experiencia."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">WebCraft</div>
          <nav>
            <a href="#servicios" className="mx-3 text-gray-600 hover:text-blue-600">Servicios</a>
            <a href="#precios" className="mx-3 text-gray-600 hover:text-blue-600">Precios</a>
            <a href="#contacto" className="mx-3 text-blue-600 font-semibold">Contactar</a>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 grid md:grid-cols-2 items-center gap-12 py-16">
        <div>
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Creamos tu Página Web Perfecta
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Diseñamos sitios web modernos, funcionales y totalmente personalizados para impulsar tu negocio online.
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
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 text-lg font-semibold">
            Solicitar Presupuesto
          </button>
        </div>

        <div className="hidden md:block">
          <img 
            src="/api/placeholder/600/400" 
            alt="Diseño web" 
            className="rounded-xl shadow-2xl"
          />
        </div>
      </main>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Nuestras Características</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-md">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 WebCraft. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default WebServiceLanding;
