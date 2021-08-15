import { User } from "./models/User";

const user = new User({ name: "Yousif", age: 22 });

user.on("change", () => {});
user.on("change", () => {});
user.on("chfdgdfg", () => {});

console.log(user);
