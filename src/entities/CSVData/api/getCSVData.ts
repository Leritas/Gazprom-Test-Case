import axios from "axios";
import Papa from "papaparse";
import { CsvItemData } from "../types/csvData";

export const getCSVData = async (): Promise<CsvItemData[]> => {
  try {
    const response = await axios.get("/article_def_v_orig.csv");
    return new Promise((resolve, reject) => {
      Papa.parse(response.data, {
        header: true,
        complete: (result) => {
          resolve(result.data as CsvItemData[]);
        },
        error: (error) => {
          reject(error);
        },
      });
    });
  } catch (err) {
    console.log(err);
    return [];
  }
};
