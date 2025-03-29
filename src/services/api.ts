import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api"; // Change this to your backend URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
