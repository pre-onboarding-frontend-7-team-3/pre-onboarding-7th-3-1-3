export class AxiosHttpClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async request({ url, ...options }: { url: string; [key: string]: string }): Promise<Response> {
    return fetch(`${this.baseURL}${url}`, { ...options });
  }
}
