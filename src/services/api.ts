import axios from "axios";
// import { ENVIRONMENT } from "../config/environment";

// console.log("ENVIRONMENT", ENVIRONMENT);
// const API_BASE_URL = `${ENVIRONMENT.backend_url}`;
// const API_BASE_URL = `http://read-my-lips.cs.colman.ac.il:8000`;
const API_BASE_URL = `http://193.106.55.127/:8000`; // Change this to your backend URL

const api = axios.create({
  baseURL: API_BASE_URL,
  
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
