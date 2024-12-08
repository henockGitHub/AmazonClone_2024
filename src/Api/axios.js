import axios from "axios";

const axiosInstance = axios.create({
  // firebase deployed
  // baseURL : "https://api-gzaowg74wq-uc.a.run.app"
  //  using render
  // baseURL: "http://127.0.0.1:5001/clone-1cb13/us-central1/api",
  baseURL: "http://localhost:5000",
});

export { axiosInstance };
