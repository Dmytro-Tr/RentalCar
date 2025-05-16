import clsx from "clsx";
import s from "./buttonLoadMore.module.css";

const ButtonLoadMore = ({ className, onClick, type }) => {
  return (
    <div>
      <button className={clsx(s.button, className)} onClick={onClick} type={type}>
        Load more
      </button>
    </div>
  );
};

export default ButtonLoadMore;
