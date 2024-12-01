import config from "@app/config";
import store from "@app/redux/store";
import {notification} from "antd";
import axios, {AxiosError, AxiosRequestConfig} from "axios";

interface IFetcherOptions {
  token?: string;
  withToken?: boolean;
  withMetadata?: boolean;
  displayError?: boolean;
  isFormData?: boolean;
}

function getAuthorization(defaultOptions: IFetcherOptions) {
  if (defaultOptions.token) {
    return `Bearer ${defaultOptions.token}`;
  }

  if (defaultOptions.withToken) {
    const state = store.getState();
    const token = state.user?.user?.token;
    if (token) {
      return `Bearer ${token}`;
    }
  }

  return undefined;
}

async function fetcher<T>(
  configRequest: AxiosRequestConfig,
  options: IFetcherOptions = {}
) {
  const defaultOptions: IFetcherOptions = {
    withToken: true,
    withMetadata: false,
    isFormData: false,
    ...options,
  };
  const {method, url, data = null, params = null} = configRequest;
  return new Promise<T>((resolve, reject) => {
    axios({
      method: method,
      url: config.API_URL + url,
      data: data ?? {},
      params: params,
      timeout: 10000,
      headers: {
        "Content-Type": defaultOptions?.isFormData
          ? "multipart/form-data"
          : "application/json",
        "Authorization": getAuthorization(defaultOptions),
      },
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error: AxiosError<any>) => {
        notification.error({
          message: error?.response?.data?.message,
          description: error?.message,
          duration: 3,
        });
        reject({});
      });
  });
}

export {fetcher};
