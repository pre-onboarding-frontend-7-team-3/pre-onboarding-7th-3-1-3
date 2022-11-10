import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { AxiosError } from "axios";
import { IsValidateText } from "../utils/checkValidationOfInput";
import makeTrieBySearchWord from "../utils/makeTireBySearchWord";
import getCachedData from "utils/getCachedData";
import filterCachedData from "utils/filterCachedData";
import useDebounce from "./useDebounce";
import { ResultData, searchResultState } from "store/searchResult";
import getDataAndRegisterCache from "apis/getDataAndRegisterCache";
import { searchValue } from "store/searchValue";

const useSearch = () => {
  const searchInputValue = useRecoilValue(searchValue);
  const [diseaseListData, setDiseaseListData] = useRecoilState<ResultData[]>(searchResultState);

  const { debounceValue } = useDebounce(searchInputValue);

  const condition = IsValidateText(searchInputValue) && searchInputValue;

  const handleSearch = async () => {
    const TrieWordList = makeTrieBySearchWord(searchInputValue);
    const cachedData = await getCachedData(TrieWordList);

    try {
      if (IsValidateText(searchInputValue) && cachedData) {
        const JsonCachedData = await cachedData.json();
        setDiseaseListData(filterCachedData(JsonCachedData, searchInputValue));
      }
      if (IsValidateText(searchInputValue) && !cachedData) {
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
