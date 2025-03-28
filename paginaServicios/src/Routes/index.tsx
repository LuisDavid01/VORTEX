import { Route, Routes } from "react-router-dom";
import { PRIVATE_ROUTES } from "../Urls";
import WebServiceLanding from "../MainPages/LandingPage";
import ContactPage from "../MainPages/ContactPage";

const Private = () => {
  return (
    <Routes>
      <Route path={PRIVATE_ROUTES.Home.url} element={<WebServiceLanding />} />
      <Route path={PRIVATE_ROUTES.Contacts.url} element={<ContactPage />} />
    </Routes>
  );
};

export default Private;
