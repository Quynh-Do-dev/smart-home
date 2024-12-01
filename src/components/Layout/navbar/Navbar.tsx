import {DownOutlined, RightOutlined} from "@ant-design/icons";
import {ICBell} from "@app/components/icon/ICBell";
import {ICMarkQuestion} from "@app/components/icon/ICMarkQuestion";
import config from "@app/config";
import {logoutUser} from "@app/redux/slices/UserSlice";
import {IRootState} from "@app/redux/store";
import {getNameInitials} from "@app/utils";
import {Dropdown, MenuProps, Modal} from "antd";
import Avatar from "antd/lib/avatar/avatar";
import {useRouter} from "next/router";
import React from "react";
import {useSelector, useDispatch} from "react-redux";
import "./index.scss";

interface IItemsDropdown {
  name: string;
  path?: string;
  className?: string;
  onClick?: () => void;
}

export default function Navbar() {
  const user = useSelector((state: IRootState) => state.user.user);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogout = (): void => {
    Modal.confirm({
      title: "Logout",
      content: "Bạn có chắc chắn muốn đăng xuất",
      onOk: () => {
        dispatch(logoutUser());
        router.push(config.PATH_NAME.LOGIN);
      },
    });
  };
  const itemsDropdown: IItemsDropdown[] = [
    {
      name: "My profile",
    },
    {
      name: "Logout",
      className: "text-rose-500",
      onClick: handleLogout,
    },
  ];

  const renderItemDropdown = (
    itemsDropdown: IItemsDropdown[]
  ): MenuProps["items"] => {
    return itemsDropdown?.map((items) => ({
      label: (
        <div
          className={`flex justify-between items-center gap-3 my-1 ${items.className}`}
        >
          {items.name}
          <RightOutlined />
        </div>
      ),
      key: items.name,
      onClick: items.onClick,
    }));
  };
  return (
    <div className="navbar border-b flex justify-between items-center px-5">
      <div className="nav-l">
        Xin chào {user?.username ?? user?.email ?? "Know"}
      </div>
      <div className="flex gap-5 items-center pr-10">
        <div className="p-1.5 rounded-full bg-gray-200">
          <ICMarkQuestion width="14" height="14" />
        </div>
        Help
        <div className="mr-3">
          <ICBell />
        </div>
        <Dropdown
          menu={{items: renderItemDropdown(itemsDropdown)}}
          trigger={["hover"]}
        >
          <div className="flex items-center gap-3 cursor-pointer">
            <Avatar style={{backgroundColor: "#fde3cf", color: "#f56a00"}}>
              {getNameInitials(user?.username ?? user?.email ?? "Know")}
            </Avatar>
            <div className="font-bold flex items-center gap-2">
              {user?.username ?? user?.email ?? "Know"}
              <DownOutlined />
            </div>
          </div>
        </Dropdown>
      </div>
    </div>
  );
}
