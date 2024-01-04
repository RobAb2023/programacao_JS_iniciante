const UserRepository = require("../repositories_Back/UserRepository_Back");

const store = async ({ email, password }) => {
  UserRepository.insertUser({ email, password });
};

const index = async () => {
  let users = await UserRepository.findAll();
  return users;
};

module.exports = {
  store,
  index,
};
