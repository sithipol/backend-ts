import mysql, { Connection } from "mysql";
import dotenv from "dotenv";
const connection: Connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "usermanagement",
});

dotenv.config();

export default connection;
