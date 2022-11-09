import { atom } from "recoil";

const textState = atom<string>({
  key: "textState",
  default: "",
});

export default textState;
