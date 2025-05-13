import { NavLink } from "react-router-dom";
import s from "./homePage.module.css";

const HomePage = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.contentBox}>
        <h1 className={s.title}>Find your perfect rental car</h1>
        <p className={s.subtitle}>Reliable and budget-friendly rentals for any journey</p>
        <NavLink to="/catalog" className={s.link}>
          View Catalog
        </NavLink>
      </div>{" "}
    </div>
  );
};

export default HomePage;
