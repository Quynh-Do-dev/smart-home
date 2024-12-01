import React from "react";
import config from "@app/config";
import {AppProps} from "next/app";
import routes, {IRoute} from "./routeList";
import DashboardLayout from "@app/components/Layout/DashboardLayout";
import store from "@app/redux/store";
import LandingLayout from "@app/components/Layout/LandingLayout";

export default function Routes({
  Component,
  pageProps,
  router,
}: AppProps): JSX.Element | null {
  const login = router.pathname === config.PATH_NAME.LOGIN;
  const isRoute = (key: keyof IRoute): boolean => {
    for (const route of routes) {
      if (router.pathname === route.path) {
        return !!route[key];
      }
    }
    return false;
  };

  const isLogin = (): boolean => {
    return !!store.getState()?.user?.user?.token;
  };

  const isPrivateRoute = (): boolean => {
    for (const route of routes) {
      if (router.pathname === route.path) {
        return !route.isPrivate;
      }
      return false;
    }
    return false;
  };

  const goToLogin = () => {
    router.replace(config.PATH_NAME.LOGIN);
    return null;
  };

  if (typeof window === "undefined") {
    return null;
  }

  if (isRoute("isPublic") || login) {
    return (
      <LandingLayout>
        <Component {...pageProps} />
      </LandingLayout>
    );
  }

  if (!isLogin()) {
    return goToLogin();
  }

  return (
    <DashboardLayout>
      <Component {...pageProps} />
    </DashboardLayout>
  );
}
