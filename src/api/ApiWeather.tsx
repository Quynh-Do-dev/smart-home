import {apiKeyWeather} from "@app/config";
import axios, {AxiosRequestConfig} from "axios";

export async function getWeaher(params: any) {
  try {
    const response = await axios({
      method: "get",
      url: `http://api.weatherstack.com/current?access_key=${apiKeyWeather}`,
      params: params,
      timeout: 10000,
    });

    return response.data;
  } catch (error) {
    console.error("Error making HTTP request:", error);
    throw error;
  }
}
