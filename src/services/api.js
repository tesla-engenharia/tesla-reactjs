import axios from "axios";

import apiConfig from "../config/Api";

const api = axios.create({
  baseURL: apiConfig.baseURL
});

export default api;
