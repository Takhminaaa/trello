import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://64d88a7de4ff6d99.mokky.dev",
  timeout: 5000,
  headers: {
    Accept: "application/json",
  },
});
