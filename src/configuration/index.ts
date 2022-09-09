import dotenv from "dotenv";
dotenv.config();

export default {
  port: process.env.PORT || process.env.port,
  dbName: process.env.dbName || "",
  dbPort: 5432,
  dbHost: process.env.dbHost || "",
  dbUser: process.env.dbUser || "",
  dbPassword: process.env.dbPassword || "",
  apiKey: process.env.apiKey || "",
};
