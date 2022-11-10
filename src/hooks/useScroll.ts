import { useEffect } from "react";

const useScroll = (value: number, idx: number, ref: any) => {
  useEffect(() => {
    const isSelected = value === idx;
    if (isSelected) {
      ref.current?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    }
  }, [value, idx]);
};

export default useScroll;
