import React, {useEffect, useRef, useState} from "react";
import {Button,notification, Space, Table, Tag} from "antd";
import type {ColumnsType} from "antd/es/table";
import {
  EditOutlined,
  LockOutlined,
  PlusOutlined,
  UnlockOutlined,
} from "@ant-design/icons";
import {ICDelete} from "@app/components/icon/ICDelete";
import {
  deleteUser,
  getUsers,
  IUserRes,
  LockAndUnlockUser,
} from "@app/api/ApiUser";
import {CONSTANTS} from "@app/utils/constant";
import colors from "@app/utils/tailwind/colors";
import ModalAddAndEditUser from "./components/ModalAddAndEditUser";
import moment from "moment";

interface DataType {
  username: string;
  email: string;
  role: string;
  status: number;
  key?: string;
  id: number;
}

export function Users() {
  const [users, setUsers] = useState<IUserRes[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const dataUser = useRef<any>();
  const columns: ColumnsType<DataType> = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
      width: 80,
      align: "center",
      render: (_, __, index) => index + 1,
    },
    {
      title: "Name",
      dataIndex: "username",
      key: "username",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (status) => {
        const statusUser = CONSTANTS.USER_STATUS.find(
          (item) => item.value === status
        );
        return (
          <Tag color={statusUser?.color}>{statusUser?.name.toUpperCase()}</Tag>
        );
      },
    },
    {
      title: "CreatedAt",
      key: "createdAt",
      dataIndex: "createdAt",
      render: (date) => moment(date).format("DD/MM/YYYY"),
    },
    {
      title: "Action",
      key: "action",
      width: 150,
      align: "center",
      render: (_, record) => (
        <Space size="large">
          {record?.status === 1 ? (
            <LockOutlined
              style={{color: "red", cursor: "pointer", fontSize: "18px"}}
              onClick={() => handleLockUser(record.id)}
            />
          ) : (
            <UnlockOutlined
              style={{color: "green", cursor: "pointer", fontSize: "18px"}}
              onClick={() => handleUnlockUser(record.id)}
            />
          )}
          <EditOutlined
            style={{color: "blue", cursor: "pointer", fontSize: "18px"}}
            onClick={() => {
              dataUser.current = record;
              handleOpenModal();
            }}
          />
          <div
            className="cursor-pointer"
            onClick={() => {
              handleDelete(record.id);
            }}
          >
            <ICDelete fillColor={colors.red[500]} />
          </div>
        </Space>
      ),
    },
  ];

  const handleCloseModal = () => {
    setOpenModal(false);
    dataUser.current = undefined;
  };
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleLoadData = () => {
    getUsers().then((res) => {
      setUsers(res.data);
    });
  };

  const handleLockUser = (id: number) => {
    LockAndUnlockUser({
      userId: id,
      status: CONSTANTS.USER_STATUS[0].value,
    }).then(() => {
      notification.success({
        message: "Khóa tài khoản thành công.",
      });
      handleLoadData();
    });
  };

  const handleDelete = (id: number) => {
    deleteUser(id).then(() => {
      notification.success({
        message: "Xóa tài khoản thành công",
      });
      handleLoadData();
    });
  };

  const handleUnlockUser = (id: number) => {
    LockAndUnlockUser({
      userId: id,
      status: CONSTANTS.USER_STATUS[1].value,
    }).then(() => {
      notification.success({
        message: "Mở khóa tài khoản thành công.",
      });
      handleLoadData();
    });
  };

  useEffect(() => {
    handleLoadData();
  }, []);
  return (
    <div>
      <div className="flex items-center justify-between px-1">
        <div className="font-bold text-[18px] pb-10">Quản lý người dùng</div>
        <div>
          <Button
            icon={<PlusOutlined />}
            type="primary"
            style={{display: "flex", alignItems: "center"}}
            onClick={handleOpenModal}
          >
            Add
          </Button>
        </div>
      </div>
      <Table columns={columns} dataSource={users} />
      <ModalAddAndEditUser
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        handleSuccess={() => {
          handleCloseModal();
          handleLoadData();
        }}
        data={dataUser.current}
      />
    </div>
  );
}
