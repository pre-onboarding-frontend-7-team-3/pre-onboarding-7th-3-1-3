import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { searchResult } from "../store/searchResult";
import { searchValue } from "../store/searchValue";
import clientApi from "../api/client";
import useDebounce from "./useDebounce";
import checkEngAndNum from "../utils/checkEngAndNum";

const useSearch = () => {
  const searchInputValue = useRecoilValue(searchValue);
  const [diseaseListData, setDiseaseListData] = useRecoilState(searchResult);

  const { debounceValue } = useDebounce(searchInputValue);

  const condition = checkEngAndNum(searchInputValue) && searchInputValue;

  const handleSearch = async () => {
    try {
      const { data } = await clientApi.get(`/sick?q=${debounceValue}`);
      setDiseaseListData(data);
      console.log("api calling");
    } catch (err) {
      throw new Error(err);
    }
  };

  useEffect(() => {
    condition && handleSearch();
  }, [debounceValue]);

  return diseaseListData;
};

export default useSearch;
