import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { searchResult } from "../store/searchResult";
import { searchValue } from "../store/searchValue";
import useDebounce from "./useDebounce";
import checkEngAndNum from "../utils/checkEngAndNum";
import { searchDiseaseService } from "../apis";
import { AxiosError } from "axios";

import makeTrieBySearchWord from "utils/makeTrieBySearchWord";
import getCachedData from "utils/getCachedData";

import getDataAndRegisterCache from "apis/getDataAndRegisterCache";
import filterCachedData from "utils/filterCachedData";

const useSearch = () => {
  const searchInputValue = useRecoilValue(searchValue);
  const [diseaseListData, setDiseaseListData] = useRecoilState<any[]>(searchResult);

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
        const JsonApiData = await getDataAndRegisterCache(searchInputValue);
        setDiseaseListData(JsonApiData);
      }
    } catch (err: unknown) {
      if (err instanceof AxiosError<any>) {
        throw err;
      }
    }
  };

  useEffect(() => {
    condition && handleSearch();
  }, [debounceValue]);

  return diseaseListData;
};

export default useSearch;
