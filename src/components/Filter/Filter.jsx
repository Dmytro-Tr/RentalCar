import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBrands, selectCars } from "../../redux/cars/selectors";
import { fetchBrands, fetchCars } from "../../redux/cars/operations";
import Button from "../Button/Button";
import s from "./filter.module.css";

const Filter = ({ onFilter }) => {
  const dispatch = useDispatch();
  const brands = useSelector(selectBrands);
  const cars = useSelector(selectCars);
  const [formData, setFormData] = useState({
    brand: "",
    rentalPrice: "",
    mileageFrom: "",
    mileageTo: "",
  });
  const [allPrices, setAllPrices] = useState([]);

  useEffect(() => {
    dispatch(fetchBrands());
    dispatch(fetchCars({ page: 1, filters: {} }));
  }, [dispatch]);

  useEffect(() => {
    if (cars.length > 0 && allPrices.length === 0) {
      const prices = [...new Set(cars.map((car) => Number(car.rentalPrice)))].sort((a, b) => a - b);
      setAllPrices(prices);
    }
  }, [cars, allPrices.length]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const parsedFilters = {
      ...formData,
      rentalPrice: formData.rentalPrice ? Number(formData.rentalPrice) : undefined,
      mileageFrom: formData.mileageFrom ? Number(formData.mileageFrom) : undefined,
      mileageTo: formData.mileageTo ? Number(formData.mileageTo) : undefined,
    };
    console.log("formData", formData);
    console.log(
      "Cars",
      cars.map((car) => car.rentalPrice)
    );

    onFilter(parsedFilters);
  };

  return (
    <form className={s.wrapper} onSubmit={handleSubmit}>
      <div className={s.boxFilter}>
        <label className={s.label}>Car brand</label>
        <select name="brand" value={formData.brand} onChange={handleChange} className={s.select}>
          <option value="">Choose a brand</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
      <div className={s.boxFilter}>
        <label className={s.label}>Price/ 1 hour</label>
        <select name="rentalPrice" value={formData.rentalPrice} onChange={handleChange} className={s.select}>
          <option value="">Choose a price</option>
          {allPrices.map((p) => (
            <option key={p} value={p}>
              To ${p}
            </option>
          ))}
        </select>
      </div>
      <div className={s.boxFilter}>
        <label className={s.label}>Сar mileage / km</label>
        <div className={s.boxInput}>
          <input
            type="text"
            name="mileageFrom"
            placeholder="From"
            className={s.inputLeft}
            value={formData.mileageFrom}
            onChange={handleChange}
          />
          <input
            type="text"
            name="mileageTo"
            placeholder="To"
            className={s.inputRight}
            value={formData.mileageTo}
            onChange={handleChange}
          />
        </div>
      </div>
      <Button text="Search" className={s.button} />
    </form>
  );
};

export default Filter;
