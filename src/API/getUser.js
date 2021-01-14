import axios from "axios";

function getUser() {
  return axios.get("/user");
}

export default getUser;
