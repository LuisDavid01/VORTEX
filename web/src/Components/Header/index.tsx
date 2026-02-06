import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Button from "../Button";
import { PRIVATE_ROUTES } from "../../Urls";
import HamburgerMenu from "../HamburgerMenu";
import "./Header.css";
import { useEffect, useState } from "react";
import Spinner from "../Spinner";

const Header = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState<boolean>(false);

  const navItems = [

  ];

  const toggleLanguage = () => {
    setLoading(true);
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang).then(() => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    });
  };

  useEffect(() => {
    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <>
      {loading && <Spinner overlay bgColor="bg-white" />}
      <header className="relative bg-white shadow-md">
        <div className="max-w-full mx-auto px-2 py-4 flex justify-between items-center w-full">
          <div
            onClick={() => navigate(PRIVATE_ROUTES.Home.url)}
            className="flex items-center text-2xl font-bold text-gray-800 cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            <img
              src="/vortex.svg"
              alt="VORTEX-icon"
              className="object-contain md:object-cover w-14"
            />
            <p className="text-sm text-emerald-600 antialiased hover:text-emerald-700 transition-colors duration-300">
              VORTEX
            </p>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav flex items-center">

            <Button
              handleClick={toggleLanguage}
              buttonClass="mx-3 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all duration-300"
            >
              {i18n.language === "en" ? "ES" : "EN"}
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <div className="mobile-nav">
            <HamburgerMenu>

              <li className="py-2">
                <Button
                  handleClick={toggleLanguage}
                  buttonClass="w-full text-left text-blue-600 font-semibold hover:text-blue-800 transition-all duration-300"
                >
                  {i18n.language === "en" ? "Español" : "English"}
                </Button>
              </li>
            </HamburgerMenu>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
