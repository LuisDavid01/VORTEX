import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebServiceLanding from "./MainPages/LandingPage";
import ContactPage from "./MainPages/ContactPage";
import ServicePage from "./MainPages/ServicesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WebServiceLanding />} />
        <Route path="/contacts" element={<ContactPage />} />
        <Route path="/services" element={<ServicePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
