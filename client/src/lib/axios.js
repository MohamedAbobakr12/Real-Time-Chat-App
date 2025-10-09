import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.NODE === "development" ? "http://localhost:3000/api" : "/api/v1", 
    withCredentials: true,
})