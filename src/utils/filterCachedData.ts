const filterCachedData = (existingData: Array<object>, searchTarget: string): Array<object> => {
  return existingData.filter((v: any) => {
    return v.sickNm.toLowerCase().indexOf(searchTarget.toLowerCase()) !== -1;
  });
};

export default filterCachedData;
