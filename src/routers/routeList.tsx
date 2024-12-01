import {AppstoreOutlined, UsergroupAddOutlined} from "@ant-design/icons";
import { ICDashboard } from "@app/components/icon/ICDashboard";
import { ICDelete } from "@app/components/icon/ICDelete";
import { ICDevices } from "@app/components/icon/ICDevices";
import { ICGroupAdd } from "@app/components/icon/ICGroupAdd";
import { ICHistory } from "@app/components/icon/ICHistory";
import { ICHome } from "@app/components/icon/ICHome";
import { ICSensor } from "@app/components/icon/ICSensor";

export interface IRoute {
  path: string;
  name: string;
  role?: string | string[];
  icon?: React.ReactNode;
  isSidebar?: boolean;
  isPrivate?: boolean;
  isPublic?: boolean;
  isUpdating?: boolean;
  isAuth?: boolean;
  isSSR?: boolean;
  children?: IRoute[];
}

const routes: IRoute[] = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <ICDashboard />,
  },
  {
    name: "Data sensor",
    path: "/data",
    role: ["admin"],
    icon: <ICSensor />
  },
  {
    name: "History action",
    path: "/history-action",
    role: ["admin"],
    icon: <ICHistory/>
  },
  {
    name: "Users",
    path: "/users",
    icon: <ICGroupAdd />,
    role: ["admin"],
  }
];

export default routes;
