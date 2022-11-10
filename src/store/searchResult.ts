import { atom } from "recoil";

export interface ResultData {
  sickNm: string;
  sickCd: string;
}

export const searchResult = atom<ResultData[]>({
  key: "searchResult",
  default: [],
});
