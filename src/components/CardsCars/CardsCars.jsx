import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CarCard from "../CarCard/CarCard";
import s from "./cardsCars.module.css";
import Button from "../Button/Button";
import { fetchCars } from "../../redux/cars/operations";

const CardsCars = () => {
  const dispatch = useDispatch();
  const { cars, page, totalPages } = useSelector((state) => state.cars);

  // console.log("CardsCars", cars);
  // console.log("CardsCars page", page);
  // console.log("CardsCars totalPages", totalPages);

  useEffect(() => {
    dispatch(fetchCars(1));
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(fetchCars(page + 1));
  };

  return (
    <ul className={s.wrapper}>
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}

      {page < totalPages && (
        <div>
          <Button onClick={handleLoadMore} text="Load more"></Button>
        </div>
      )}
    </ul>
  );
};

export default CardsCars;
