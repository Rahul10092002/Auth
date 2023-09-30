import axios from "axios";

 const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  withCredentials: true, // Enable sending cookies and headers in cross-origin requests
});

export default axiosClient;