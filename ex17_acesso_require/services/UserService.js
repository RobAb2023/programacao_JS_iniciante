const io = require("console-read-write");
const { Module } = require("module");

const email = async () => {
  const email = await io.ask("Email: ");
  return email;
};
const password = async () => {
  const password = await io.ask("Password: ");
  return password;
};

const printEmail = async (email) => {
  console.log("\n===================================");
  console.log("Email: ", email);
};

const printPassword = async (password) => {
  console.log("\n===================================");
  console.log("Password: ", password);
};

module.exports = {
  email,
  password,
  printEmail,
  printPassword,
};
