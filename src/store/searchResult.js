import { atom, selector } from "recoil";
import { searchValue } from "./searchValue";

export const searchResult = atom({
  key: "searchResult",
  default: [],
});

export const matchedSearchResult = selector({
  key: "matchedSearchResult",

  get: ({ get }) => {
    const searchResultData = get(searchResult);
    const searchInput = get(searchValue);
    const matchedSearchResultData = searchResultData.filter((item) =>
      item.sickNm.includes(searchInput),
    );

    return matchedSearchResultData;
  },
});
