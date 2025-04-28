import { BrowserRouter, Routes, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import WebServiceLanding from "./MainPages/LandingPage";
import ContactPage from "./MainPages/ContactPage";
import ServicePage from "./MainPages/ServicesPage";
import FAQ from "./MainPages/FAQPage";
import ShakeQR from "./MainPages/ShakeQR";

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WebServiceLanding />} />
          <Route path="/contacts" element={<ContactPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <ShakeQR />
      </BrowserRouter>
    </I18nextProvider>
  );
};

export default App;
