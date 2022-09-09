import fetch from "node-fetch";
import configuration from "../configuration";

////get weather info based on city

interface IGetWeatherInfo {
  city: string;
}
export function GetWeatherInfo({ city }: IGetWeatherInfo) {
  return new Promise(async function (resolve, reject) {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&&appid=${configuration.apiKey}`;
      const response = await fetch(url, { method: "get" });
      resolve(response.json());
    } catch (error) {
      reject(error);
    }
  });
}
