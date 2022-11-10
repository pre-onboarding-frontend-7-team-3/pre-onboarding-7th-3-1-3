const getDataAndRegisterCache = async (searchTarget: string): Promise<object[]> => {
  const response = await fetch(`http://localhost:4000/sick?sickNm_like=${searchTarget}`);
  const responseClone = response.clone();
  const cache = await window.caches.open("search");
  const registeredCache = await cache.put(
    `http://localhost:4000/sick?sickNm_like=${searchTarget}`,
    responseClone
  );
  const json = await response.json();
  return json;
};

export default getDataAndRegisterCache;
