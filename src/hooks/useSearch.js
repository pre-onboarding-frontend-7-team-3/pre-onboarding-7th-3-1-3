import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { searchResult } from "../store/searchResult";
import { searchValue } from "../store/searchValue";
import clientApi from "../api/client";
import useDebounce from "./useDebounce";

const useSearch = () => {
  const searchInput = useRecoilValue(searchValue);
  const [diseaseData, setDiseaseData] = useRecoilState(searchResult);

  const debounceValue = useDebounce(searchInput);

  const handleSearch = async () => {
    if (!debounceValue) return;
    const { data } = await clientApi.get(`/sick?q=${debounceValue}`);
    setDiseaseData(data);
  };

  useEffect(() => {
    handleSearch();
  }, [debounceValue]);

  return diseaseData;
};

export default useSearch;
