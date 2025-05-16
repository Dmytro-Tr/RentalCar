import Button from "../Button/Button";
import s from "./carCard.module.css";

const CarCard = ({ car }) => {
  return (
    <li className={s.item}>
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
      <Button text="Read more" />
    </li>
  );
};

export default CarCard;
