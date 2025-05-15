import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://car-rental-api.goit.global/";

export const fetchCars = createAsyncThunk("cars/fetchCars", async ({ page = 1, filters = {} }, thunkAPI) => {
  try {
    const params = new URLSearchParams({ page });

    if (filters.brand) params.append("brand", filters.brand);
    if (filters.price) params.append("price", filters.price);
    if (filters.mileageFrom) params.append("mileageFrom", filters.mileageFrom);
    if (filters.mileageTo) params.append("mileageTo", filters.mileageTo);

    const response = await axios.get(`/cars?${params.toString()}`);
    return { ...response.data, page };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchBrands = createAsyncThunk("cars/fetchBrands", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/brands");
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
