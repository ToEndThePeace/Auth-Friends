import axios from "axios";
import { tokenName } from "../data";
export const axiosWithAuth = () => {
  const token = localStorage.getItem(tokenName);
  return axios.create({
    headers: {
      Authorization: token,
    },
    baseURL: "http://localhost:5000",
  });
};
