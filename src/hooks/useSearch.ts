import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { searchResultState } from "../store/searchResult";
import { searchValue } from "../store/searchValue";
import useDebounce from "./useDebounce";
import checkEngAndNum from "../utils/checkEngAndNum";
import { searchDiseaseService } from "../apis";
import { AxiosError } from "axios";

const useSearch = () => {
  const searchInputValue = useRecoilValue(searchValue);
  const [diseaseListData, setDiseaseListData] = useRecoilState(searchResultState);

  const { debounceValue } = useDebounce(searchInputValue);

  const condition = checkEngAndNum(searchInputValue) && searchInputValue;

  const handleSearch = async () => {
    try {
      const { data } = await searchDiseaseService.search(debounceValue);
      setDiseaseListData(data);
      // API 호출 횟수 확인
      // eslint-disable-next-line
      console.log("api calling");
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
