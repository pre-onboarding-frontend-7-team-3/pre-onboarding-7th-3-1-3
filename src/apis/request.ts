import axios, { AxiosError, AxiosResponse } from "axios";

export class AxiosHttpClient {
  private baseURL: string;
  private client: any;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
    this.client = axios.create({ baseURL: this.baseURL });
  }

  async request<T extends AxiosResponse>({ ...options }): Promise<T> {
    const onSuccess = (response: AxiosResponse<any[]>) => response;
    const onError = (error: AxiosError) => error;

    return this.client(options).then(onSuccess).catch(onError);
  }
}
