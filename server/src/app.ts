import express, { urlencoded } from "express";
import sequelize from "./configs/db.config";
import cors from "cors";
import createTable from "./models";
import bodyParser from "body-parser";
import Router from "./routers";
const server = express();

server.use(urlencoded());

server.use(bodyParser.json());

sequelize.authenticate();

server.use(cors());

Router(server);

createTable();

server.listen(8000, () => {
  console.log("server 8000");
});
