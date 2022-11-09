import { ChangeEvent, FormEvent, useState } from "react";
import { debounce } from "utils/debounce";
import { searchDiseaseService } from "apis";
import {trie} from 'utils/autoComplete'

function SearchBar() {
  const [inputVal, setInputVal] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const keyword = event.target.value;
    if (keyword.length) {
      setInputVal(keyword);
      debounce(async () => {
				
        const { data } = await searchDiseaseService.search(keyword);
        console.log(data);
      }, 500);
    }
  };
  return (
    <div>
      <input value={inputVal} onChange={handleChange} />
    </div>
  );
}

export default SearchBar;
