import {fetcher} from "./index";

const path = {
    root: "history-action",
  };

const getDataHistoryAction = (params = {}): Promise<any> => {
  return fetcher({
    method: "get",
    params: params,
    url: `/${path.root}/get-data`,
  });
};

export {getDataHistoryAction}
