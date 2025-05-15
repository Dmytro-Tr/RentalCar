import { createSlice } from "@reduxjs/toolkit";
import { fetchBrands, fetchCars } from "./operations";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    brands: [],
    totalCars: 0,
    page: 1,
    totalPages: 0,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        // state.cars = action.payload.cars;
        state.totalCars = action.payload.totalCars;
        state.page = action.payload.page;
        state.totalPages = action.payload.totalPages;
        state.isLoading = false;

        if (action.payload.page === 1) {
          state.cars = action.payload.cars;
        } else {
          const existingIds = new Set(state.cars.map((car) => car.id));
          const newCars = action.payload.cars.filter((car) => !existingIds.has(car.id));
          state.cars = [...state.cars, ...newCars];
        }
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      .addCase(fetchBrands.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.brands = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const carsReducer = carsSlice.reducer;
