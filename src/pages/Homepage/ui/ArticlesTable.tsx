import { ArticlesData } from "src/entities/CSVData";

export const ArticlesTable: React.FC<{ paginatedArticles: ArticlesData[] }> = ({
  paginatedArticles,
}) => {
  return (
    <table className="w-full border-t border-gray-400">
      <thead className="h-12">
        <tr className="border-b border-solid border-gray-300">
          <th>articleid</th>
          <th>subarticleid</th>
          <th>articlename</th>
          <th>external_str_id</th>
          <th>ecrlongname</th>
        </tr>
      </thead>
      <tbody>
        {paginatedArticles.map((article, index) => {
          return (
            <tr key={index}>
              <td>{article.articleid}</td>
              <td>{article.subarticleid}</td>
              <td>{article.articlename}</td>
              <td>{article.external_str_id}</td>
              <td>{article.ecrlongname}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
