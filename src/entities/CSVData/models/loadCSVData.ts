import { getCSVData } from "../api/getCSVData";

export const loadCSVData = async () => {
  const csvData = await getCSVData();
  return csvData.map((row) => {
    return {
      articleid: Number(row.articleid),
      subarticleid: Number(row.subarticleid),
      articlename: row.articlename,
      external_str_id: Number(row.external_str_id),
      ecrlongname: row.ecrlongname,
    };
  });
};
