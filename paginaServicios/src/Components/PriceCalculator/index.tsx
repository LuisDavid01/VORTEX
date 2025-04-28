import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const PriceCalculator = () => {
  const [webType, setWebType] = useState("");
  const [features, setFeatures] = useState<string[]>([]);
  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const { t } = useTranslation();

  const featureList = [
    { key: "responsiveDesign", stateValue: "Diseño Responsivo" },
    { key: "paymentGateway", stateValue: "Integración Pasarela de Pago" },
    { key: "basicSEO", stateValue: "SEO Básico" },
    { key: "contactForm", stateValue: "Formulario de Contacto" },
  ];

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
        {t("landing.modal.title")}
      </h2>
      <div className="space-y-4">
        <div className="relative">
          <select
            className="w-full p-3 bg-gray-200 rounded-lg pr-10 appearance-none"
            value={webType}
            onChange={(e) => setWebType(e.target.value)}
          >
            <option value="">{t("landing.modal.webType")}</option>
            <option value="landing">{t("landing.modal.landing")}</option>
            <option value="ecommerce">{t("landing.modal.ecomerce")}</option>
            <option value="corporativa">
              {t("landing.modal.corporative")}
            </option>
          </select>
          <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none">
            <ChevronDown className="text-gray-500" size={20} />
          </div>
        </div>

        <div>
          <h3 className="mb-2">{t("landing.modal.featuresTitle")}</h3>
          <div className="grid grid-cols-2 gap-2">
            {featureList.map(({ key, stateValue }) => (
              <label key={key} className="flex items-center">
                <input
                  type="checkbox"
                  checked={features.includes(stateValue)}
                  onChange={() => {
                    setFeatures((prev) =>
                      prev.includes(stateValue)
                        ? prev.filter((f) => f !== stateValue)
                        : [...prev, stateValue]
                    );
                  }}
                  className="mr-2"
                />
                {t(`landing.modal.features.${key}`)}
              </label>
            ))}
          </div>
        </div>

        <button
          onClick={calculatePrice}
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
        >
          {t("landing.modal.budget")}
        </button>

        {estimatedPrice > 0 && (
          <div className="mt-4 text-center">
            <p className="text-xl font-bold">{t("landing.modal.estimated")}</p>
            <p className="text-3xl text-blue-600">${estimatedPrice}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PriceCalculator;
