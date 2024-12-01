export const apiKeyWeather = "dc72c15740c46bd10991011400f2d0b8";
export const ipBE = "localhost";
// export const ipBE = "192.168.0.101";
export const portBE = 8000;
export const version = "v1";

const config: Record<string, any> = {
  APP_NAME: "Smart Home",
  PATH_NAME: {
    LOGIN: "/auth",
  },
  API_URL: `http://${ipBE}:${portBE}/api/${version}`,
};

export default config;
