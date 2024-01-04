const UserControler = require("./controllers_Back/UserControler_Back");

const create = async ({ email, password }) => {
  UserControler.post({ email, password });
};
const read = async () => {
  let users = await UserControler.get();
  return users;
};

module.exports = {
  create,
  read,
};
