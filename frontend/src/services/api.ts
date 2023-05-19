import axios from "axios";
import { API_BASE_URL } from "env-config";

const instance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Accept",
  },
});

export const get = async (url: string) => {
  return instance.get(url);
};

export const post = async <D>(url: string, data: D) => {
  return instance.post(url, data);
};