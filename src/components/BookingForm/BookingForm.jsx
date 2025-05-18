import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../Button/Button";
import s from "./bookingForm.module.css";

import "react-datepicker/dist/react-datepicker.css";
import DateRangePickerField from "../DatePickerField/DatePickerField";

const initialValues = {
  name: "",
  email: "",
  bookingDate: [null, null],
  comment: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  bookingDate: Yup.array()
    .of(Yup.date().nullable())
    .test(
      "date-range",
      "Please select a start and end date",
      (value) => Array.isArray(value) && value[0] !== null && value[1] !== null
    )
    .required("Booking date is required"),
});

const BookingForm = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
    toast.success("Your booking request was successfully sent!");
  };

  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Book your car now</h3>
      <p className={s.subtitle}>Stay connected! We are always ready to help you.</p>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
        <Form className={s.form}>
          <Field type="text" name="name" placeholder="Name*" className={s.field} />
          <div className={s.errorBox}>
            <ErrorMessage name="name" component="div" className={s.error} />
          </div>
          <Field type="text" name="email" placeholder="Email*" className={s.field} />
          <div className={s.errorBox}>
            <ErrorMessage name="email" component="div" className={s.error} />
          </div>
          <DateRangePickerField name="bookingDate" />
          <div className={s.errorBox}>
            <ErrorMessage name="bookingDate" component="div" className={s.error} />
          </div>
          <Field as="textarea" name="comment" placeholder="Comment" className={s.field} cols="20" rows="3" />
          <Button type="submit" text="Send" className={s.submit} />
        </Form>
      </Formik>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default BookingForm;
