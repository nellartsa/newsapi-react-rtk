import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./features/newsApi";

export const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});
