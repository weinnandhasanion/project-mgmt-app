export interface AuthObject {
  user: UserObject | null;
  token: string | null;
}

export interface UserObject {
  id: string;
  username: string;
  givenName: string;
}

export interface Project {
  name: string;
  tasks: Task[];
}

export interface Task {
  name: string;
  description: string;
  estimate: number;
  startDate: typeof Date;
  endDate: typeof Date;
}

export type StringMap = { [k: string]: string };
