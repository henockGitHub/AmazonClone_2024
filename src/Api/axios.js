import axios from "axios";

const axiosInstance = axios.create({
  // firebase deployed
  // baseURL : "https://api-gzaowg74wq-uc.a.run.app"
  //  using render
  baseURL: "https://amazon-api-94c5.onrender.com",
  // localhost
  // baseURL: "http://localhost:5000",
});

export { axiosInstance };
