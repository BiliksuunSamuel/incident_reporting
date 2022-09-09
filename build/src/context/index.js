"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentReportContext = void 0;
const database_1 = __importDefault(require("../database"));
const sequelize_1 = __importDefault(require("sequelize"));
exports.IncidentReportContext = database_1.default.define("incidents", {
    client_id: {
        type: sequelize_1.default.NUMBER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    incident_desc: { type: sequelize_1.default.STRING, allowNull: false },
    city: { type: sequelize_1.default.STRING, allowNull: false },
    country: { type: sequelize_1.default.STRING, allowNull: false },
    date: { type: sequelize_1.default.DATE, allowNull: false },
    weather_report: { type: sequelize_1.default.JSON, allowNull: false },
}, { timestamps: false });
