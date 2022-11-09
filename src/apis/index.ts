import { SearchDiseaseServiceImp } from "./SearchDiseaseService";
import { AxiosHttpClient } from "./request";

const httpClient = new AxiosHttpClient("http://localhost:4000");
export const searchDiseaseService = new SearchDiseaseServiceImp(httpClient);
