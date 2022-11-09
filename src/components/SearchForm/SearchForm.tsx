/* eslint-disable @typescript-eslint/no-use-before-define */
import { useState, useRef } from "react";
import { requestKeywordSearch } from "utils/apis/getSuggestionData";
import Suggestion from "components/Suggestion";
import { SuggestionData } from "types/suggestionData";
import useDebounce from "utils/debounce";

function SearchForm() {
  const [value, setValue] = useState<string>("");
  const [suggestionData, setSuggestionData] = useState<SuggestionData[] | null>(null);
  const getData = useDebounce(searchData, 1000);
  const inputRef = useRef<any>(null); // HTMLInputElement

  async function searchData(keyword: string) {
    try {
      let response = await requestKeywordSearch(keyword);
      setSuggestionData(response.data);
    } catch (err) {
      console.error(err);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);

    getData(e.target.value);
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      suggestionData &&
      suggestionData.length > 0 &&
      (e.key === "ArrowUp" || e.key === "ArrowDown")
    ) {
      e.preventDefault();
      inputRef.current.blur();
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="질환명을 입력해주세요"
        value={value}
        onChange={handleChange}
        ref={inputRef}
        onKeyUp={handleKeyUp}
      />
      <Suggestion data={suggestionData} />
    </>
  );
}

export default SearchForm;
