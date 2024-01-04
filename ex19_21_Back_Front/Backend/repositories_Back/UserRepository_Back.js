let users = [];
let id = 0;

const insertUser = async ({ email, password }) => {
  users[id] = { email, password };
  id++;
};

const findAll = async () => {
  return users;
};

module.exports = {
  insertUser,
  findAll,
};
