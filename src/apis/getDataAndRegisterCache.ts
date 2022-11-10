const getDataAndRegisterCache = async (searchTarget: string): Promise<object[]> => {
  console.log("calling api");

  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/sick?sickNm_like=${searchTarget}`
  );
  const responseClone = response.clone();
  const cacheStorageName = await window.caches.open("search");
  const registeredCache = await cacheStorageName.put(
    `${process.env.REACT_APP_BASE_URL}/sick?sickNm_like=${searchTarget}`,
    responseClone
  );

  const data = await response.json();
  return data;
};

export default getDataAndRegisterCache;
