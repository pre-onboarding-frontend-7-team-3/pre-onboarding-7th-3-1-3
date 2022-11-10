const filterCachedData = (existingData: Array<object>, searchTarget: string): Array<object> => {
  return existingData.filter((v: any) => {
    return v.sickNm.indexOf(searchTarget) !== -1;
  });
};

export default filterCachedData;
