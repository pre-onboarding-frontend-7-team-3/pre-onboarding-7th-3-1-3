import axios from "axios";

const clientApi = axios.create({
  baseURL: "http://localhost:4000",
});

export default clientApi;
