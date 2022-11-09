import { useCallback, useMemo } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { searchResult } from "../store/searchResult";
import { selectedSearchResultIndex } from "../store/selectedSearchResultIndex";

const useKeyDown = () => {
  const [selectedIndex, setSelectedIndex] = useRecoilState(selectedSearchResultIndex);
  const diseaseListData = useRecoilValue(searchResult);

  const keyData = useMemo(() => {
    return {
      currentDataLength: diseaseListData.length,
      emptyData: diseaseListData.length === 0,
      firstItem: selectedIndex <= 0,
      lastItem: selectedIndex === diseaseListData.length - 1,
    };
  }, [diseaseListData, selectedIndex]);

  const onKeyDown = useCallback(
    (e) => {
      if (["ArrowDown", "ArrowUp"].includes(e.key)) {
        e.preventDefault();
      }
      if (e.nativeEvent.isComposing) return;
      if (keyData.emptyData) return;

      if (e.key === "ArrowDown") {
        if (keyData.lastItem) {
          setSelectedIndex(-1);
        }
        setSelectedIndex((prev) => prev + 1);
      }

      if (e.key === "ArrowUp") {
        if (keyData.firstItem) {
          setSelectedIndex(keyData.currentDataLength - 1);
          return;
        }
        setSelectedIndex((prev) => prev - 1);
      }
    },
    [selectedIndex, diseaseListData],
  );
  return onKeyDown;
};

export default useKeyDown;
