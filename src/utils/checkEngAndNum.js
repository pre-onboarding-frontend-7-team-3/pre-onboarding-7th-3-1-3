const checkEngAndNum = (str) => {
  const regExp = /[^a-zA-Z0-9]/;
  if (regExp.test(str)) {
    return true;
  } else {
    return false;
  }
};

export default checkEngAndNum;
