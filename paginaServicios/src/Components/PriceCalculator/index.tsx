import { ChevronDown } from "lucide-react";
import { useState } from "react";

const PriceCalculator = () => {
  const [webType, setWebType] = useState("");
  const [features, setFeatures] = useState<string[]>([]);
  const [estimatedPrice, setEstimatedPrice] = useState(0);

  const calculatePrice = () => {
    let basePrice = 0;
    switch (webType) {
      case "landing":
        basePrice = 500;
        break;
      case "ecommerce":
        basePrice = 800;
        break;
      case "corporativa":
        basePrice = 600;
        break;
    }

    const featurePrice = features.length * 100;
    setEstimatedPrice(basePrice + featurePrice);
  };

  return (
    <div className="bg-gray-100 p-8 rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Calcula tu Presupuesto
      </h2>
      <div className="space-y-4">
        <div className="relative">
          <select
            className="w-full p-3 bg-gray-200 rounded-lg pr-10 appearance-none"
            value={webType}
            onChange={(e) => setWebType(e.target.value)}
          >
            <option value="">Selecciona un tipo de web</option>
            <option value="landing">Landing Page</option>
            <option value="ecommerce">Tienda Online</option>
            <option value="corporativa">Web Corporativa</option>
          </select>
          <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none">
            <ChevronDown className="text-gray-500" size={20} />
          </div>
        </div>

        <div>
          <h3 className="mb-2">Características adicionales:</h3>
          <div className="grid grid-cols-2 gap-2">
            {[
              "Diseño Responsivo",
              "Integración Pasarela de Pago",
              "SEO Básico",
              "Formulario de Contacto",
            ].map((feature) => (
              <label key={feature} className="flex items-center">
                <input
                  type="checkbox"
                  checked={features.includes(feature)}
                  onChange={() => {
                    setFeatures((prev) =>
                      prev.includes(feature)
                        ? prev.filter((f) => f !== feature)
                        : [...prev, feature]
                    );
                  }}
                  className="mr-2"
                />
                {feature}
              </label>
            ))}
          </div>
        </div>

        <button
          onClick={calculatePrice}
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
        >
          Calcular Presupuesto
        </button>

        {estimatedPrice > 0 && (
          <div className="mt-4 text-center">
            <p className="text-xl font-bold">Presupuesto Estimado:</p>
            <p className="text-3xl text-blue-600">${estimatedPrice}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PriceCalculator;
