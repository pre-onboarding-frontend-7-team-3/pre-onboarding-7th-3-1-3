import { AxiosResponse } from "axios";

interface SearchDiseaseService {
  get(url: string): Promise<AxiosResponse>;
  search(keyword: string): Promise<AxiosResponse>;
}

export class SearchDiseaseServiceImp implements SearchDiseaseService {
  private httpClient: any;

  constructor(httpClient: any) {
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
