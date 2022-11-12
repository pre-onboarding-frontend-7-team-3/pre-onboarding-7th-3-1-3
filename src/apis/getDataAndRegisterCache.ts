import { searchDiseaseService } from ".";
import type { ResultData } from "../store/searchResult";

const getDataAndRegisterCache = (searchTarget: string): Promise<ResultData[]> => {
  return searchDiseaseService
    .search(searchTarget) //
    .then((fetchRes) => {
      let responseClone = fetchRes.clone();
      caches.open("search").then((cache) => {
        cache.put(
          `${process.env.REACT_APP_SERVER_URL}/sick?sickNm_like=${searchTarget}`,
          responseClone
        );
      });
      return fetchRes.json();
    })
    .catch((err) => console.error(err))
    .finally(() => console.info("calling api"));
};

export default getDataAndRegisterCache;
