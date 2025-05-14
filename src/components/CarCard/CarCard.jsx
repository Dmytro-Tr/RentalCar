import s from "./carCard.module.css";

const CarCard = ({ car }) => {
  return (
    <li className={s.item}>
      <img src={car.img} alt={car.model} className={s.image} />
      <div className={s.subtitle}>
        <h2 className={s.title}>
          {car.brand}
          <span className={s.span}> {car.model}</span>, {car.year}
        </h2>
        <p className={s.rentalPrice}>${car.rentalPrice}</p>
      </div>
      <p className={s.text}>
        {car.address} | {car.rentalCompany} | {car.type} | {car.mileage} km
      </p>
    </li>
  );
};

export default CarCard;
