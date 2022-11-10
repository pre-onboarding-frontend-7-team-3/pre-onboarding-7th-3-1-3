const checkEngAndNum = (str) => {
  const onlyKorEngNum = /^[가-힣a-zA-Z0-9]/;
  if (onlyKorEngNum.test(str)) {
    return true;
  }
  return false;
};

export default checkEngAndNum;
