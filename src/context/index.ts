import DbContext from "../database";
import Sequelize from "sequelize";

export const IncidentReportContext = DbContext.define(
  "incidents",
  {
    client_id: {
      type: Sequelize.NUMBER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    incident_desc: { type: Sequelize.STRING, allowNull: false },
    city: { type: Sequelize.STRING, allowNull: false },
    country: { type: Sequelize.STRING, allowNull: false },
    date: { type: Sequelize.DATE, allowNull: false },
    weather_report: { type: Sequelize.JSON, allowNull: false },
  },
  { timestamps: false }
);
