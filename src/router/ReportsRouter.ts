import { GetRoutes } from "./../routes/index";
import { PostRoutes } from "../routes/index";
import express from "express";
import {
  HandleGetReports,
  HandleNewReport,
} from "../controllers/ReportsController";
const Router = express.Router();

//Post Routes
Router.post(PostRoutes.report_add, HandleNewReport);

//Get Request
Router.get(GetRoutes.reports_get, HandleGetReports);

export default Router;
