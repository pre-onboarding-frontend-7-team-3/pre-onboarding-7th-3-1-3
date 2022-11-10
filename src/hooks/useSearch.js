import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { searchResult } from "../store/searchResult";
import { searchValue } from "../store/searchValue";
import useDebounce from "./useDebounce";
import checkEngAndNum from "../utils/checkEngAndNum";
import makeTrieBySearchWord from "../utils/makeTryByWordSearch";
import getCachedData from "../utils/getCacheData";
import filterCachedData from "../utils/filterCachedData";
import getDataAndRegisterCache from "../apis/getDataAndRegisterCache";
import { AxiosError } from "axios";

const useSearch = () => {
  const searchInputValue = useRecoilValue(searchValue);
  const [diseaseListData, setDiseaseListData] = useRecoilState(searchResult);

  const { debounceValue } = useDebounce(searchInputValue);

  const condition = checkEngAndNum(searchInputValue) && searchInputValue;

  const handleSearch = async () => {
    const TrieWordList = makeTrieBySearchWord(searchInputValue);
    const cachedData = await getCachedData(TrieWordList);

    try {
      if (checkEngAndNum(searchInputValue) && cachedData) {
        const JsonCachedData = await cachedData.json();
        setDiseaseListData(filterCachedData(JsonCachedData, searchInputValue));
      }
      if (checkEngAndNum(searchInputValue) && !cachedData) {
        const JsonAPIData = await getDataAndRegisterCache(searchInputValue);
        setDiseaseListData(JsonAPIData);
      }
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
