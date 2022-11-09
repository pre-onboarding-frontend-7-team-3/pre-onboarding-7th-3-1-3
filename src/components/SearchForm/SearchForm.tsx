import { useState } from "react";
import { requestKeywordSearch } from "utils/apis/getSuggestionData";
import Suggestion from "components/Suggestion";
import { SuggestionData } from "types/suggestionData";

function SearchForm() {
  const [value, setValue] = useState<string>("");
  const [suggestionData, setSuggestionData] = useState<SuggestionData[] | null>(null);

  const searchData = async (keyword: string) => {
    try {
      let response = await requestKeywordSearch(keyword);
      setSuggestionData(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    searchData(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="질환명을 입력해주세요"
        value={value}
        onChange={handleChange}
      />
      <Suggestion data={suggestionData} />
    </>
  );
}

export default SearchForm;
