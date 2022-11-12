import { SearchDiseaseServiceImp } from "./SearchDiseaseService";
import { HttpClient } from "./request";

const httpClient = new HttpClient(`${process.env.REACT_APP_SERVER_URL}`);
export const searchDiseaseService = new SearchDiseaseServiceImp(httpClient);
