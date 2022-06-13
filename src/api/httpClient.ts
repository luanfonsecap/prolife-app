import axios from "axios";
import { isPast } from 'date-fns';
import { Alert } from "react-native";
import { parseJwt } from "../utils/parseJwt";

interface IRefreshResponse {
  access_token: string;
}

export const httpClient = axios.create({
  baseURL: "https://qualitycontrol.herokuapp.com/api/v1",
});


httpClient.interceptors.request.use(async function (config) {
  if (!config.headers || !config.headers.Authorization) return config;

  const decodedToken = parseJwt(config.headers.Authorization as string)

  const tokenExpired = isPast(new Date(decodedToken.exp));

  if (!tokenExpired) return config;

  try {
    const response = await httpClient.post<IRefreshResponse>('/refresh')

    config.headers.Authorization = response.data.access_token;
  } catch {
    Alert.alert('Sua sessão expirou faça login novamente')
  }

  return config;
});