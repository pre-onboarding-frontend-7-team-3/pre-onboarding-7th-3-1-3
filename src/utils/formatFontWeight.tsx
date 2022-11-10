import { ReactNode } from "react";

const makeLowerCase = (str: string) => str.toLowerCase();

const formatFontWeight = (result: string, query: string) => {
  const filteredSearchResult = result
    .split(" ")
    .map((word) => word.replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .join(" ")
    .split(new RegExp(`(${query})`, "gi"));

  const parsedSentence = filteredSearchResult.map((word: string, idx: number) => {
    return makeLowerCase(word) === makeLowerCase(query) ? <b key={idx}> {word} </b> : word;
  });

  if (query !== "" && makeLowerCase(result).includes(makeLowerCase(query))) {
    return <>{parsedSentence}</>;
  }
  return result;
};

export default formatFontWeight;
