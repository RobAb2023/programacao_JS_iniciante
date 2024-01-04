const io = require("console-read-write");
const UserService = require("./services_Front/UserService");
const backend = require("../Backend/indexBack");

const main = async () => {
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
        const { email, password } = await UserService.store();
        backend.add({ email, password });
        break;
      case "2":
        const users = await backend.list();
        !users || users.length === 0
          ? console.log("\nEmpty List")
          : await UserService.print(users);
        break;
      default:
        console.log("Type 0, 1 or 2");
    }
  }
};

main();
