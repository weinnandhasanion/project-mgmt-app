import store from "store";

export interface AuthObject {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: { [key: string]: string } | undefined;
}

export interface User {
  id: string;
  username: string;
  givenName: string;
}

export interface Project {
  name: string;
  description: string;
  tasks: Task[];
}

export interface Task {
  name: string;
  description: string;
  estimate: number;
  assignedBy: string;
  assignedAt: string;
}

export type StringMap = { [k: string]: string };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
