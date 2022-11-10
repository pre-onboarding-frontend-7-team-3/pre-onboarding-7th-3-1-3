import { atom } from "recoil";

export interface ResultData {
  sickNm: string;
  sickCd: string;
}


export const searchResultState = atom<ResultData[]>({
  key: "searchResult",
  default: [], // new Set() , trie, {}
});
