import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCSVData } from "src/entities/CSVData/models/loadCSVData";
import {
  selectCurrentPage,
  selectMaxPagesCount,
  selectPaginatedArticles,
} from "src/features/articlesData/articlesDataSelectors";
import {
  setArticles,
  setCurrentPage,
} from "src/features/articlesData/articlesDataSlice";
import { ShineButton } from "src/shared/ShineButton";
import { ArticlesTable } from "./ui/ArticlesTable";

export const Homepage = () => {
  const dispatch = useDispatch();
  const paginatedArticles = useSelector(selectPaginatedArticles);
  const currentPage = useSelector(selectCurrentPage);
  const maxPageCount = useSelector(selectMaxPagesCount);

  const nextPage = () => {
    dispatch(setCurrentPage(currentPage + 1));
  };

  const prevPage = () => {
    dispatch(setCurrentPage(currentPage - 1));
  };

  useEffect(() => {
    const loadData = async () => {
      dispatch(setArticles(await loadCSVData()));
    };
    loadData();
  }, []);

  return (
    <div>
      <div className="pagination flex h-16 w-full md:px-5 items-center justify-around">
        <ShineButton text={"Предыдущая страница"} onClick={prevPage} />
        <div className="pageNumber">
          Страница {currentPage + 1} из {maxPageCount - 1}
        </div>
        <ShineButton text={"Следующая страница"} onClick={nextPage} />
      </div>
      <ArticlesTable paginatedArticles={paginatedArticles} />
    </div>
  );
};
