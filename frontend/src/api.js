import axios from "axios";

const API = axios.create({
  baseURL: "https://omniitaas-task.onrender.com"
});

export default API;