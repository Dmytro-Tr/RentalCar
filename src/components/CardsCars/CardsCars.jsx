import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/cars/operations";
import CarCard from "../CarCard/CarCard";
import Button from "../Button/Button";
import Filter from "../Filter/Filter";
import s from "./cardsCars.module.css";
import { selectCars, selectTotalPages } from "../../redux/cars/selectors";

const CardsCars = () => {
  const dispatch = useDispatch();
  // const { cars, page, totalPages } = useSelector((state) => state.cars);
  const cars = useSelector(selectCars);
  const totalPages = useSelector(selectTotalPages);
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);

  console.log("CardsCars", cars);
  console.log("CardsCars page", page);
  console.log("CardsCars totalPages", totalPages);

  // При першому завантаженні або зміні фільтрів — оновлюємо сторінку та робимо новий запит
  useEffect(() => {
    setPage(1);
    dispatch(fetchCars({ page: 1, filters }));
  }, [dispatch, filters]);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    // dispatch(fetchCars({ page: page + 1, filters }));
    dispatch(fetchCars({ page: nextPage, filters }));
    setPage(nextPage);
  };

  return (
    <>
      <Filter onFilter={setFilters} />
      <ul className={s.wrapper}>
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </ul>
      {page < totalPages && (
        <div>
          <Button onClick={handleLoadMore} text="Load more"></Button>
        </div>
      )}
    </>
  );
};

export default CardsCars;
