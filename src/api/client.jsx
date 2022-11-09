import axios from "axios";

const clientApi = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

export default clientApi;
