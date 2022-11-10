
import type { ResultData } from "../store/searchResult";

const getDataAndRegisterCache = (searchTarget: string): Promise<ResultData[]> => {

  return fetch(`http://localhost:4000/sick?sickNm_like=${searchTarget}`, {
    method: "get",
  }).then((fetchRes) => {
    let responseClone = fetchRes.clone();
    caches.open("search").then((cache) => {
      cache.put(`http://localhost:4000/sick?sickNm_like=${searchTarget}`, responseClone);
    });

    // eslint-disable-next-line no-console
    console.info("calling api");

    return fetchRes.json();
  });
};

export default getDataAndRegisterCache;
