const isMakeSense = (searchTarget: string) => {
  const korean = /[ㄱ-ㅎ|ㅏ-ㅣ]/;

  return !korean.test(searchTarget) && searchTarget !== "";
};

export default isMakeSense;
