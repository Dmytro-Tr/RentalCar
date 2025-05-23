import { NavLink } from "react-router-dom";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import s from "./carCard.module.css";

const CarCard = ({ car }) => {
  return (
    <li className={s.item}>
      <div className={s.favoriteIcon}>
        <FavoriteButton carId={car.id} />
      </div>
      <div className={s.cardBox}>
        <img src={car.img} alt={car.model} className={s.image} />
        <div className={s.subtitle}>
          <h2 className={s.title}>
            {car.brand}
            <span className={s.span}> {car.model}</span>, {car.year}
          </h2>
          <p className={s.rentalPrice}>${car.rentalPrice}</p>
        </div>
        <p className={s.text}>
          {car.address.split(",")[1].trim()} | {car.address.split(",")[2].trim()} | {car.rentalCompany} |
        </p>
        <p className={s.text}>
          {car.type} | {car.mileage.toLocaleString("en-US").replace(/,/g, " ")} km
        </p>
      </div>
      <NavLink to={`/catalog/${car.id}`} className={s.navLink}>
        Read more
      </NavLink>
    </li>
  );
};

export default CarCard;
