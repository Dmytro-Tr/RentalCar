import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCars = createAsyncThunk("cars/fetchCars", async (page = 1, thunkAPI) => {
  try {
    const response = await axios.get(`https://car-rental-api.goit.global/cars?page=${page}`);
    return { ...response.data, page };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
