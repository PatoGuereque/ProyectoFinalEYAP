import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { join } from "path";

const app = express();
const buildPath = join(`${__dirname}/../build`);

app.use(helmet());
app.use(morgan("common"));
app.use(express.json());

app.get("/", (_req, res) => {
  res.status(200).send("API working");
});

app.use((error, _req, res, _next) => {
  if (error.status) {
    res.status(error.status);
  } else {
    res.status(500);
  }

  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === "production" ? "🥞" : error.stack,
  });
});

app.use(express.static(buildPath));

app.get("*", (_req, res) => {
  res.sendFile(`${buildPath}/index.html`);
});

export default app;