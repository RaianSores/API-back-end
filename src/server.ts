import "reflect-metadata";
import express from "express";

import { router } from "../src/routes/routes";

import "./database";

const app = express();

app.use(express.json());

app.use(router);

app.listen(3000, () => console.log("Server is running"));