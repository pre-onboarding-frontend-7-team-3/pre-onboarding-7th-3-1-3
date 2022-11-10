const makeLowerCase = (str) => str.toLowerCase();

const formatFontWeight = (result, query) => {
  const filteredSearchResult = result
    .split(" ")
    .map((word) => word.replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .join(" ")
    .split(new RegExp(`(${query})`, "gi"));

  const parsedSentence = filteredSearchResult.map((word, idx) => {
    return makeLowerCase(word) === makeLowerCase(query) ? <b key={idx}>{word}</b> : word;
  });

  if (query !== "" && makeLowerCase(result).includes(makeLowerCase(query))) {
    return <>{parsedSentence}</>;
  }
  return result;
};

export default formatFontWeight;
