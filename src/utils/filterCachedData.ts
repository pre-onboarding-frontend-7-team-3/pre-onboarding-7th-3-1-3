const filterCachedData = (existingData: Array<any>, searchTarget: string): Array<any> => {
  return existingData.filter((v: any) => {
    return v.sickNm.toLowerCase().indexOf(searchTarget.toLowerCase()) !== -1;
  });
};

export default filterCachedData;
