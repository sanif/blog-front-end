import axios from "axios";
import endpoints from "./endpoints";

const axiosInstance = axios.create({
  baseURL: endpoints.baseUrl
});
export default axiosInstance;
