import dotenv from "dotenv";
dotenv.config();

export default {
  port: process.env.PORT || process.env.port,
  dbName: process.env.dbName || "",
  dbPort: 5432,
  dbHost: process.env.dbHost || "",
  dbUser: process.env.dbUser || "",
  dbPassword: process.env.dbPassword || "",
  apiKey: process.env.apiKey || "afabb9625f429f674a168384a39b19b2",
};
