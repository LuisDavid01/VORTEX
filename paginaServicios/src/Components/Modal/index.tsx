/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useEffect, useState } from "react";
import { IModalProps } from "../../Interfaces/IModal";
import "./modal.css";

const Modal = (props: IModalProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsVisible(false);
      setTimeout(() => {
        props.handleClick && props.handleClick(e);
      }, 300);
    }
  };
  return (
    <div
      className={`modal__container ${isVisible ? "show" : ""}`}
      onClick={handleBackgroundClick}
    >
      <div
        className={`modal__content ${props.container} ${
          isVisible ? "show" : ""
        }`}
      >
        {props.body}
      </div>
    </div>
  );
};

export default Modal;
