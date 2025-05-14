import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    page: 1,
    totalPages: 1,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.page = action.payload.page;
        state.totalPages = action.payload.totalPages;

        if (action.payload.page === 1) {
          state.cars = action.payload.cars;
        } else {
          const existingIds = new Set(state.cars.map((car) => car.id));
          const newCars = action.payload.cars.filter((car) => !existingIds.has(car.id));
          state.cars = [...state.cars, ...newCars];
        }
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default carsSlice.reducer;
