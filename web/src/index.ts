import { User } from "./models/User";

const user = new User({ name: "Yousif", age: 22 });

user.set({ name: "Yoyo", age: 20 });

console.log(user.get("name"));
console.log(user.get("age"));
