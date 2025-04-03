import { useNavigate } from "react-router-dom";
import Button from "../Button";
import { PRIVATE_ROUTES } from "../../Urls";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="relatuve bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div
          onClick={() => navigate(PRIVATE_ROUTES.Home.url)}
          className="text-2xl font-bold text-gray-800 cursor-pointer"
        >
          <img
            src="https://i.imgur.com/kOJnUWG.png"
            alt="VORTEX-icon"
            className="object-contain md:object-cover sd: w-20"
          />
        </div>

        <nav>
        <Button
            handleClick={() => {
              navigate(PRIVATE_ROUTES.Services.url);
            }}
            buttonClass="mx-3 text-blue-600 font-semibold"
          >
            Servicios
          </Button>
          
          
          <Button
            handleClick={() => {
              navigate(PRIVATE_ROUTES.Contacts.url);
            }}
            buttonClass="mx-3 text-blue-600 font-semibold"
          >
            Contactar
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
