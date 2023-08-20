import axios from "axios";
import { BACKEND_API_URL } from "config";

export const axiosClient = axios.create({
  baseURL: BACKEND_API_URL,
});
