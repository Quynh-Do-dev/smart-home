import React from "react";
import "./index.scss";
import type {MenuProps} from "antd";
import {Menu} from "antd";
import routes, {IRoute} from "@app/routers/routeList";
import Image from "next/image";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";
import {IRootState} from "@app/redux/store";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

function createItems(routes: IRoute[]): MenuItem[] {
  return routes.map((route) => {
    const {path, name, icon, children} = route;
    return getItem(
      name,
      path,
      icon,
      children ? createItems(children) : undefined
    );
  });
}

export default function SideBar() {
  const router = useRouter();
  const user = useSelector((state: IRootState) => state.user.user);
  const onClick: MenuProps["onClick"] = (route) => {
    router.push(route.key);
  };

  const handleRenderRoute = () => {
    return routes.filter(
      (route) => route?.role?.includes(user?.role ?? "") || !route.role
    );
  };

  return (
    <div className="sidebar py-3 h-full bg-slate-400">
      <div className="logo px-12 py-3 flex justify-center">
        <Image src="/images/logo.png" alt="logo" width={50} height={50} />
      </div>
      <Menu
        onClick={onClick}
        mode="inline"
        items={createItems(handleRenderRoute())}
        className="w-full"
      />
    </div>
  );
}
