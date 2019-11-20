import axios from "axios";

const getUsers = () => {
  return axios.get('users');
};

const createUser = (user) => {
  return axios.post('user', user);
};

const login = (data) => {
  return axios.post('login', data);
};

const testDevPost = () => axios.post('test-dev-post');

export default {
  getUsers,
  createUser,
  testDevPost,
  login,
};
