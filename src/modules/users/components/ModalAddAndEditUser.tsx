import {createUser, ICreateUser, updateUser} from "@app/api/ApiUser";
import {CONSTANTS} from "@app/utils/constant";
import {Form, Select, Input, notification} from "antd";
import Modal from "antd/lib/modal/Modal";
import {type} from "os";
import React from "react";

interface IModalAddAndEditUserProps {
  data?: ICreateUser;
  openModal: boolean;
  handleCloseModal: () => void;
  handleSuccess?: () => void;
}

export default function ModalAddAndEditUser(props: IModalAddAndEditUserProps) {
  const {data, openModal, handleCloseModal, handleSuccess} = props;
  const isAdd = !data;
  const handleSubmit = (data: any) => {
    if (isAdd) {
      createUser(data).then(() => {
        notification.success({
          message: "Thêm người dùng thành công",
        });
        handleSuccess?.();
      });
      return;
    }
    updateUser(data).then(() => {
      notification.success({
        message: "Sửa thông tin thành công",
      });
      handleSuccess?.();
    });
    return;
  };
  return (
    <Modal
      title={isAdd ? "Add User" : "Edit user"}
      open={openModal}
      okText={isAdd ? "Add" : "Edit"}
      onCancel={handleCloseModal}
      okButtonProps={{
        htmlType: "submit",
        form: "form-user",
      }}
      destroyOnClose
    >
      <Form
        onFinish={handleSubmit}
        layout="vertical"
        id="form-user"
        initialValues={data}
      >
        <Form.Item name="username" label="Name">
          <Input name="username" />
        </Form.Item>
        <Form.Item name="email" label="Email">
          <Input name="email" disabled={!isAdd} />
        </Form.Item>
        <Form.Item name="role" label="Role">
          <Select
            options={CONSTANTS.ROLE}
            defaultValue={CONSTANTS.ROLE[1].value}
          />
        </Form.Item>
        {isAdd && (
          <Form.Item name="password" label="Password">
            <Input.Password name="password" defaultValue="123123" />
          </Form.Item>
        )}
      </Form>
    </Modal>
  );
}
