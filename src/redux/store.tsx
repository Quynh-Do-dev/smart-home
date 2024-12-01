import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// eslint-disable-next-line import/no-cycle
import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import UserSlice from "./slices/UserSlice";

const createNoopStorage = (): {
  getItem: (_key: string) => Promise<null>;
  setItem: (_key: string, value: unknown) => Promise<unknown>;
  removeItem: (_key: string) => Promise<void>;
} => {
  return {
    getItem(): Promise<null> {
      return Promise.resolve(null);
    },
    setItem(_, value): Promise<unknown> {
      return Promise.resolve(value);
    },
    removeItem(): Promise<void> {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const persistConfig = {
  key: "state",
  version: 1,
  storage: storage,
  blacklist: [], // loại bỏ trường này không lưu vào local
};

const rootReducers = combineReducers({
  // đặt các reducer ở đây
  user: UserSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;

export type IRootState = ReturnType<typeof store.getState>;

export type IAppDispatch = typeof store.dispatch;
