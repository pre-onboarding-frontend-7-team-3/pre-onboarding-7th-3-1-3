import { useRecoilState, useRecoilValue } from "recoil";
import { searchResult } from "../store/searchResult";
import { selectedSearchResultIndex } from "../store/selectedSearchResultIndex";

const useKeyDown = () => {
  const [selectedIndex, setSelectedIndex] = useRecoilState(selectedSearchResultIndex);
  const diseaseData = useRecoilValue(searchResult);

  const onKeyDown = ({ key }) => {
    if (diseaseData.length === 0) return;
    if (key === "ArrowDown") {
      if (selectedIndex === diseaseData?.length - 1) return;
      setSelectedIndex(selectedIndex + 1);
    }
    if (key === "ArrowUp") {
      if (selectedIndex === 0) return;
      setSelectedIndex(selectedIndex - 1);
    }
  };
  return onKeyDown;
};

export default useKeyDown;
