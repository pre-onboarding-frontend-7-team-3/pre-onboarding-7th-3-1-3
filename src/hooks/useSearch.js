import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { searchResult } from "../store/searchResult";
import { searchValue } from "../store/searchValue";
import clientApi from "../api/client";
import useDebounce from "./useDebounce";

const useSearch = () => {
  const searchInput = useRecoilValue(searchValue);
  const [diseaseListData, setDiseaseListData] = useRecoilState(searchResult);

  const { debounceValue } = useDebounce(searchInput);

  const handleSearch = async () => {
    if (!searchInput) return;
    try {
      const { data } = await clientApi.get(`/sick?q=${debounceValue}`);
      setDiseaseListData(data);
      console.log("api calling");
    } catch (err) {
      throw new Error(err);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [debounceValue]);

  return diseaseListData;
};

export default useSearch;
