import { useEffect, useState } from "react";
import { IHeader } from "../../Interfaces/IHeader";
import Button from "../Button";
import "./Header.css";

const Header = (props: IHeader) => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsAtTop(true); // Se acopla arriba cuando está en el top
      } else {
        setIsAtTop(false); // Se mantiene fijo al hacer scroll
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`header ${isAtTop ? "at-top" : "fixed"} ${props.headerClass}`}
    >
      <div className="header__buttons__container">
        <Button buttonClass="header__buttons">Lorem Ipsum</Button>
        <Button buttonClass="header__buttons">Lorem Ipsum</Button>
        <Button buttonClass="header__buttons">Lorem Ipsum</Button>
        <Button buttonClass="header__buttons">Lorem Ipsum</Button>
      </div>
    </header>
  );
};

export default Header;
