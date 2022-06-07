import axios from "axios";

export const httpClient = axios.create({
  baseURL: "https://qualitycontrol.herokuapp.com/api/v1",
});
