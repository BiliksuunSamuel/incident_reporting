import configuration from "./configuration";
import http from "http";
import App from "./app";

///
const server = http.createServer(App);
//
server.listen(configuration.port, () =>
  console.log(`Server Running on http://localhost:${configuration.port}`)
);
