import { Route, Routes } from "react-router-dom";
import { PRIVATE_ROUTES } from "../Urls";
import WebServiceLanding from "../MainPages/LandingPage";

const Private = () => {
  return (
    <Routes>
      <Route path={PRIVATE_ROUTES.Home.url} element={<WebServiceLanding />} />
    </Routes>
  );
};

export default Private;
