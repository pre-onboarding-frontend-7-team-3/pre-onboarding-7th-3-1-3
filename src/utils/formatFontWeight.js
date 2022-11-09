const formatFontWeight = (result, query) => {
  const filteredSearchResult = result
    .split(" ")
    .map((word) => word.replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .join(" ")
    .split(new RegExp(`(${query})`, "gi"));

  if (query !== "" && result.includes(query)) {
    return (
      <>
        {filteredSearchResult.map((word, idx) => {
          return word === query ? <b key={idx}>{word}</b> : word;
        })}
      </>
    );
  }
  return result;
};

export default formatFontWeight;
