//handles authAxios events and handles token

import axios from "axios";

const authAxios = axios.create({
  baseURL: "http://localhost:5007",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default authAxios;
