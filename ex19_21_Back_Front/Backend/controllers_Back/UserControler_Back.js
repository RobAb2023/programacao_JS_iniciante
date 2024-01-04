const UserService = require("../services_Back/UserService_Back");

const post = async ({ email, password }) => {
  UserService.store({ email, password });
};

const get = async () => {
  let users = await UserService.index();
  return users;
};

module.exports = {
  post,
  get,
};
