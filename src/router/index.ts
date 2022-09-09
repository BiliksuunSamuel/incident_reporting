import express, { Request, Response } from "express";
import moment from "moment";
const Router = express.Router();

Router.get("/", (request: Request, response: Response) => {
  response.send({
    developer: "Biliksuun Samuel",
    email: "biliksuunsamuel@gmail.com",
    git: "BiliksuunSamuel",
    currentTime: moment().format("dd, DD/MM/YYYY h:m a"),
    about: "Incident Weather Reporting API",
    routes: {
      get: "api/reports/get",
      post: "api/report/add",
    },
  });
});

export { default as ReportsRouter } from "./ReportsRouter";
export default Router;
