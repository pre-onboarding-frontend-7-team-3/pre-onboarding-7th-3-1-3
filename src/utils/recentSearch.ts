const storage = localStorage;

export const getRecentSearch = (): string[] => {
  const recentSearched = storage.getItem("RECENT") || "[]";

  return JSON.parse(recentSearched);
};

export const setRecentSearch = (key: string) => {
  const searchedArray = JSON.stringify([...getRecentSearch(), key]);
  storage.setItem("RECENT", searchedArray);
};
