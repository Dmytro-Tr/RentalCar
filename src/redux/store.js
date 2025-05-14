import { configureStore } from "@reduxjs/toolkit";
import carsReduser from "./cars/slice";

export const store = configureStore({
  reducer: { cars: carsReduser },
});
