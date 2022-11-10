export const IsValidateText = (searchTarget: string) => {
  const onlyKorEngNum = /^[가-힣a-zA-Z0-9]/;
  if (onlyKorEngNum.test(searchTarget)) {
    return true;
  }
  return false;
};

export const isEmptyInput = (searchTarget: string) => {
  return searchTarget === "";
};
