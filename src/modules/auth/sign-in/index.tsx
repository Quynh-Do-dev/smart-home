import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {ILoginUser, login} from "@app/api/ApiUser";
import {loginUser} from "@app/redux/slices/UserSlice";
import {Button, Form, Input, notification} from "antd";
import { useRouter } from "next/router";
import React from "react";
import {useDispatch} from "react-redux";
import "./index.scss";

export function SignIn() {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogin = (values: ILoginUser) => {
    login(values)
      .then((res) => {
        dispatch(loginUser(res));
        notification.success({
          message: "Đăng nhập thành công",
        })
        setTimeout(() => {
          router.replace("/");
        },300)
      })
  };
  return (
    <div className="sign-in h-full flex items-center justify-center">
      <div className="sign-in-content p-5 rounded-[20px]">
        <div className="uppercase text-center font-mono font-bold text-[24px] mb-28">
          Wellcome
        </div>
        <div className="px-10">
          <Form translate="no" onFinish={handleLogin} id="login">
            <Form.Item name="email">
              <Input
                prefix={<UserOutlined />}
                name="email"
                size="large"
                placeholder="Please enter Email"
                className="h-[50px] !rounded-[15px]"
              />
            </Form.Item>
            <Form.Item name="password">
              <Input.Password
                prefix={<LockOutlined />}
                name="password"
                size="large"
                placeholder="Please enter Password"
                className="h-[50px] !rounded-[15px]"
              />
            </Form.Item>
          </Form>
        </div>
        <div className="flex justify-center items-center py-5">
          <Button
            type="primary"
            className="w-1/3 !h-[50px] !rounded-[8px] !bg-red-300 !border-hidden font-mono font-bold"
            htmlType="submit"
            form="login"
          >
            Đăng nhập
          </Button>
        </div>
      </div>
    </div>
  );
}
