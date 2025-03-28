import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebServiceLanding from "./MainPages/LandingPage";
import ContactPage from "./MainPages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WebServiceLanding />} />
        <Route path="/contacts" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
