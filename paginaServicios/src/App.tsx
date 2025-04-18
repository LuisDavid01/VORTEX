import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebServiceLanding from "./MainPages/LandingPage";
import ContactPage from "./MainPages/ContactPage";
import ServicePage from "./MainPages/ServicesPage";
import FAQ from "./MainPages/FAQPage";
import ShakeQR from "./MainPages/ShakeQR";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WebServiceLanding />} />
        <Route path="/contacts" element={<ContactPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <ShakeQR />
    </BrowserRouter>
  );
}

export default App;
