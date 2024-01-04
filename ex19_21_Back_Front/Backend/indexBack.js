const routes = require("./routes_Back");

const add = async ({ email, password }) => {
  routes.create({ email, password });
};

const list = async () => {
  let users = await routes.read();
  return users;
};
module.exports = {
  add,
  list,
};
