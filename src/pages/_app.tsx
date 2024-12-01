import "tailwindcss/tailwind.css";
import "@app/styles/_app.scss";
import "antd/dist/antd.css";
import type {AppProps} from "next/app";
import { Provider } from "react-redux";
import store, { persistor } from "@app/redux/store";
import Head from "next/head";
import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import config from "@app/config";
import Routes from "@app/routers";

export default function App({Component, pageProps, router}: AppProps) {
  if (typeof window !== "undefined") {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
            <Head>
              <html lang="en" />
              <title>{config.APP_NAME}</title>
              <meta name="description" content={config.APP_NAME} />
              <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            {React.createElement(Routes, {
              Component,
              pageProps,
              router,
            })}
        </PersistGate>
      </Provider>
    );
  }

  return null;
}
