import axios from "axios";

const API = axios.create({
  baseURL: "https://omnitaas-task.onrender.com"
});

export default API;