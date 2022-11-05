import axios from 'axios';

const createAxiosClient = (baseURL: string) => {
  return axios.create({
    baseURL,
    timeout: 1000 * 10,
  });
};
export default createAxiosClient;
