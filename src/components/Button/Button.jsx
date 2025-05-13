import clsx from "clsx";
import s from "./button.module.css";

const Button = ({ className, text, onClick, type }) => {
  return (
    <button className={clsx(s.button, className)} onClick={onClick} type={type}>
      {text}
    </button>
  );
};

export default Button;
