import { useRecoilState, useRecoilValue } from "recoil";
import { searchResult } from "../store/searchResult";
import { selectedSearchResultIndex } from "../store/selectedSearchResultIndex";

const useKeyDown = () => {
  const [selectedIndex, setSelectedIndex] = useRecoilState(selectedSearchResultIndex);
  const diseaseListData = useRecoilValue(searchResult);

  const onKeyDown = (e) => {
    if (e.nativeEvent.isComposing) return;
    if (diseaseListData.length === 0) return;
    if (e.key === "ArrowDown") {
      if (selectedIndex === diseaseListData?.length - 1) return;
      setSelectedIndex(selectedIndex + 1);
    }
    if (e.key === "ArrowUp") {
      if (selectedIndex === 0) return;
      setSelectedIndex(selectedIndex - 1);
    }
  };
  return onKeyDown;
};

export default useKeyDown;
