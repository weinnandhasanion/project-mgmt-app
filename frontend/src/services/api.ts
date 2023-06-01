import axios from "axios";
import { API_BASE_URL } from "env-config";
import { ApiGet, ApiPost } from "types";
import { getLocalStorageToken } from "util/util";

const instance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Accept",
    Authorization: getLocalStorageToken(),
  },
});

export const get: ApiGet = async (url: string) => {
  return instance.get(url);
};

export const post: ApiPost = async (url, data) => {
  return instance.post(url, data);
};
