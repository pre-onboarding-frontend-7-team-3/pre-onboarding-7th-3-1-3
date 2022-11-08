import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { searchResult } from "../store/searchResult";
import { searchValue } from "../store/searchValue";
import clientApi from "../api/client";
import useDebounce from "./useDebounce";

const useSearch = () => {
  const searchInput = useRecoilValue(searchValue);
  const [diseaseData, setDiseaseData] = useRecoilState(searchResult);

  const [debounceValue, isDebounceDone] = useDebounce(searchInput);

  const handleSearch = async () => {
    if (!searchInput) return;
    const { data } = await clientApi.get(`/sick?q=${debounceValue}`);
    setDiseaseData(data);
  };

  useEffect(() => {
    handleSearch();
  }, [isDebounceDone]);

  return diseaseData;
};

export default useSearch;
