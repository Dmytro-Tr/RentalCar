import Button from "../Button/Button";
import s from "./filter.module.css";

const Filter = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.boxFilter}>
        <label className={s.label}>Car brand</label>
        <select name="brands" defaultValue="" className={s.select}>
          <option value="" disabled hidden>
            Choose a brand
          </option>
          {/* map */}
        </select>
      </div>
      <div className={s.boxFilter}>
        <label className={s.label}>Price/ 1 hour</label>
        <select name="brands" defaultValue="" className={s.select}>
          <option value="" disabled hidden>
            Choose a price
          </option>
        </select>
      </div>
      <div className={s.boxFilter}>
        <label className={s.label}>Сar mileage / km</label>
        <div className={s.boxInput}>
          <input type="text" placeholder="From" className={s.inputLeft} />
          <input type="text" placeholder="To" className={s.inputRight} />
        </div>{" "}
      </div>
      <Button text={"Search"} className={s.button} />
    </div>
  );
};

export default Filter;
