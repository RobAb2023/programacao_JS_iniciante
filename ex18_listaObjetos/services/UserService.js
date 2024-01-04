const io = require("console-read-write");
const { Module } = require("module");

const store = async () => {
  const email = await io.ask("Email: ");
  const password = await io.ask("Password: ");

  return { email, password };
};

const print = async (users) => {
  for (let i = 0; i < users.length; i++) {
    console.log("\n===================================");
    console.log("Id: ", i + 1);
    console.log("Email: ", users[i].email);
    console.log("Password: ", users[i].password);
  }
};

module.exports = {
  store,
  print,
};
