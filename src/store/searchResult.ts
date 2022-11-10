import { atom } from "recoil";

export const searchResultState = atom({
  key: "searchResult",
  default: [], // new Set() , trie, {}
});
