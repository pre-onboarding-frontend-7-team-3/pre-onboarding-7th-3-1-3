/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import axios from "axios";

export const requestKeywordSearch = (keyword: string) => {
  console.info("calling api");

  return axios.get(`/sick`, {
    params: {
      q: keyword,
    },
  });
};
