import { atom } from "recoil";

export const searchResult = atom({
  key: "searchResult",
  default: [], // new Set() , trie, {}
});
