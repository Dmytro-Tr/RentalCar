import { useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import s from "./DatePickerField.module.css";

const DateRangePickerField = ({ name }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(name);

  const value = Array.isArray(field.value) ? field.value : [null, null];
  const [startDate, endDate] = value;

  return (
    <DatePicker
      selectsRange
      startDate={startDate}
      endDate={endDate}
      onChange={(update) => {
        setFieldValue(name, update);
      }}
      isClearable
      minDate={new Date()}
      dateFormat="dd/MM/yyyy"
      placeholderText="Booking date"
      className={s.field} // якщо потрібен клас
    />
  );
};

export default DateRangePickerField;
