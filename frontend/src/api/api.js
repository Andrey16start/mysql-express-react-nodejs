import axios from "axios";

const getUsers = () => {
  return axios.get('users');
};

const createUser = (user) => {
  const {
    id,
    username,
    password,
  } = user;

  const User = new FormData();

  User.set('id', id);
  User.set('username', username);
  User.set('password', password);

  return axios.post('user', User);
};

export default {
  getUsers,
  createUser,
};
