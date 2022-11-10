export const isMakeSense = (searchTarget: string) => {
  const korean = /[ㄱ-ㅎ|ㅏ-ㅣ]/;

  return !korean.test(searchTarget);
};

export const isEmptyInput = (searchTarget: string) => {
  return searchTarget === "";
};
