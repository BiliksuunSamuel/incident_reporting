import configuration from "../configuration";
import logger from "winston";
import { Sequelize } from "sequelize";

const devOptions = {
  database: configuration.dbName,
  user: configuration.dbUser,
  port: configuration.dbPort,
  password: configuration.dbPassword,
  host: configuration.dbHost,
};

const DbContext = new Sequelize(
  "postgres://xikwadwy:yHtw68Xs5hPi7eoTrgEaqV7LEAsLPRkm@heffalump.db.elephantsql.com/xikwadwy",
  {
    host: devOptions.host,
    port: devOptions.port,
    dialect: "postgres",
    ssl: true,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    logging: false,
  }
);

DbContext.authenticate()
  .then(() => {
    DbContext.authenticate()
      .then(async () => {
        console.log("Database Connected Successfully");
        const cmd = `CREATE TABLE IF NOT EXISTS incidents(
      client_id SERIAL PRIMARY KEY,
      incident_desc VARCHAR(255) NOT NULL,
      city VARCHAR(20) NOT NULL,
      country VARCHAR(50) NOT NULL,
      date DATE NOT NULL,
      weather_report JSON NOT NULL
     )`;
        await DbContext.query(cmd);
      })
      .catch((error) => {
        logger.log("error", error);
      });
  })
  .catch((error) => logger.log("error", error));

export default DbContext;
