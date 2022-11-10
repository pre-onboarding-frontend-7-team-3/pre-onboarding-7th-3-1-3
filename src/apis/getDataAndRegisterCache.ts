const getDataAndRegisterCache = (searchTarget: string): Promise<object[]> => {
  return fetch(`${process.env.REACT_APP_BASE_URL}/sick?sickNm_like=${searchTarget}`, {
    method: "get",
  }).then((fetchRes) => {
    let responseClone = fetchRes.clone();
    caches.open("search").then((cache) => {
      cache.put(
        `${process.env.REACT_APP_BASE_URL}/sick?sickNm_like=${searchTarget}`,
        responseClone
      );
    });

    // eslint-disable-next-line no-console
    console.log("api calling");
    return fetchRes.json();
  });
};

export default getDataAndRegisterCache;
