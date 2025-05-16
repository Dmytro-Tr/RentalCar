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
  const cars = useSelector(selectCars);
  const totalPages = useSelector(selectTotalPages);
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);
  const [filteredCars, setFilteredCars] = useState([]);
  const [isFilterApplied, setIsFilterApplied] = useState(false);

  useEffect(() => {
    setPage(1);
    dispatch(fetchCars({ page: 1, filters }));
  }, [dispatch, filters]);

  useEffect(() => {
    if (cars.length === 0) return;

    let result = [...cars];

    if (filters.rentalPrice !== undefined) {
      result = result.filter((car) => Number(car.rentalPrice) === filters.rentalPrice);
    }
    if (filters.mileageFrom !== undefined) {
      result = result.filter((car) => car.mileage >= filters.mileageFrom);
    }
    if (filters.mileageTo !== undefined) {
      result = result.filter((car) => car.mileage <= filters.mileageTo);
    }

    setFilteredCars(result);
    setIsFilterApplied(true);
  }, [cars, filters]);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    dispatch(fetchCars({ page: nextPage, filters }));
    setPage(nextPage);
  };

  const handleFilter = (newFilters) => {
    setFilters(newFilters);
  };

  // const carsToShow = filteredCars.length > 0 || Object.keys(filters).length > 0 ? filteredCars : cars;

  const carsToShow = isFilterApplied ? filteredCars : cars;

  return (
    <>
      <Filter onFilter={handleFilter} />
      <ul className={s.wrapper}>
        {carsToShow.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </ul>
      {!isFilterApplied && page < totalPages && (
        <div>
          <button onClick={handleLoadMore} type="button" className={s.button}>
            Load more
          </button>
        </div>
      )}
    </>
  );
};

export default CardsCars;
