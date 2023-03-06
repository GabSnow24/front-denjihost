import axios from "axios";

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
const apiService = axios.create({
  baseURL: "http://localhost:8080",
});

export default apiService;