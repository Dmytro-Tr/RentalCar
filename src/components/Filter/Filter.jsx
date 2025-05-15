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
    price: "",
    mileageFrom: "",
    mileageTo: "",
  });

  const carsPrices = [...new Set(cars.map((car) => Number(car.rentalPrice)))].sort((a, b) => a - b);
  const minMileage = Math.min(...cars.map((car) => car.mileage));
  const maxMileage = Math.max(...cars.map((car) => car.mileage));

  useEffect(() => {
    dispatch(fetchBrands());
    dispatch(fetchCars(1));
  }, [dispatch]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFilter(formData);
  };

  return (
    <form className={s.wrapper} onSubmit={handleSubmit}>
      <div className={s.boxFilter}>
        <label className={s.label}>Car brand</label>
        <select name="brand" value={formData.brand} onChange={handleChange} className={s.select}>
          <option value="" disabled hidden>
            Choose a brand
          </option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
      <div className={s.boxFilter}>
        <label className={s.label}>Price/ 1 hour</label>
        <select name="price" value={formData.price} onChange={handleChange} className={s.select}>
          <option value="" disabled hidden>
            Choose a price
          </option>
          {carsPrices.map((p) => (
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
            // placeholder="From"
            placeholder={`From (${minMileage})`}
            className={s.inputLeft}
            value={formData.mileageFrom}
            onChange={handleChange}
          />
          <input
            type="text"
            name="mileageTo"
            // placeholder="To"
            placeholder={`To (${maxMileage})`}
            className={s.inputRight}
            value={formData.mileageTo}
            onChange={handleChange}
          />
        </div>
      </div>
      <Button text={"Search"} className={s.button} />
    </form>
  );
};

export default Filter;
