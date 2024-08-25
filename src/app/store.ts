import { configureStore } from "@reduxjs/toolkit";
import articlesDataSlice from "src/features/articlesData/articlesDataSlice";

export const store = configureStore({
  reducer: {
    articlesData: articlesDataSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
