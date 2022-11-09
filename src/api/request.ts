import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const createAxiosInstance = () => {
  const base = axios.create({
    baseURL: `http://localhost:4000`,
  });

  return base;
};

const axiosInstance = createAxiosInstance();

export default async function requester<Payload>(option: AxiosRequestConfig) {
  const response: AxiosResponse<Payload> = await axiosInstance({
    headers: {
      "Content-Type": "application/json",
    },
    ...option,
  });
  return {
    status: response.status,
    headers: response.headers,
    payload: response.data,
  };
}
