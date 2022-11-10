import { searchDiseaseService } from ".";
import type { ResultData } from "../store/searchResult";

const getDataAndRegisterCache = (searchTarget: string): Promise<ResultData[]> => {
  return searchDiseaseService.search(searchTarget).then((fetchRes) => {
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
