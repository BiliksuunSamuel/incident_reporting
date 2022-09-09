import request from "supertest";
import app from "../app";
import { GetRoutes, PostRoutes } from "../routes";

//
describe(`GET ${GetRoutes.reports_get}`, () => {
  describe("get saved incident reports", () => {
    test("should respond back with status codes of 200, and content type should be json", async () => {
      const response = await request(app).get(GetRoutes.reports_get);
      expect(response.statusCode).toBe(200);
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
  });
});

//
describe(`POST ${PostRoutes.report_add}`, () => {
  describe("Add New Incident Report", () => {
    test("Should Return Json Results of New Incident Report Added", async () => {
      const response = await request(app).post(PostRoutes.report_add).send({
        client_id: 6,
        city: "Koforidua",
        country: "Ghana",
      });
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
  });
  //if validation failed;
  describe("when validation failed of the report info", () => {
    test("should respond with a statuscodes of 404", async () => {
      const response = await request(app).post(PostRoutes.report_add).send({
        city: "Koforidua",
      });
      expect(response.statusCode).toBe(404);
    });
  });
});
