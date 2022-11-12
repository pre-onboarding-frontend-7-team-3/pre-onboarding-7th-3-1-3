import { HttpClient } from "./request";

interface SearchDiseaseService {
  get(url: string): Promise<any>;
  search(keyword: string): Promise<any>;
}

export class SearchDiseaseServiceImp implements SearchDiseaseService {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  get client() {
    return this.httpClient;
  }

  async get(url = "") {
    const res = await this.client.request({ method: "get", url });

    return res;
  }

  async search(keyword: string) {
    const res = await this.client.request({ method: "get", url: `/sick?sickNm_like=${keyword}` });

    return res;
  }
}
