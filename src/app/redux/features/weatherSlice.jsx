import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "c74bcf3998778e818b720d458dfb81cd";
const BASE_WEATHER = "https://api.openweathermap.org/data/2.5/weather";

const initialState = {
  current: { data: null, loading: false, error: null },
};

export const getWeatherInfos = createAsyncThunk(
  "weather/current",
  async ({ city = "Baku", lang = "en" }) => {
    const resp = await axios.get(
      `${BASE_WEATHER}?q=${city}&units=metric&lang=${lang}&appid=${API_KEY}`
    );
    return resp.data;
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWeatherInfos.pending, (state) => {
        state.current.loading = true;
        state.current.error = null;
      })
      .addCase(getWeatherInfos.fulfilled, (state, action) => {
        state.current.loading = false;
        state.current.data = action.payload;
      })
      .addCase(getWeatherInfos.rejected, (state, action) => {
        state.current.loading = false;
        state.current.error = action.error.message;
      });
  },
});

export default weatherSlice.reducer;
