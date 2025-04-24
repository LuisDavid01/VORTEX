import { useNavigate } from "react-router-dom";
import Button from "../Button";
import { PRIVATE_ROUTES } from "../../Urls";
import HamburgerMenu from "../HamburgerMenu";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Servicios",
      url: PRIVATE_ROUTES.Services.url,
    },
    {
      name: "FAQ",
      url: PRIVATE_ROUTES.FAQ.url,
    },
    {
      name: "Contactar",
      url: PRIVATE_ROUTES.Contacts.url,
    },
  ];

  return (
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
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <Button
              key={item.name}
              handleClick={() => navigate(item.url)}
              buttonClass="mx-3 text-blue-600 font-semibold hover:text-blue-800 transition-all duration-300 hover:scale-105"
            >
              {item.name}
            </Button>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="mobile-nav">
          <HamburgerMenu>
            {navItems.map((item) => (
              <li key={item.name} className="py-2">
                <Button
                  handleClick={() => navigate(item.url)}
                  buttonClass="w-full text-left text-blue-600 font-semibold hover:text-blue-800 transition-all duration-300"
                >
                  {item.name}
                </Button>
              </li>
            ))}
          </HamburgerMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
