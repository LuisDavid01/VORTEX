import { IButtonProps } from "../../Interfaces/IButton";

const Button = (props: IButtonProps) => {
  return (
    <>
      <button onClick={props.handleClick} className={props.buttonClass}>
        {props.children}
      </button>
    </>
  );
};

export default Button;
