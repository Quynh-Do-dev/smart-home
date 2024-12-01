import {fetcher} from "./index";

const path = {
    root: "sensors",
  };

const getDataSensor = (params = {}): Promise<any> => {
  return fetcher({
    method: "get",
    params: params,
    url: `/${path.root}/get-data`,
  });
};

export {getDataSensor}
