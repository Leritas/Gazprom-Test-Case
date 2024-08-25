import { RootState } from "src/app/store";

export const selectMaxPagesCount = (state: RootState) =>
  Math.ceil(
    state.articlesData.allArticles.length / state.articlesData.itemsPerPage
  );
export const selectPaginatedArticles = (state: RootState) =>
  state.articlesData.paginatedArticles;
export const selectCurrentPage = (state: RootState) =>
  state.articlesData.currentPage;
export const selectItemsPerPage = (state: RootState) =>
  state.articlesData.itemsPerPage;
