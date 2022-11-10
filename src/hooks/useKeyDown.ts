import { useCallback, useMemo } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { searchResult } from "../store/searchResult";
import { selectedSearchResultIndex } from "../store/selectedSearchResultIndex";

// type Key = "ArrowDown" | "ArrowUp";

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

  const onArrowDown = () => {
    keyData.lastItem ? setSelectedIndex(-1) : setSelectedIndex((prev) => prev + 1);
  };

  const onArrowUp = () => {
    keyData.firstItem
      ? setSelectedIndex(keyData.currentDataLength - 1)
      : setSelectedIndex((prev) => prev - 1);
  };

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (["ArrowDown", "ArrowUp"].includes(event.key)) {
        event.preventDefault();
      }
      // 조합문자가 아닐때 return해야하는거 아닌가?
      const isOneWord = event.nativeEvent.isComposing;
      const isSearchResultEmpty = keyData.emptyData;

      console.log(isOneWord);

      if (isOneWord || isSearchResultEmpty) return;

      switch (event.key) {
        case "ArrowDown":
          onArrowDown();
          break;
        case "ArrowUp":
          onArrowUp();
          break;
        default:
          console.log("invalid key");
          break;
      }
    },
    [selectedIndex, diseaseListData]
  );

  return onKeyDown;
};

export default useKeyDown;
