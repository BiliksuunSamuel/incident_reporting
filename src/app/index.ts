import express from "express";
import cors from "cors";
import winston from "winston";
import Router, { ReportsRouter } from "../router";
//
const app = express();

//
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false, limit: "100mb" }));

///
app.use(Router);
app.use(ReportsRouter);

//creating custom logger
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

///
if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}
//

export default app;
