import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { AxiosError } from "axios";

import getDataAndRegisterCache from "apis/getDataAndRegisterCache";

import useDebounce from "hooks/useDebounce";

import { searchResultState, ResultData } from "store/searchResult";
import { searchValue } from "store/searchValue";

import checkEngAndNum from "utils/checkEngAndNum";
import makeTrieBySearchWord from "utils/makeTrieBySearchWord";
import getCachedData from "utils/getCachedData";
import filterCachedData from "utils/filterCachedData";

const useSearch = () => {
  const searchInputValue = useRecoilValue(searchValue);
  const [diseaseListData, setDiseaseListData] = useRecoilState<ResultData[]>(searchResultState);

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
      if (err instanceof AxiosError) {
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
