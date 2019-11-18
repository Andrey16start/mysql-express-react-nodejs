import axios from "axios";

const getUsers = () => {
  return axios.get('users');
};

const createUser = (user) => {
  return axios.post('user', user);
};

const testDevPost = () => axios.post('test-dev-post');

export default {
  getUsers,
  createUser,
  testDevPost,
};
