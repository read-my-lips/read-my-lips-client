import axios from "axios";
// import { ENVIRONMENT } from "../config/environment";

// console.log("ENVIRONMENT", ENVIRONMENT);
// const API_BASE_URL = `${ENVIRONMENT.backend_url}`;
const API_BASE_URL = `http://read-my-lips.cs.colman.ac.il:8000`;

const api = axios.create({
  baseURL: API_BASE_URL,
  
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
