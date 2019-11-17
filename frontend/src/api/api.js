import axios from "axios";

const getUsers = () => {
  return axios.get('users');
};

const createUser = (user) => {
  return axios.post('user', user);
};

export default {
  getUsers,
  createUser,
};
