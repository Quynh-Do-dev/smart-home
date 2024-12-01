import {fetcher} from "./index";

export interface ILoginUser {
  email: string;
  password: string;
}

export interface ILoginResponse {
  user?: {
    id: number;
    username: string;
    email: string;
    role: string;
    status: number;
    avatar: string | null;
    createdAt: string;
    updatedAt: string;
    token: string;
  };
}

export interface IUserRes {
  id: number;
  username: string;
  email: string;
  role: string;
  status: number;
  avatar: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface ICreateUser {
  username: string;
  email: string;
  role: string;
  password: string;
  avatar?: string | null;
}

export interface IGetUserRes {
  data: IUserRes[];
}

const path = {
  root: "users",
};

const login = (data: ILoginUser): Promise<ILoginResponse> => {
  return fetcher({
    method: "post",
    data: data,
    url: `/${path.root}/login`,
  });
};

const createUser = (data: ICreateUser): Promise<IUserRes> => {
  return fetcher({
    method: "post",
    data: data,
    url: `/${path.root}/create-user`,
  });
};

const getUsers = (params = {}): Promise<IGetUserRes> => {
  return fetcher({
    method: "get",
    params: params,
    url: `/${path.root}/get-user`,
  });
};

const LockAndUnlockUser = (data: {
  userId: number;
  status: number;
}): Promise<never> => {
  return fetcher({
    method: "patch",
    data: data,
    url: `/${path.root}/user-status`,
  });
};

const deleteUser = (userId: number): Promise<never> => {
  return fetcher({
    method: "delete",
    url: `/${path.root}/delete-user/${userId}`,
  });
};

const updateUser = (data: ICreateUser): Promise<never> => {
  return fetcher({
    method: "patch",
    data: data,
    url: `/${path.root}/update-user`,
  });
};

export {login, createUser, getUsers, LockAndUnlockUser, deleteUser, updateUser};
