import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
  },
});

const getSickApi = async (keyword: string) => {
  const sickData = await instance.get("sick", {
    params: {
      q: keyword,
    },
  });
  /* eslint-disable no-console */
  console.log("calling api");
  /* eslint-disable no-console */
  return sickData;
};

export default getSickApi;
