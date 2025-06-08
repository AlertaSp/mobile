import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.100.190:5020/api/v1", // IP LOCAL
  timeout: 5000,
});

export default api;
