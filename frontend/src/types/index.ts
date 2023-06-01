import { AxiosResponse } from "axios";
import store from "store";

export interface AuthObject {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: StringMap | undefined;
}

export interface User {
  id: string;
  username: string;
  givenName: string;
}

export interface Project {
  name: string;
  description: string;
  tasks?: Task[];
}

export interface Task {
  name: string;
  description: string;
  estimate: number;
  assignedBy: string;
  assignedAt: string;
}

export type StringMap = { [k: string]: string };

// useAppSelector state
export type RootState = ReturnType<typeof store.getState>;
// useAppDispatch argument type
export type AppDispatch = typeof store.dispatch;

// API service types
export type ApiGet = <R, T = AxiosResponse<R>>(url: string) => Promise<T>;
export type ApiPost = <D, R, T = AxiosResponse<R>>(
  url: string,
  data: D
) => Promise<T>;
