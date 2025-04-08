import { Route, Routes } from "react-router-dom";
import { PRIVATE_ROUTES } from "../Urls";
import WebServiceLanding from "../MainPages/LandingPage";
import ContactPage from "../MainPages/ContactPage";
import ServicePage from "../MainPages/ServicesPage";
import FAQ from "../MainPages/FAQPage";

const Private = () => {
  return (
    <Routes>
      <Route path={PRIVATE_ROUTES.Home.url} element={<WebServiceLanding />} />
      <Route path={PRIVATE_ROUTES.Contacts.url} element={<ContactPage />} />
      <Route path={PRIVATE_ROUTES.Services.url} element={<ServicePage />} />
      <Route path={PRIVATE_ROUTES.FAQ.url} element={<FAQ />} />
    </Routes>
  );
};

export default Private;
