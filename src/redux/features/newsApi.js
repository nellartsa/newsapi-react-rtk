import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getHeadlines = createAsyncThunk(
  "news/getHeadlines",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `https://newsapi.org/v2/top-headlines?language=en&category=general&apiKey=${process.env.REACT_APP_API_KEY}`
      );
      return data.articles;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const getFilteredHeadlines = createAsyncThunk(
  "news/getFilteredHeadlines",
  async (args, thunkAPI) => {
    try {
      const {
        searching,
        language,
        country,
        category,
        sortBy,
        dateFrom,
        dateTo,
      } = args;

      const { data } = await axios.get(
        `https://newsapi.org/v2/top-headlines?q=${searching}&sortBy=${sortBy}${
          language !== "en" ? `language=${language}&` : "language=en&"
        }${country === "all" ? `country=${language}&` : ""}${
          dateFrom !== "" ? `from=${dateFrom}&` : ""
        }${dateTo !== "" ? `to=${dateTo}&` : ""}category=${category}&apiKey=${
          process.env.REACT_APP_API_KEY
        }`
      );
      return data.articles;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState: {
    loading: false,
    data: [],
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    // headlines
    builder.addCase(getHeadlines.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getHeadlines.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.loading = false;
    });
    builder.addCase(getHeadlines.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });
    // filtered headlines
    builder.addCase(getFilteredHeadlines.pending, (state, action) => {
      state.loading = true;
      state.data = [];
    });
    builder.addCase(getFilteredHeadlines.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.loading = false;
    });
    builder.addCase(getFilteredHeadlines.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });
  },
});

export default newsSlice.reducer;
