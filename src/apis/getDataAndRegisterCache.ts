const getDataAndRegisterCache = (searchTarget: string): Promise<object[]> => {
  return fetch(`${process.env.REACT_APP_BASE_URL}/sick?q=${searchTarget}`, { method: "get" }).then(
    (fetchRes) => {
      // eslint-disable-next-line no-console
      console.info("calling api");

      let responseClone = fetchRes.clone();
      caches.open("search").then((cache) => {
        cache.put(`${process.env.REACT_APP_BASE_URL}/sick?q=${searchTarget}`, responseClone);
      });

      return fetchRes.json();
    }
  );
};

export default getDataAndRegisterCache;
