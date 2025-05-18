import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { BsCalendar2Week } from "react-icons/bs";
import { BsCarFront } from "react-icons/bs";
import { BsFuelPump } from "react-icons/bs";
import { GoGear } from "react-icons/go";
import { SlLocationPin } from "react-icons/sl";
import { BeatLoader } from "react-spinners";
import { fetchCarById } from "../../redux/cars/operations";
import BookingForm from "../../components/BookingForm/BookingForm";
import s from "./detailsPage.module.css";

const DetailsPage = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    fetchCarById(id)
      .then(setCar)
      .catch((e) => console.error("Error fetching car:", e));
  }, [id]);

  if (!car)
    return (
      <div>
        <BeatLoader />
      </div>
    );
  const rentalConditions = car.rentalConditions || [];
  const accessories = car.accessories || [];

  // Витягуємо код з URL картинки
  const codeMatch = car.img?.match(/\/(\d+)-ai\.jpg$/);
  const codeFromImg = codeMatch ? codeMatch[1] : "N/A";

  return (
    <div className={s.wrapper}>
      <div className={s.imgFormBox}>
        <img src={car.img} alt={car.brand} className={s.img} />
        <BookingForm />
      </div>
      <div className={s.descSubBox}>
        <div className={s.subBox}>
          <h2 className={s.subTitle}>
            {car.brand} {car.model}, {car.year}
            <span className={s.subId}>Id: {codeFromImg}</span>
          </h2>
          <div className={s.subCaption}>
            <p className={s.text}>
              <SlLocationPin className={s.iconCheck} />
              {car.address.split(",")[1].trim()}, {car.address.split(",")[2].trim()}
              <span className={s.subMileage}>Mileage: {car.mileage.toLocaleString("en-US").replace(/,/g, " ")} km</span>
            </p>
            <p className={s.subRentalPrice}>${car.rentalPrice}</p>
          </div>
          <p className={s.text}>{car.description}</p>
        </div>

        <div className={s.descBox}>
          <div className={s.descAside}>
            <h3 className={s.descTitle}>Rental Conditions: </h3>
            <ul className={s.list}>
              {rentalConditions.map((cond, idex) => (
                <li key={idex} className={s.text}>
                  <IoIosCheckmarkCircleOutline className={s.iconCheck} />
                  {cond}
                </li>
              ))}
            </ul>
          </div>

          <div className={s.descAside}>
            <h3 className={s.descTitle}>Car Specifications: </h3>
            <ul className={s.list}>
              <li className={s.text}>
                <BsCalendar2Week className={s.iconCheck} />
                Year: {car.year}
              </li>
              <li className={s.text}>
                <BsCarFront className={s.iconCheck} />
                Tupe: {car.type}
              </li>
              <li className={s.text}>
                <BsFuelPump className={s.iconCheck} />
                Fuel Consumption: {car.fuelConsumption}
              </li>
              <li className={s.text}>
                <GoGear className={s.iconCheck} />
                Engine Size: {car.engineSize}
              </li>
            </ul>
          </div>

          <div className={s.descAside}>
            <h3 className={s.descTitle}>Accessories and functionalities: </h3>
            <ul className={s.list}>
              {accessories.map((cond, idex) => (
                <li key={idex} className={s.text}>
                  <IoIosCheckmarkCircleOutline className={s.iconCheck} />
                  {cond}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
