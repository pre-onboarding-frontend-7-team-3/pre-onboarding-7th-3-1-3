import { SearchDiseaseServiceImp } from "./SearchDiseaseService";
import { AxiosHttpClient } from "./request";

const httpClient = new AxiosHttpClient(`${process.env.REACT_APP_SERVER_URL}`);
export const searchDiseaseService = new SearchDiseaseServiceImp(httpClient);
