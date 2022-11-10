import { useCallback, useMemo } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { searchResultState } from "store/searchResult";
import { selectedSearchResultIndex } from "store/selectedSearchResultIndex";

const useKeyDown = () => {
  const [selectedIndex, setSelectedIndex] = useRecoilState(selectedSearchResultIndex);
  const diseaseListData = useRecoilValue(searchResultState);

  const keyData = useMemo(() => {
    return {
      currentDataLength: diseaseListData.length,
      isEmptyData: diseaseListData.length === 0,
      isFirstItem: selectedIndex <= 0,
      isLastItem: selectedIndex === diseaseListData.length - 1,
    };
  }, [diseaseListData, selectedIndex]);

  const onArrowDown = () => {
    keyData.isLastItem ? setSelectedIndex(-1) : setSelectedIndex((prev) => prev + 1);
  };

  const onArrowUp = () => {
    keyData.isFirstItem
      ? setSelectedIndex(keyData.currentDataLength - 1)
      : setSelectedIndex((prev) => prev - 1);
  };

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (["ArrowDown", "ArrowUp"].includes(e.key)) {
        e.preventDefault();
      }

      const isSingleWord = e.nativeEvent.isComposing;
      const isSearchResultEmpty = keyData.isEmptyData;

      if (isSingleWord || isSearchResultEmpty) return;

      switch (e.key) {
        case "ArrowDown":
          onArrowDown();
          break;
        case "ArrowUp":
          onArrowUp();
          break;
        default:
          break;
      }
    },
    [selectedIndex, diseaseListData]
  );

  return onKeyDown;
};

export default useKeyDown;
