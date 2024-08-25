import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArticlesData } from "src/entities/CSVData";

export interface ArticlesDataSlice {
  allArticles: ArticlesData[];
  paginatedArticles: ArticlesData[];
  currentPage: number;
  itemsPerPage: number;
}

const initialState: ArticlesDataSlice = {
  allArticles: [],
  paginatedArticles: [],
  currentPage: 0,
  itemsPerPage: 25,
};

const calculatePaginatedArticles = (state: ArticlesDataSlice) => {
  const start = state.currentPage * state.itemsPerPage;
  const end = start + state.itemsPerPage;
  state.paginatedArticles = state.allArticles.slice(start, end);
};

export const articlesDataSlice = createSlice({
  name: "articlesData",
  initialState,
  reducers: {
    setArticles: (state, action: PayloadAction<ArticlesData[]>) => {
      state.allArticles = action.payload;
      calculatePaginatedArticles(state);
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      if (
        action.payload >= 0 &&
        action.payload <=
          Math.ceil(state.allArticles.length / state.itemsPerPage)
      ) {
        state.currentPage = action.payload;
      }
      calculatePaginatedArticles(state);
    },
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload;
      calculatePaginatedArticles(state);
    },
  },
});

export const { setArticles, setCurrentPage, setItemsPerPage } =
  articlesDataSlice.actions;

export default articlesDataSlice.reducer;
