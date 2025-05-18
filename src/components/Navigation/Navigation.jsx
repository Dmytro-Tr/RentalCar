import { NavLink, useLocation } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";

const Navigation = () => {
  const location = useLocation();

  const buildLinkClass = ({ isActive }) => {
    if (location.pathname.startsWith("/catalog/")) {
      return s.link;
    }

    return clsx(s.link, isActive && s.active);
  };

  return (
    <nav className={s.nav}>
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      <NavLink to="/catalog" className={buildLinkClass}>
        Catalog
      </NavLink>
    </nav>
  );
};

export default Navigation;
