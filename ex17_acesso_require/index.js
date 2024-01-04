//npm install console-read-write
const io = require("console-read-write");

const UserService = require("./services/UserService");

const main = async () => {
  let email, password;
  while (true) {
    console.log("\n===================================");
    console.log("choice...");
    console.log("0 exit");
    console.log("1 Add User");
    console.log("2 List Users");

    const choice = await io.ask("\n Type here: ");

    switch (choice) {
      case "0":
        console.log("\n===================================");
        console.log("\nLeft the App\n");
        process.exit(0);
      case "1":
        email = await UserService.email();
        password = await UserService.password();
        break;
      case "2":
        await UserService.printEmail(email);
        await UserService.printPassword(password);
        break;
      default:
        console.log("Type 0, 1 or 2");
    }
  }
};

main();
