import bcrypt from "bcryptjs";

const users = [
  {
    name: "Taimoor Aslam",
    email: "taimoor@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Jane Doe",
    email: "jane@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "John Doe",
    email: "jhon@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
