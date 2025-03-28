import "./Header.css";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">WebCraft</div>
        <nav>
          <a
            href="#servicios"
            className="mx-3 text-gray-600 hover:text-blue-600"
          >
            Servicios
          </a>
          <a href="#precios" className="mx-3 text-gray-600 hover:text-blue-600">
            Precios
          </a>
          <a href="#contacto" className="mx-3 text-blue-600 font-semibold">
            Contactar
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
