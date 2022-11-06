import { AxiosError, AxiosInstance } from 'axios';
import {
  AdService,
  GetAdListResponse,
  GetTrendResponse,
} from 'models/interface';
import HTTPError from '../network/httpError';

const AD_LIST_URL = '/ad-list-data-set.json';
const AD_TREND_URL = '/trend-data-set.json';

class AdServiceImpl implements AdService {
  constructor(private axiosInstance: AxiosInstance) {}

  async getAdList() {
    try {
      const { data } = await this.axiosInstance.get<GetAdListResponse>(
        AD_LIST_URL
      );
      return data;
    } catch (error) {
      const { response } = error as unknown as AxiosError;
      if (response) {
        throw new HTTPError(response?.status, response?.statusText);
      }
      throw new Error('Unknown Error');
    }
  }

  async getTrend() {
    try {
      const { data } = await this.axiosInstance.get<GetTrendResponse>(
        AD_TREND_URL
      );
      return data;
    } catch (error) {
      const { response } = error as unknown as AxiosError;
      if (response) {
        throw new HTTPError(response?.status, response?.statusText);
      }
      throw new Error('Unknown Error');
    }
  }
}

export default AdServiceImpl;
