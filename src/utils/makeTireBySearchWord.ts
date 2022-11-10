const makeTrieBySearchWord = (text: string): Array<string> => {
  const returnArr = [];

  for (let i = 1; i <= text.length; i++) {
    returnArr.push(text.substring(0, i));
  }
  return returnArr;
};

export default makeTrieBySearchWord;
