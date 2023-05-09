import axios from "axios";

const authAxios = axios.create({
  baseURL: "http://localhost:5007",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
